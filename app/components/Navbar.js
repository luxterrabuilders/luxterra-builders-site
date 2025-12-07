"use client";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo-block">
          <img src="/logo.png" alt="Luxterra Builders" className="nav-logo" />
          <span className="nav-brand">LUXTERRA</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote" className="nav-cta">Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
}
