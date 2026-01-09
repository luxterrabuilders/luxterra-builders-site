// app/components/Navbar.js
"use client";

import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo + name */}
        <a href="/" className="nav-logo">
          <Image
            src="/luxterra-logo.png"
            alt="Luxterra Builders logo"
            width={40}
            height={40}
            className="nav-logo-image"
          />
          <span className="nav-logo-text">Luxterra Builders</span>
        </a>

        {/* Main nav links */}
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/gallery" className="nav-link">
            Gallery
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <a href="/quote" className="nav-link nav-link-cta">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
