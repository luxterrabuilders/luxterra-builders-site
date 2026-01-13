// app/services/page.js
import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "Services | Luxterra Builders",
  description:
    "Custom homes, commercial & industrial, and multifamily construction services by Luxterra Builders.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="services-inner">
        {/* HEADER */}
        <header className="services-header">
          <p className="services-kicker">Services</p>
          <h1 className="services-title">From dirt to done.</h1>
          <p className="services-lede">
            Luxterra manages the entire build—from early planning and budgeting
            to final inspection and handoff—so you can focus on your business
            and life.
          </p>
        </header>

        {/* GRID */}
        <section className="services-grid">
          {/* Custom Homes */}
          <article className="service-card">
            <h2 className="service-title">Custom Homes</h2>
            <p className="service-blurb">
              High-end residential builds with modern design, efficient layouts,
              and a focus on long-term value.
            </p>
            <ul className="service-list">
              <li>Ground-up custom homes</li>
              <li>Architect &amp; engineer coordination</li>
              <li>Exterior &amp; interior finish guidance</li>
            </ul>
          </article>

          {/* Commercial & Industrial */}
          <article className="service-card">
            <h2 className="service-title">Commercial &amp; Industrial</h2>
            <p className="service-blurb">
              Offices, warehouses, labs, and tenant build-outs focused on
              function, safety, and future expansion.
            </p>
            <ul className="service-list">
              <li>Industrial &amp; flex space</li>
              <li>Retail &amp; office interiors</li>
              <li>Code compliance &amp; inspections</li>
            </ul>
          </article>

          {/* Multifamily & ADUs */}
          <article className="service-card">
            <h2 className="service-title">Multifamily &amp; ADUs</h2>
            <p className="service-blurb">
              Investment-minded builds that balance aesthetics, cost, and rental
              performance.
            </p>
            <ul className="service-list">
              <li>Duplexes &amp; small multifamily</li>
              <li>Accessory dwelling units (ADUs)</li>
              <li>Additions &amp; structural changes</li>
            </ul>
          </article>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <div className="services-cta-inner">
            <div className="services-cta-copy">
              <h2>Need help scoping your project?</h2>
              <p>
                Share your plans, budget, or even just a rough idea. We&apos;ll help
                you understand what&apos;s possible and what it will take to build it.
              </p>
            </div>
            <div className="services-cta-actions">
              <Link href="/quote" className="services-cta-btn">
                Request a Free Consultation
              </Link>
              <a href="tel:12542902482" className="services-cta-phone">
                Call (254) 290-2482
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

