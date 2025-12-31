"use client";

import "./home.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-kicker">SAN ANTONIO • DESIGN–BUILD CONTRACTOR</p>
            <h1>
              Building luxury spaces
              <br />
              with owner-level thinking.
            </h1>
            <p className="hero-sub">
              Custom homes, industrial, commercial, and multifamily projects
              delivered with clear budgets, tight schedules, and weekly
              communication.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
            <p className="hero-note">
              Licensed • Insured • Serving San Antonio & surrounding areas
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-logo-card">
              <img src="/logo.png" alt="Luxterra Builders logo" />
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">10+</span>
                <span className="hero-stat-label">Years in construction</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">TX</span>
                <span className="hero-stat-label">San Antonio & nearby cities</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">Turn-key</span>
                <span className="hero-stat-label">From planning to punch list</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section services" id="services">
        <div className="section-header">
          <p className="section-kicker">SERVICES</p>
          <h2>From dirt to done.</h2>
          <p className="section-sub">
            Luxterra Builders manages everything—from early planning and budgeting
            to final inspection and handoff.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Homes</h3>
            <p>
              High-end residential builds with modern design, efficient layouts, and
              a focus on long-term value.
            </p>
            <ul>
              <li>Ground-up custom homes</li>
              <li>Architect & engineer coordination</li>
              <li>Exterior & interior finish guidance</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Commercial & Industrial</h3>
            <p>
              Offices, warehouses, labs, and tenant build-outs built for function,
              safety, and future expansion.
            </p>
            <ul>
              <li>Industrial & flex space</li>
              <li>Retail & office interiors</li>
              <li>Code compliance & inspections</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Multifamily & ADUs</h3>
            <p>
              Investment-minded multifamily, ADUs, and additions that balance
              aesthetics, cost, and rental performance.
            </p>
            <ul>
              <li>Duplexes & small multifamily</li>
              <li>Accessory dwelling units (ADUs)</li>
              <li>Additions & structural changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY BUILD WITH LUXTERRA */}
      <section className="section why" id="why">
        <div className="section-header">
          <p className="section-kicker">WHY BUILD WITH LUXTERRA</p>
          <h2>A builder that thinks like an owner.</h2>
          <p className="section-sub">
            You shouldn&apos;t have to babysit your project. Luxterra runs your build
            like an asset—protecting your time, budget, and schedule.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3>Owner mindset</h3>
            <p>
              We treat every project like it&apos;s our own—balancing design, budget,
              and schedule so you don&apos;t have to stress every decision.
            </p>
          </div>
          <div className="why-card">
            <h3>Turn-key delivery</h3>
            <p>
              From planning and permits to final punch list, we coordinate the entire
              process with architects, engineers, and subs.
            </p>
          </div>
          <div className="why-card">
            <h3>Clear communication</h3>
            <p>
              Dedicated project management with weekly updates, photos, and simple
              change order approvals.
            </p>
          </div>
          <div className="why-card">
            <h3>Licensed & insured</h3>
            <p>
              Fully insured with vetted trade partners on every job—no cutting
              corners, no mystery crews on your site.
            </p>
          </div>
        </div>

        <ul className="why-list">
          <li>Turn-key process from planning and permits to final punch list.</li>
          <li>Clear budgets, transparent change orders, and no surprise costs.</li>
          <li>Dedicated project manager and weekly communication.</li>
          <li>Licensed, insured, and vetted trade partners on every job.</li>
        </ul>
      </section>

      {/* 🔥 FEATURED PROJECTS */}
      <section className="section featured" id="projects">
        <div className="section-header">
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h2>Recent builds by Luxterra.</h2>
          <p className="section-sub">
            A quick look at the type of work we deliver—from modern residences to
            high-function industrial spaces.
          </p>
        </div>

        <div className="featured-grid">
          {/* Kings Modern Residence */}
          <article className="project-card">
            <div className="project-image">
              <img src="/01.jpg" alt="Kings Modern Residence exterior" />
            </div>
            <div className="project-body">
              <h3>Kings Modern Residence</h3>
              <p>
                A modern San Antonio residence with clean lines, warm materials, and
                efficient use of a tight urban lot.
              </p>
              <ul className="project-tags">
                <li>Custom Home</li>
                <li>Urban Infill</li>
                <li>Modern Design</li>
              </ul>
              <Link href="/projects/kings-modern-residence" className="project-link">
                View project →
              </Link>
            </div>
          </article>

          {/* Adaes Home */}
          <article className="project-card">
            <div className="project-image">
              <img src="/03.jpg" alt="Adaes Home interior and exterior" />
            </div>
            <div className="project-body">
              <h3>Adaes Home</h3>
              <p>
                A family-focused residence with open living, natural light, and
                durable finishes built for everyday life.
              </p>
              <ul className="project-tags">
                <li>Custom Home</li>
                <li>Family Living</li>
                <li>High-Durability Finishes</li>
              </ul>
              <Link href="/projects/adaes-home" className="project-link">
                  View project →
              </Link>
            </div>
          </article>

          {/* Industrial Lab */}
          <article className="project-card">
            <div className="project-image">
              <img src="/05.jpg" alt="Industrial lab project by Luxterra Builders" />
            </div>
            <div className="project-body">
              <h3>Industrial Lab Facility</h3>
              <p>
                A specialized industrial lab with efficient circulation, service
                access, and infrastructure for future expansion.
              </p>
              <ul className="project-tags">
                <li>Industrial</li>
                <li>Lab / Flex Space</li>
                <li>Code-Driven Design</li>
              </ul>
              <Link href="/projects/industrial-lab" className="project-link">
                  View project →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section home-cta">
        <div className="home-cta-inner">
          <div>
            <h2>Ready to talk about your project?</h2>
            <p>
              Share your plans, budget, or even just a rough idea. We&apos;ll help
              you understand what&apos;s possible and what it will take to build it.
            </p>
          </div>
          <div className="home-cta-actions">
            <Link href="/quote" className="btn-primary">
              Request a Free Consultation
            </Link>
            <a href="tel:12542902482" className="btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
