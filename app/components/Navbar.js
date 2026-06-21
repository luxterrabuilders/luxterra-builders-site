

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Brand / Logo */}
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

        {/* Nav links */}
        <nav className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <a href="/areas-we-serve">Areas We Serve</a>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/quote" className="nav-link nav-link-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

