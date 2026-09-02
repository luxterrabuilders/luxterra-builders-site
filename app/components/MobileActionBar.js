"use client";

// app/components/MobileActionBar.js
//
// Persistent call / consultation bar on phones. Construction leads arrive
// on mobile with high intent, so the two actions that matter are always
// one tap away. Hidden on desktop, where the navbar CTA already serves.

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./mobile-action-bar.css";

const PHONE_DISPLAY = "(254) 290-2482";
const PHONE_HREF = "tel:+12542902482";

export default function MobileActionBar() {
  const pathname = usePathname();

  // Don't cover the form the visitor is already filling in.
  if (pathname === "/quote" || pathname === "/thank-you") return null;

  function trackCall() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click_to_call", { source_page: pathname });
    }
  }

  return (
    <div className="mab" role="region" aria-label="Contact Luxterra Builders">
      <a className="mab-call" href={PHONE_HREF} onClick={trackCall}>
        <span aria-hidden="true" className="mab-icon">&#9990;</span>
        Call now
        <span className="mab-sub">{PHONE_DISPLAY}</span>
      </a>
      <Link className="mab-quote" href="/quote">
        Request a consultation
      </Link>
    </div>
  );
}
