// app/api/lead/diagnostics/route.js
//
// TEMPORARY. Added to work out why lead delivery keeps falling back to the
// Formspree route instead of using Resend. DELETE THIS FILE once that is
// resolved - see the note at the bottom of the file.
//
// It never returns the API key. It reports whether the key is present, its
// length and prefix, and what Resend says when the key is actually used.
// The from/to addresses are not secrets - they appear on outgoing email -
// so they are echoed in full, because a typo in one of them is a likely
// cause and hiding it would defeat the point.

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ACCESS_TOKEN = "lux-diag-7f3a91";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("key") !== ACCESS_TOKEN) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const apiKey = process.env.RESEND_API_KEY || "";
  const from = process.env.LEAD_FROM_EMAIL || "";
  const to = process.env.LEAD_TO_EMAIL || "";
  const fallback = process.env.LEAD_FALLBACK_ENDPOINT || "(using built-in default)";

  const report = {
    env: {
      RESEND_API_KEY: apiKey
        ? { present: true, length: apiKey.length, startsWith: apiKey.slice(0, 3), hasWhitespace: apiKey !== apiKey.trim() }
        : { present: false },
      LEAD_FROM_EMAIL: from ? { present: true, value: from, hasWhitespace: from !== from.trim() } : { present: false },
      LEAD_TO_EMAIL: to ? { present: true, value: to } : { present: false },
      LEAD_FALLBACK_ENDPOINT: fallback,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV || null,
    },
    // This is the exact condition the lead route uses to decide whether to
    // attempt Resend at all.
    wouldAttemptResend: Boolean(apiKey && from),
  };

  // If a key is present, ask Resend directly whether it works and whether the
  // domain is verified. Status codes only - no response bodies with secrets.
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${apiKey.trim()}` },
      });
      const body = await res.json().catch(() => null);
      report.resend = {
        httpStatus: res.status,
        meaning:
          res.status === 200 ? "key is valid"
          : res.status === 401 ? "key is invalid or revoked"
          : res.status === 403 ? "key lacks permission"
          : `unexpected status ${res.status}`,
        domains: Array.isArray(body?.data)
          ? body.data.map((d) => ({ name: d.name, status: d.status, region: d.region }))
          : null,
      };
    } catch (error) {
      report.resend = { error: String(error).slice(0, 200) };
    }
  }

  return NextResponse.json(report);
}

// DELETE THIS ROUTE once lead delivery is confirmed working on Resend.
