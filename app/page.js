"use client";

import "./home.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero-bg">
        <div className="hero-overlay">
          <Image
            src="/logo.png"
            width={330}
            height={320}
            alt="Luxterra Builders Logo"
            className="hero-logo"
          />

          <h1 className="hero-title">Building Luxury. Delivering Excellence.</h1>

          <p className="hero-sub">
            Custom Homes • Industrial • Commercial • Pools
            <br />
            Serving San Antonio &amp; Surrounding Areas
          </p>

          <a href="/quote" className="cta-button">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured">
        <p className="section-label">Featured Projects</p>
        <h2 className="section-title">Recent Luxterra Builds</h2>
        <p className="section-sub">
          A glimpse at the type of craftsmanship and detail we bring to every
          custom home and commercial project.
        </p>

        <div className="featured-grid">
          {/* Project 1 */}
          <article className="project-card">
            <div className="project-image-wrap">
              <Image
                src="/01.jpg"
                alt="Kings Modern Residence exterior"
                width={1200}
                height={800}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <p className="project-meta">Custom Home</p>
              <h3 className="project-title">Kings Modern Residence</h3>
              <p className="project-copy">
                Modern lines, warm interiors, and a fully reimagined layout in
                the heart of San Antonio.
              </p>
              <a href="/gallery" className="project-link">
                View project photos
              </a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project-card">
            <div className="project-image-wrap">
              <Image
                src="/03.jpg"
                alt="Adaes Home renovation"
                width={1200}
                height={800}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <p className="project-meta">Whole‑Home Remodel</p>
              <h3 className="project-title">Adaes Home</h3>
              <p className="project-copy">
                Open‑concept living, upgraded kitchen, and refined finishes
                tailored to how this family really lives.
              </p>
              <a href="/projects" className="project-link">
                Explore more projects
              </a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project-card">
            <div className="project-image-wrap">
              <Image
                src="/08.jpg"
                alt="Industrial lab project"
                width={1200}
                height={800}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <p className="project-meta">Industrial</p>
              <h3 className="project-title">Industrial Lab Build‑Out</h3>
              <p className="project-copy">
                High‑performance lab and warehouse space built to strict
                operational and safety requirements.
              </p>
              <a href="/services" className="project-link">
                See industrial capabilities
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Custom Homes</h3>
            <p>Luxury designs built with precision and craftsmanship.</p>
          </div>

          <div className="service-card">
            <h3>Commercial</h3>
            <p>Retail, offices, and full‑scale commercial projects.</p>
          </div>

          <div className="service-card">
            <h3>Industrial</h3>
            <p>Warehouses, metal buildings &amp; large developments.</p>
          </div>
        </div>
      </section>

      {/* WHY BUILD WITH LUXTERRA */}
      <section className="why">
        <div className="why-copy">
          <p className="section-label">Why Build with Luxterra</p>
          <h2 className="section-title">A builder that thinks like an owner.</h2>
          <p className="why-intro">
            We treat every project like it&apos;s our own asset—balancing design,
            budget, and schedule so you don&apos;t have to babysit the build.
          </p>

          <ul className="why-list">
            <li>
              <span className="why-bullet" />
              Turn‑key process from planning and permits to final punch list.
            </li>
            <li>
              <span className="why-bullet" />
              Clear budgets, transparent change orders, and no surprise costs.
            </li>
            <li>
              <span className="why-bullet" />
              Dedicated project manager and weekly communication.
            </li>
            <li>
              <span className="why-bullet" />
              Licensed, insured, and vetted trade partners on every job.
            </li>
          </ul>

          <a href="/quote" className="cta-secondary">
            Schedule a Free Consultation
          </a>
        </div>

        <div className="why-highlights">
          <div className="why-card">
            <span className="why-label">Completed Builds</span>
            <span className="why-value">50+</span>
            <p>
              Custom homes, commercial spaces, and industrial projects delivered
              across San Antonio.
            </p>
          </div>

          <div className="why-card">
            <span className="why-label">Experience</span>
            <span className="why-value">15+ yrs</span>
            <p>
              Construction leadership with a track record of complex builds done
              right the first time.
            </p>
          </div>

          <div className="why-card">
            <span className="why-label">Client Focus</span>
            <span className="why-value">1:1</span>
            <p>
              You work directly with decision‑makers—no getting lost in a big
              corporate pipeline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
