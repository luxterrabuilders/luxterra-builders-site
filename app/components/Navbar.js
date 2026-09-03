"use client";

// app/components/Navbar.js
//
// Below 900px the six desktop links used to overflow the header - "Contact"
// clipped mid-word and "Get a Quote" was pushed off screen entirely. The
// links now collapse into a drawer, and the quote CTA stays visible at every
// width because it is the primary action on the site.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navbar.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef(null);

  // Close the drawer whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the drawer and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <div className="nav-logo-circle">
            <Image
              src="/luxterra-logo.png"
              alt="Luxterra Builders logo"
              width={28}
              height={28}
              className="nav-logo-img"
            />
          </div>
          <span className="nav-brand-text">Luxterra Builders</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-links" aria-label="Main">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/quote" className="nav-link nav-link-cta">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile: CTA always visible, links behind a toggle */}
        <div className="nav-mobile-actions">
          <Link href="/quote" className="nav-mobile-cta">
            Get a Quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`nav-toggle-bars${open ? " is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div className="nav-drawer" id="nav-drawer" hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-drawer-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a className="nav-drawer-call" href="tel:+12542902482">
            Call (254) 290-2482
          </a>
        </nav>
      </div>
    </header>
  );
}
