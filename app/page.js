// app/page.js
"use client";

import "./home.css";

export default function HomePage() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          {/* LEFT – TEXT */}
          <div className="hero-text">
            <p className="hero-kicker">San Antonio • Design–Build Contractor</p>

            <h1 className="hero-title">
              Building luxury spaces with owner-level thinking.
            </h1>

            <p className="hero-sub">
              Custom homes, industrial, commercial, and multifamily projects
              delivered with clear budgets, tight schedules, and weekly
              communication.
            </p>

            <div className="hero-ctas">
              <a href="/quote" className="hero-cta hero-cta-primary">
                Get a Free Quote
              </a>
              <a href="/gallery" className="hero-cta hero-cta-secondary">
                View Gallery
              </a>
            </div>

            <div className="hero-metrics">
              <div className="hero-metric">
                <span className="hero-metric-label">Experience</span>
                <span className="hero-metric-value">15+ years</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-label">Service area</span>
                <span className="hero-metric-value">
                  San Antonio &amp; nearby cities
                </span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-label">Approach</span>
                <span className="hero-metric-value">Turn-key delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT – LOGO CARD */}
          <div className="hero-visual">
            <div className="hero-logo-card">
              <img
                src="/luxterra-logo.png"
                alt="Luxterra Builders logo"
                className="hero-logo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="lp-services-preview" id="services">
        <p className="lp-section-label">Services</p>
        <h2 className="lp-section-title">From dirt to done.</h2>
        <p className="lp-section-sub">
          Luxterra manages the entire build—planning, budgeting, scheduling, and
          final inspection—so you can focus on your business and life.
        </p>

        <div className="lp-service-grid">
          <article className="lp-service-card">
            <h3>Custom Homes</h3>
            <p>
              High-end residential builds with modern design, efficient layouts,
              and long-term value.
            </p>
            <ul>
              <li>Ground-up custom homes</li>
              <li>Architect &amp; engineer coordination</li>
              <li>Exterior &amp; interior finish guidance</li>
            </ul>
          </article>

          <article className="lp-service-card">
            <h3>Commercial &amp; Industrial</h3>
            <p>
              Offices, warehouses, labs, and tenant build-outs focused on
              function, safety, and future expansion.
            </p>
            <ul>
              <li>Industrial &amp; flex space</li>
              <li>Retail &amp; office interiors</li>
              <li>Code compliance &amp; inspections</li>
            </ul>
          </article>

          <article className="lp-service-card">
            <h3>Multifamily &amp; ADUs</h3>
            <p>
              Investment-minded builds that balance aesthetics, cost, and rental
              performance.
            </p>
            <ul>
              <li>Duplexes &amp; small multifamily</li>
              <li>Accessory dwelling units (ADUs)</li>
              <li>Additions &amp; structural changes</li>
            </ul>
          </article>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="lp-featured" id="projects">
        <p className="lp-section-label">Featured Projects</p>
        <h2 className="lp-section-title">Recent Luxterra builds.</h2>
        <p className="lp-section-sub">
          A quick look at the kind of detail and craftsmanship we bring to
          every project.
        </p>

        <div className="lp-project-grid">
          {/* Project 1 */}
          <article className="lp-project-card">
  <div className="lp-project-image-wrap">
    <img src="/kings-01.jpg" alt="Kings Modern Residence exterior" />
  </div>
  <div className="lp-project-body">
    <p className="lp-project-tag">Custom Home + ADU</p>
    <h3>Kings Modern Residence</h3>
    <p className="lp-project-text">
      Modern custom home in San Antonio with a dedicated ADU / mother-in-law
      suite and a Pool with SPA designed for multigenerational living and long-term flexibility.
    </p>
    <p className="lp-project-meta">
      Custom home + ADU • Full rebuild
    </p>
    <a
      href="/projects/kings-modern-residence"
      className="lp-project-link"
    >
      View project →
    </a>
  </div>
</article>

{/* Project 2 – Burnet Luxury Home */}
<article className="lp-project-card">
  <div className="lp-project-image-wrap">
    <img src="/burnet-01.jpg" alt="Burnet luxury custom home with rooftop deck" />
  </div>
  <div className="lp-project-body">
    <p className="lp-project-tag">Custom Home</p>
    <h3>Burnet Rooftop Residence</h3>
    <p className="lp-project-text">
      Design-driven custom home with a rooftop deck, indoor–outdoor living,
      and modern elevations tailored for the site.
    </p>
    <p className="lp-project-meta">
      New construction • Rooftop deck • Burnet, Texas
    </p>
    <a href="/projects/burnet-home" className="lp-project-link">
      View project →
    </a>
  </div>
</article>

        

          {/* Project 3 */}
          <article className="lp-project-card">
            <div className="lp-project-image-wrap">
              <img src="/03.jpg" alt="Advanced industrial lab" />
            </div>
            <div className="lp-project-body">
              <p className="lp-project-tag">Industrial</p>
              <h3>Advanced Industrial Lab</h3>
              <p className="lp-project-text">
                High-performance industrial space with durable finishes and
                efficient circulation.
              </p>
              <p className="lp-project-meta">
                Lab &amp; flex space • Tenant build-out
              </p>
              <a href="/projects/industrial-lab" className="lp-project-link">
                View project →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* WHY BUILD WITH LUXTERRA */}
      <section className="lp-why">
        <div className="lp-why-copy">
          <p className="lp-section-label">Why build with Luxterra</p>
          <h2 className="lp-section-title">A builder that thinks like an owner.</h2>
          <p className="lp-why-intro">
            We treat every project like it&apos;s our own asset—balancing design,
            budget, and schedule so you don&apos;t have to babysit the build.
          </p>
          <ul className="lp-why-list">
            <li>Turn-key process from planning and permits to final punch list.</li>
            <li>Clear budgets, transparent change orders, and no surprise costs.</li>
            <li>Dedicated project manager and weekly communication.</li>
            <li>Licensed, insured, and vetted trade partners on every job.</li>
          </ul>
        </div>

        <div className="lp-why-stats">
          <div className="lp-why-card">
            <span className="lp-why-label">Completed builds</span>
            <span className="lp-why-value">12+</span>
            <p>
              Custom homes, commercial spaces, pools, and industrial projects
              across San Antonio.
            </p>
          </div>
          <div className="lp-why-card">
            <span className="lp-why-label">Experience</span>
            <span className="lp-why-value">15+ yrs</span>
            <p>
              Construction leadership with a proven record of getting it right
              the first time.
            </p>
          </div>
          <div className="lp-why-card">
            <span className="lp-why-label">Client focus</span>
            <span className="lp-why-value">1:1</span>
            <p>
              You work directly with decision-makers—no getting lost in a big
              corporate pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lp-final-cta">
        <div className="lp-final-inner">
          <div className="lp-final-copy">
            <h2>Ready to talk about your project?</h2>
            <p>
              Share your plans, budget, or even just a rough idea. We&apos;ll help
              you understand what&apos;s possible and what it will take to build it.
            </p>
          </div>
          <div className="lp-final-actions">
            <a href="/quote" className="lp-btn lp-btn-primary">
              Request a Free Consultation
            </a>
            <a href="tel:12542902482" className="lp-phone">
              Call (254) 290-2482
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
