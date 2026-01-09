export const metadata = {
  title: "Services | Luxterra Builders",
  description:
    "Custom Homes, commercial, Industrial, Pools and multifamily construction services in San Antonio by Luxterra Builders.",
};

export default function ServicesPage() {
  return (
    <main className="page services-page">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Our Construction Services</h1>
        <p>
          High-quality residential, commercial, and multifamily construction
          services backed by craftsmanship, integrity, and over a decade of experience.
        </p>
      </section>

      {/* SERVICE GRID */}
      <section className="service-grid">
        <div className="service-card">
          <div className="service-icon">🏡</div>
          <h2>Residential Construction</h2>
          <p>
            Luxury custom homes, whole-home remodels, additions, and modern home
            designs built with attention to detail and long-lasting quality.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🏢</div>
          <h2>Commercial & Industrial</h2>
          <p>
            Warehouses, tenant finish-outs, office buildouts, retail spaces, and
            industrial facilities built for efficiency and durability.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🏘️</div>
          <h2>Multifamily & Investment Projects</h2>
          <p>
            Duplexes, fourplexes, townhome communities, and investor-focused projects
            optimized for long-term returns and fast absorption.
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Luxterra Builders serves San Antonio and surrounding areas with dependable,
          high-quality construction services.
        </p>
        <a href="/quote" className="cta-button">
          Request a Quote
        </a>
      </section>
    </main>
  );
}
