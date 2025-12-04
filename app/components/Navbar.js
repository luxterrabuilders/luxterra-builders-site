"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-main">Luxterra Builders</span>
          <span className="nav-logo-sub">San Antonio & Surrounding Areas</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote">Request a Quote</Link>
        </nav>

        <a href="tel:12542902482" className="nav-cta">
          Call (254) 290-2482
        </a>
      </div>
    </header>
  );
}
