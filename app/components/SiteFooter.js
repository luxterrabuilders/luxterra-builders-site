// app/components/SiteFooter.js
//
// The site had no footer at all. This adds one: consistent business details
// (name, phone, email, hours, service area) that both people and search
// engines can read on every page, plus the internal links that were only
// reachable from the middle of the homepage.

import Link from "next/link";
import { GOOGLE_BUSINESS_PROFILE_URL } from "../lib/business";
import "./site-footer.css";

const SERVICES = [
  { href: "/custom-home-builder-san-antonio", label: "Custom home builder" },
  { href: "/adu-builder-san-antonio", label: "ADUs & guest suites" },
  { href: "/multifamily-contractor-san-antonio", label: "Multifamily & duplexes" },
  { href: "/commercial-contractor-san-antonio", label: "Commercial build-outs" },
  { href: "/industrial-build-outs-san-antonio", label: "Industrial & lab" },
];

const COMPANY = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/areas-we-serve", label: "Areas we serve" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request a consultation" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sf">
      <div className="sf-inner">
        <div className="sf-col sf-col-brand">
          <p className="sf-name">Luxterra Builders</p>
          <p className="sf-blurb">
            Design-build contractor serving San Antonio and the Texas Hill Country.
            Custom homes, ADUs, multifamily, commercial and industrial construction.
          </p>
          <ul className="sf-contact">
            <li>
              <a href="tel:+12542902482">(254) 290-2482</a>
            </li>
            <li>
              <a href="mailto:info@luxterrabuilders.com">info@luxterrabuilders.com</a>
            </li>
            <li>Monday &ndash; Friday, 8:00am &ndash; 5:00pm</li>
            <li>
              <a
                href={GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find us on Google
              </a>
            </li>
          </ul>
        </div>

        <div className="sf-col">
          <p className="sf-heading">Services</p>
          <ul className="sf-links">
            {SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sf-col">
          <p className="sf-heading">Company</p>
          <ul className="sf-links">
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sf-col">
          <p className="sf-heading">Service area</p>
          <p className="sf-areas">
            San Antonio, Boerne, New Braunfels, Bulverde, Spring Branch,
            Canyon Lake, La Vernia, Schertz, Cibolo and nearby Hill Country
            communities.
          </p>
        </div>
      </div>

      <div className="sf-bottom">
        <p>&copy; {year} Luxterra Builders. All rights reserved.</p>
        <p className="sf-legal">
          <Link href="/privacy-policy">Privacy policy</Link>
        </p>
      </div>
    </footer>
  );
}
