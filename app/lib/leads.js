// app/lib/leads.js
//
// Shared definition of a Luxterra lead: what the fields are, how they are
// validated on the server, and how they are rendered into an email.
// The form component imports the option lists from here so the browser and
// the server can never drift apart.

export const PROJECT_TYPES = [
  "Custom home",
  "Build on my lot",
  "ADU / mother-in-law suite",
  "Major renovation (not routine remodels)",
  "Duplex / small multifamily",
  "Commercial build-out",
  "Industrial / warehouse / lab",
  "Not sure yet",
];

export const LOT_STATUS = [
  "I already own the lot",
  "I'm under contract on a lot",
  "I'm still looking for land",
  "Building on an existing property",
  "Not applicable",
];

export const BUDGETS = [
  "Under $250k",
  "$250k - $500k",
  "$500k - $1M",
  "$1M - $2M",
  "Over $2M",
  "Not sure yet",
];

export const TIMELINES = [
  "As soon as possible",
  "1 - 3 months",
  "3 - 6 months",
  "6 - 12 months",
  "More than 12 months",
];

export const FINANCING = [
  "Paying cash",
  "Construction loan approved",
  "Talking to lenders now",
  "Haven't started financing yet",
];

export const PLANS = [
  "I have complete plans",
  "I have preliminary drawings",
  "No plans yet",
];

export const CONTACT_METHODS = ["Phone call", "Text message", "Email"];

// Server-side field definitions. `required` is enforced in the API route.
export const FIELDS = [
  { name: "fullName", label: "Full name", required: true, maxLength: 120 },
  { name: "email", label: "Email", required: true, maxLength: 200 },
  { name: "phone", label: "Phone", required: true, maxLength: 40 },
  { name: "projectArea", label: "Project address or area", required: false, maxLength: 200 },
  { name: "projectType", label: "Project type", required: true, options: PROJECT_TYPES },
  { name: "lotStatus", label: "Lot status", required: false, options: LOT_STATUS },
  { name: "budget", label: "Approximate budget", required: false, options: BUDGETS },
  { name: "timeline", label: "Desired start", required: false, options: TIMELINES },
  { name: "financing", label: "Financing status", required: false, options: FINANCING },
  { name: "plans", label: "Plans available", required: false, options: PLANS },
  { name: "preferredContact", label: "Preferred contact method", required: false, options: CONTACT_METHODS },
  { name: "message", label: "Project description", required: true, maxLength: 4000 },
  { name: "hearAbout", label: "How they heard about us", required: false, maxLength: 200 },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function digitsOnly(value) {
  return (value || "").replace(/\D/g, "");
}

export function validateLead(raw) {
  const errors = {};
  const data = {};

  for (const field of FIELDS) {
    let value = typeof raw[field.name] === "string" ? raw[field.name].trim() : "";

    if (field.maxLength && value.length > field.maxLength) {
      value = value.slice(0, field.maxLength);
    }

    // Reject values that aren't in our own option list - stops tampering.
    if (field.options && value && !field.options.includes(value)) {
      errors[field.name] = "Please choose one of the listed options.";
      continue;
    }

    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }

    data[field.name] = value;
  }

  if (data.email && !EMAIL_RE.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && digitsOnly(data.phone).length < 10) {
    errors.phone = "Please enter a phone number with at least 10 digits.";
  }

  // Very short descriptions are almost always bots or misfires.
  if (data.message && data.message.length < 10) {
    errors.message = "Please tell us a little more about the project.";
  }

  return { valid: Object.keys(errors).length === 0, errors, data };
}

// A lead where the person owns land, has money identified, and wants to start
// soon deserves to jump the queue. This only affects the email subject line.
export function isHighIntent(data) {
  const ownsLot =
    data.lotStatus === "I already own the lot" ||
    data.lotStatus === "I'm under contract on a lot";
  const funded =
    data.financing === "Paying cash" ||
    data.financing === "Construction loan approved";
  const soon =
    data.timeline === "As soon as possible" || data.timeline === "1 - 3 months";

  return [ownsLot, funded, soon].filter(Boolean).length >= 2;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function leadToHtml(data, meta = {}) {
  const rows = FIELDS.filter((f) => data[f.name])
    .map(
      (f) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          f.label
        )}</td><td style="padding:6px 0;color:#111827;font-size:14px;">${escapeHtml(
          data[f.name]
        ).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  return `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;">
  <h2 style="margin:0 0 4px;font-size:18px;color:#111827;">New website lead</h2>
  <p style="margin:0 0 18px;color:#6b7280;font-size:13px;">Submitted ${escapeHtml(
    meta.submittedAt || ""
  )} from ${escapeHtml(meta.sourcePage || "the website")}</p>
  <table style="border-collapse:collapse;width:100%;">${rows}</table>
  <p style="margin:20px 0 0;color:#6b7280;font-size:12px;">Reply directly to this email to reach ${escapeHtml(
    data.fullName
  )}.</p>
</div>`;
}

export function leadToText(data, meta = {}) {
  const lines = FIELDS.filter((f) => data[f.name]).map(
    (f) => `${f.label}: ${data[f.name]}`
  );
  return [
    "New website lead",
    `Submitted ${meta.submittedAt || ""} from ${meta.sourcePage || "the website"}`,
    "",
    ...lines,
  ].join("\n");
}

export function confirmationHtml(data) {
  return `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;line-height:1.6;color:#111827;">
  <p>Hi ${escapeHtml((data.fullName || "").split(" ")[0] || "there")},</p>
  <p>Thanks for reaching out to Luxterra Builders. Your project details came through and we'll follow up within one business day.</p>
  <p>If it's easier to talk it through now, call or text <a href="tel:+12542902482" style="color:#a16207;">(254) 290-2482</a>.</p>
  <p style="margin-top:22px;">Here's what you sent us:</p>
  <blockquote style="margin:8px 0;padding:10px 14px;border-left:3px solid #facc15;background:#f9fafb;color:#374151;font-size:14px;">${escapeHtml(
    data.message
  ).replace(/\n/g, "<br>")}</blockquote>
  <p style="margin-top:22px;">Christian Hernandez<br>
  <strong>Luxterra Builders</strong><br>
  <a href="tel:+12542902482" style="color:#a16207;">(254) 290-2482</a><br>
  <a href="https://www.luxterrabuilders.com" style="color:#a16207;">luxterrabuilders.com</a></p>
</div>`;
}
