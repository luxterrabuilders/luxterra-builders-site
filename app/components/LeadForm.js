"use client";

// app/components/LeadForm.js
//
// One form component used by both /contact and /quote.
//   variant="short" - fast contact form
//   variant="full"  - qualifying consultation request
//
// Handles loading, success and error states, fires GA4 events, and posts
// to /api/lead. It never navigates away from the site except to our own
// thank-you page.

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  PROJECT_TYPES,
  LOT_STATUS,
  BUDGETS,
  TIMELINES,
  FINANCING,
  PLANS,
  CONTACT_METHODS,
} from "../lib/leads";
import "./lead-form.css";

function track(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export default function LeadForm({ variant = "full", sourcePage = "website" }) {
  const router = useRouter();
  const renderedAt = useRef(Date.now());
  const startedRef = useRef(false);
  const errorRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isFull = variant === "full";

  function handleFirstInteraction() {
    if (startedRef.current) return;
    startedRef.current = true;
    track("form_start", { form_variant: variant, source_page: sourcePage });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFormError("");
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.renderedAt = renderedAt.current;
    payload.sourcePage = sourcePage;

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.ok) {
        track("generate_lead", {
          form_variant: variant,
          source_page: sourcePage,
          project_type: payload.projectType || "",
          lot_status: payload.lotStatus || "",
        });
        router.push("/thank-you");
        return;
      }

      setFieldErrors(result.errors || {});
      setFormError(
        result.error ||
          "Something went wrong sending that. Please try again, or call (254) 290-2482."
      );
      setStatus("error");
      requestAnimationFrame(() => errorRef.current?.focus());
    } catch {
      setFormError(
        "We couldn't reach the server. Please check your connection and try again, or call (254) 290-2482."
      );
      setStatus("error");
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  const submitting = status === "submitting";

  function fieldProps(name) {
    return {
      id: name,
      name,
      "aria-invalid": fieldErrors[name] ? "true" : undefined,
      "aria-describedby": fieldErrors[name] ? `${name}-error` : undefined,
    };
  }

  function FieldError({ name }) {
    if (!fieldErrors[name]) return null;
    return (
      <span className="lf-field-error" id={`${name}-error`}>
        {fieldErrors[name]}
      </span>
    );
  }

  return (
    <form
      className="lf-form"
      action="/api/lead"
      method="POST"
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstInteraction}
      noValidate
    >
      {/* These travel with a no-JavaScript submit so the server still knows
          where the lead came from. The JS path sends them in the payload. */}
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="noscript" value="1" />
      {status === "error" && (
        <div className="lf-alert" role="alert" tabIndex={-1} ref={errorRef}>
          {formError}
        </div>
      )}

      {/* Honeypot. Hidden from people, irresistible to bots. */}
      <div className="lf-hp" aria-hidden="true">
        <label htmlFor="company">Company (leave this blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="lf-row">
        <div className="lf-field">
          <label htmlFor="fullName">Full name <span className="lf-req">*</span></label>
          <input {...fieldProps("fullName")} type="text" required autoComplete="name" placeholder="Your name" />
          <FieldError name="fullName" />
        </div>
        <div className="lf-field">
          <label htmlFor="email">Email <span className="lf-req">*</span></label>
          <input {...fieldProps("email")} type="email" required autoComplete="email" placeholder="you@example.com" />
          <FieldError name="email" />
        </div>
      </div>

      <div className="lf-row">
        <div className="lf-field">
          <label htmlFor="phone">Phone <span className="lf-req">*</span></label>
          <input {...fieldProps("phone")} type="tel" required autoComplete="tel" inputMode="tel" placeholder="(210) 555-0134" />
          <FieldError name="phone" />
        </div>
        <div className="lf-field">
          <label htmlFor="projectArea">Project address or area</label>
          <input {...fieldProps("projectArea")} type="text" placeholder="Neighborhood, city, or lot address" />
          <FieldError name="projectArea" />
        </div>
      </div>

      <div className="lf-field">
        <label htmlFor="projectType">What are you planning to build? <span className="lf-req">*</span></label>
        <select {...fieldProps("projectType")} required defaultValue="">
          <option value="" disabled>Select a project type</option>
          {PROJECT_TYPES.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <FieldError name="projectType" />
      </div>

      {isFull && (
        <>
          <div className="lf-field">
            <label htmlFor="lotStatus">Do you already own the lot?</label>
            <select {...fieldProps("lotStatus")} defaultValue="">
              <option value="">Select one</option>
              {LOT_STATUS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <FieldError name="lotStatus" />
          </div>

          <div className="lf-row">
            <div className="lf-field">
              <label htmlFor="budget">Approximate construction budget</label>
              <select {...fieldProps("budget")} defaultValue="">
                <option value="">Select a range</option>
                {BUDGETS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="lf-field">
              <label htmlFor="timeline">Desired start</label>
              <select {...fieldProps("timeline")} defaultValue="">
                <option value="">Select one</option>
                {TIMELINES.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="lf-row">
            <div className="lf-field">
              <label htmlFor="financing">Financing</label>
              <select {...fieldProps("financing")} defaultValue="">
                <option value="">Select one</option>
                {FINANCING.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="lf-field">
              <label htmlFor="plans">Do you have plans?</label>
              <select {...fieldProps("plans")} defaultValue="">
                <option value="">Select one</option>
                {PLANS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div className="lf-field">
        <label htmlFor="message">Tell us about the project <span className="lf-req">*</span></label>
        <textarea
          {...fieldProps("message")}
          required
          rows={isFull ? 5 : 4}
          placeholder="Lot location, square footage, how you plan to use the space, and anything you already know about the site."
        />
        <FieldError name="message" />
      </div>

      {isFull && (
        <div className="lf-row">
          <div className="lf-field">
            <label htmlFor="preferredContact">Best way to reach you</label>
            <select {...fieldProps("preferredContact")} defaultValue="">
              <option value="">Select one</option>
              {CONTACT_METHODS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="lf-field">
            <label htmlFor="hearAbout">How did you hear about us?</label>
            <input {...fieldProps("hearAbout")} type="text" placeholder="Google, referral, drove past a job" />
          </div>
        </div>
      )}

      <button type="submit" className="lf-submit" disabled={submitting}>
        {submitting ? (
          <>
            <span className="lf-spinner" aria-hidden="true" />
            Sending your details...
          </>
        ) : isFull ? (
          "Request my free consultation"
        ) : (
          "Send message"
        )}
      </button>

      <p className="lf-consent">
        By submitting this form you agree to be contacted by Luxterra Builders about your
        project. We don&apos;t sell or share your information. See our{" "}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <p className="lf-alt">
        Prefer to talk now? Call or text{" "}
        <a href="tel:+12542902482" onClick={() => track("click_to_call", { source_page: sourcePage })}>
          (254) 290-2482
        </a>
        .
      </p>
    </form>
  );
}
