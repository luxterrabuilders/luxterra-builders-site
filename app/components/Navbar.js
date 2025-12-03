export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="nav-logo">LB</div>
        <div>
          <div className="nav-title">Luxterra Builders</div>
          <div className="nav-subtitle">
            Homes • Industrial • Commercial • Multifamily
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <a href="#where-we-build">Where We Build</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <a href="#contact" className="nav-cta">
          Get Started
        </a>
      </div>
    </div>
  );
}
