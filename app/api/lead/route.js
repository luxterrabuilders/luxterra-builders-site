// app/api/lead/route.js
//
// Receives a lead from the website, validates it on the server, and makes
// sure it reaches a human. Delivery is layered so a lead is never lost:
//
//   1. Resend  -> notification to the office + confirmation to the customer
//   2. Formspree fallback, if Resend is unconfigured or fails
//   3. Structured console log (visible in Vercel logs) in every case
//
// If every delivery path fails we tell the customer honestly and give them
// the phone number, rather than showing a success screen for a lost lead.

import { NextResponse } from "next/server";
import { checkRateLimit, pruneRateLimit } from "../../lib/rateLimit";
import {
  validateLead,
  isHighIntent,
  leadToHtml,
  leadToText,
  confirmationHtml,
} from "../../lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

async function sendViaResend({ subject, html, text, to, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !from) {
    return { ok: false, reason: "not_configured" };
  }

  const payload = { from, to: [to], subject, html };
  if (text) payload.text = text;
  if (replyTo) payload.reply_to = replyTo;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      return { ok: false, reason: `resend_${response.status}`, detail };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, reason: "resend_exception", detail: String(error) };
  }
}

// Hard-coded default so the safety net works even with zero configuration.
// An env var can override it, but it is never required.
const DEFAULT_FALLBACK_ENDPOINT = "https://formspree.io/f/myzrdyba";

async function sendViaFallback(data, meta) {
  const endpoint = process.env.LEAD_FALLBACK_ENDPOINT || DEFAULT_FALLBACK_ENDPOINT;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _source: meta.sourcePage, _submittedAt: meta.submittedAt }),
    });

    if (!response.ok) {
      return { ok: false, reason: `fallback_${response.status}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, reason: "fallback_exception", detail: String(error) };
  }
}

// A plain HTML response for the no-JavaScript path, where the visitor has no
// client-side error handling to fall back on.
function htmlResponse(status, heading, detail) {
  const body = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${heading} - Luxterra Builders</title>
<style>body{margin:0;padding:48px 24px;background:#020617;color:#f9fafb;
font-family:system-ui,-apple-system,sans-serif;line-height:1.6}
main{max-width:34rem;margin:0 auto}h1{font-size:1.6rem;margin:0 0 12px}
p{color:#cbd5e1}a{color:#facc15}</style></head><body><main>
<h1>${heading}</h1><p>${detail}</p>
<p>Call or text <a href="tel:+12542902482">(254) 290-2482</a> and we'll take the details directly.</p>
<p><a href="/contact">Back to the contact page</a></p>
</main></body></html>`;
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request) {
  // The form posts JSON when JavaScript is running, and form-encoded data
  // when it isn't (or hasn't hydrated yet). Both must work.
  const contentType = request.headers.get("content-type") || "";
  const isFormPost = !contentType.includes("application/json");

  let body;
  try {
    if (isFormPost) {
      body = Object.fromEntries((await request.formData()).entries());
    } else {
      body = await request.json();
    }
  } catch {
    if (isFormPost) {
      return htmlResponse(400, "We couldn't read that", "Something went wrong reading your submission.");
    }
    return NextResponse.json(
      { ok: false, error: "We couldn't read that submission. Please try again." },
      { status: 400 }
    );
  }

  const thankYou = () =>
    NextResponse.redirect(new URL("/thank-you", request.url), 303);

  // --- Spam gate 1: honeypot. Real people never see or fill this field. ---
  if (typeof body.company === "string" && body.company.trim() !== "") {
    // Pretend it worked so bots don't learn anything, but deliver nothing.
    return isFormPost ? thankYou() : NextResponse.json({ ok: true });
  }

  // --- Spam gate 2: submitted implausibly fast after the form loaded. ---
  const renderedAt = Number(body.renderedAt);
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < 3000) {
    return isFormPost ? thankYou() : NextResponse.json({ ok: true });
  }

  // --- Spam gate 3: rate limit per IP. ---
  pruneRateLimit();
  const limit = checkRateLimit(clientIp(request));
  if (!limit.allowed) {
    if (isFormPost) {
      return htmlResponse(429, "That's a few submissions in a row",
        "Please wait a few minutes before sending another message.");
    }
    return NextResponse.json(
      {
        ok: false,
        error:
          "That's a few submissions in a short time. Please wait a moment, or call (254) 290-2482.",
      },
      { status: 429 }
    );
  }

  // --- Validation ---
  const { valid, errors, data } = validateLead(body);
  if (!valid) {
    if (isFormPost) {
      const list = Object.values(errors).join(" ");
      return htmlResponse(422, "A few details are missing", list);
    }
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", errors },
      { status: 422 }
    );
  }

  const meta = {
    submittedAt: new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    sourcePage: typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 120) : "website",
  };

  // Always log a structured record. Even in a total delivery failure this
  // survives in the Vercel function logs and the lead can be recovered.
  console.log(
    "LUXTERRA_LEAD",
    JSON.stringify({ ...data, ...meta, highIntent: isHighIntent(data) })
  );

  const flag = isHighIntent(data) ? "[QUALIFIED] " : "";
  const subject = `${flag}New lead: ${data.projectType} - ${data.fullName}`;

  const toAddress = process.env.LEAD_TO_EMAIL || "info@luxterrabuilders.com";

  const notification = await sendViaResend({
    subject,
    html: leadToHtml(data, meta),
    text: leadToText(data, meta),
    to: toAddress,
    replyTo: data.email,
  });

  let delivered = notification.ok;
  let deliveryPath = notification.ok ? "resend" : null;

  let lastFallbackReason = null;
  let lastFallbackDetail = null;

  if (!delivered) {
    console.warn("LUXTERRA_LEAD_RESEND_FAILED", notification.reason, notification.detail || "");
    const fallback = await sendViaFallback(data, meta);
    delivered = fallback.ok;
    deliveryPath = fallback.ok ? "fallback" : null;
    lastFallbackReason = fallback.reason || null;
    lastFallbackDetail = fallback.detail || null;
    if (!fallback.ok) {
      console.error("LUXTERRA_LEAD_FALLBACK_FAILED", fallback.reason, fallback.detail || "");
    }
  }

  if (!delivered) {
    const payload = {
      ok: false,
      error:
        "We couldn't deliver your message right now. Please call or text (254) 290-2482 and we'll pick it up straight away.",
    };
    if (process.env.NODE_ENV !== "production") {
      payload.diagnostics = {
        resendConfigured: Boolean(process.env.RESEND_API_KEY && process.env.LEAD_FROM_EMAIL),
        resendReason: notification.reason || null,
        resendDetail: (notification.detail || "").slice(0, 300) || null,
        fallbackReason: lastFallbackReason,
        fallbackDetail: (lastFallbackDetail || "").slice(0, 300) || null,
      };
    }
    if (isFormPost) {
      return htmlResponse(502, "We couldn't deliver your message",
        "Your details didn't reach us, so please don't assume we have them.");
    }
    return NextResponse.json(payload, { status: 502 });
  }

  // Confirmation to the customer is best-effort. It must never turn a
  // successfully delivered lead into an error the customer sees.
  if (notification.ok) {
    const confirmation = await sendViaResend({
      subject: "We received your project details - Luxterra Builders",
      html: confirmationHtml(data),
      to: data.email,
    });
    if (!confirmation.ok) {
      console.warn("LUXTERRA_LEAD_CONFIRMATION_FAILED", confirmation.reason);
    }
  }

  return isFormPost ? thankYou() : NextResponse.json({ ok: true, deliveryPath });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
