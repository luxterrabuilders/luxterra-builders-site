import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              Welcome to <span>Luxterra Builders</span>
            </h1>
            <p>
              We build high-quality homes, industrial, commercial, and
              multifamily projects across San Antonio and surrounding areas.
            </p>

            <div className="hero-buttons">
              <a className="btn-primary" href="#contact">
                Schedule Consultation
              </a>
              <a className="btn-secondary" href="#services">
                View Services
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <p>Experience</p>
                <strong>20+ Years</strong>
              </div>
              <div className="stat">
                <p>Service Area</p>
                <strong>San Antonio & Nearby Cities</strong>
              </div>
              <div className="stat">
                <p>Sectors</p>
                <strong>Homes · Industrial · Commercial · MF</strong>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div
              style={{
                background: "#d9d9d9",
                width: "100%",
                height: "260px",
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* WHERE WE BUILD */}
      <section id="where-we-build" className="section">
        <div className="section-inner">
          <h2>Where We Build</h2>
          <p className="subtitle">
            Strategic locations across San Antonio and surrounding areas that
            make sense for your home or business.
          </p>

          <div className="cards">
            <div className="card">
              <h3>San Antonio Metro</h3>
              <p>
                Single-family homes, commercial spaces, and light industrial
                projects throughout the metro area.
              </p>
            </div>

            <div className="card">
              <h3>Surrounding Communities</h3>
              <p>
                Growing neighborhoods and business corridors in the cities and
                towns around San Antonio.
              </p>
            </div>

            <div className="card">
              <h3>Your Property</h3>
              <p>
                Already have land or an existing building? We evaluate
                feasibility and create a clear construction plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-inner">
          <h2>Our Services</h2>
          <p className="subtitle">
            One builder for homes, industrial, commercial, and multifamily
            projects in and around San Antonio.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Homes</h3>
              <p>
                Custom and semi-custom residential construction built around how
                you live, work, and host.
              </p>
            </div>

            <div className="card">
              <h3>Industrial</h3>
              <p>
                Warehouses, logistics, and light manufacturing facilities
                focused on efficiency and access.
              </p>
            </div>

            <div className="card">
              <h3>Commercial</h3>
              <p>
                Retail, office, and mixed-use spaces designed for visibility,
                comfort, and tenant experience.
              </p>
            </div>

            <div className="card">
              <h3>Multifamily</h3>
              <p>
                Townhomes and multifamily communities balancing density,
                amenities, and long-term maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TYPES / EXAMPLES */}
      <section id="projects" className="section">
        <div className="section-inner">
          <h2>Example Project Types</h2>
          <p className="subtitle">
            Swap these examples with your real projects, addresses, and photos
            as your portfolio grows.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Hill Country Residence</h3>
              <p>
                Single-family home with open-concept living, outdoor patio, and
                energy-efficient systems.
              </p>
            </div>
            <div className="card">
              <h3>Westside Warehouse</h3>
              <p>
                Industrial shell building with dock-high loading and flexible
                interior layout.
              </p>
            </div>
            <div className="card">
              <h3>Medical Office Build-Out</h3>
              <p>
                Interior build-out tailored to patient flow, privacy, and
                specialty equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="section-inner">
          <h2>What Our Clients Say</h2>
          <p className="subtitle">
            Clear communication, realistic schedules, and a focus on doing the
            job right the first time.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial">
              “Luxterra Builders kept us informed at every step. The finished
              project matched exactly what was promised.”
              <div className="testimonial-name">— Homeowner, San Antonio</div>
            </div>
            <div className="testimonial">
              “Professional team, responsive, and focused on the details that
              matter in our commercial build-out.”
              <div className="testimonial-name">— Business Owner</div>
            </div>
            <div className="testimonial">
              “They helped us understand costs, schedule, and options from day
              one. We would build with them again.”
              <div className="testimonial-name">— Multifamily Developer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Let&apos;s Talk About Your Project</h2>
            <p>
              Tell us about your timeline, budget, and whether you already have
              land or an existing building.
            </p>
            <p>Phone: 254-290-2482</p>
            <p>Email: info@luxterrabuilders.com</p>
            <p>Based in San Antonio, serving surrounding areas.</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Luxterra Builders — All Rights Reserved
      </footer>
    </>
  );
}
