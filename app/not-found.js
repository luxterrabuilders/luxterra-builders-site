// app/not-found.js
//
// A mistyped URL used to hit the bare Next.js default. Now it explains what
// happened and routes people back toward something useful.

import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/custom-home-builder-san-antonio", label: "Custom home builder in San Antonio" },
  { href: "/adu-builder-san-antonio", label: "ADUs and mother-in-law suites" },
  { href: "/multifamily-contractor-san-antonio", label: "Duplexes and small multifamily" },
  { href: "/commercial-contractor-san-antonio", label: "Commercial build-outs" },
  { href: "/industrial-build-outs-san-antonio", label: "Industrial, warehouse and lab spaces" },
  { href: "/projects", label: "Recent Luxterra projects" },
];

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf-inner">
        <p className="nf-code">404</p>
        <h1>That page isn&apos;t here.</h1>
        <p className="nf-lede">
          The link may be out of date, or the address may have a typo in it.
          Here&apos;s what people usually come looking for.
        </p>

        <ul className="nf-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nf-cta">
          <Link className="nf-primary" href="/quote">
            Request a free consultation
          </Link>
          <a className="nf-secondary" href="tel:+12542902482">
            Call (254) 290-2482
          </a>
        </div>
      </div>
    </main>
  );
}
