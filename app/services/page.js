// app/services/page.js
"use client";

import "../home.css";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="lp-services-preview services-layout">
        <p className="lp-section-label">Services</p>
        <h1 className="lp-section-title">From dirt to done.</h1>
        <p className="lp-section-sub">
          Luxterra Builders manages the entire build—from early planning and
          budgeting to final inspection and handoff, so you can focus on your
          business and life.
        </p>

        <div className="lp-service-grid">
          {/* Custom Homes */}
          <article className="lp-service-card">
            <h2>Custom Homes</h2>
            <p>
              High-end residential builds with modern design, efficient layouts,
              and a focus on long-term value.
            </p>
            <ul>
              <li>Ground-up custom homes</li>
              <li>Architect &amp; engineer coordination</li>
              <li>Exterior &amp; interior finish guidance</li>
            </ul>
          </article>

          {/* Commercial & Industrial */}
          <article className="lp-service-card">
            <h2>Commercial &amp; Industrial</h2>
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

          {/* Multifamily & ADUs */}
          <article className="lp-service-card">
            <h2>Multifamily &amp; ADUs</h2>
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

        <div className="services-note">
          <p>
            Need something more specialized? We also take on select pools,
            sitework, and light civil scopes tied to larger projects.
          </p>
        </div>
      </section>
    </main>
  );
}

