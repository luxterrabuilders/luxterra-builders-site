// app/services/page.js
import "./services.css";

export const metadata = {
  title: "Services – Custom Homes, Commercial & Multifamily",
  description:
    "Custom homes, commercial and industrial build-outs, and multifamily projects coordinated from planning and permits through final inspection.",
};

const SERVICES = [
  {
    id: "custom-homes",
    label: "Custom Homes",
    image: "/custom-home-services-01.jpg",
    imageAlt: "Custom home exterior built by Luxterra Builders",
    intro:
      "From lot selection to final walkthrough, we build modern, efficient homes that feel great to live in and make sense as long-term investments.",
    bullets: [
      "Ground-up custom homes and additions",
      "ADUs and mother-in-law suites",
      "Architect & structural engineer coordination",
      "Exterior & interior finish guidance"
    ]
  },
  {
    id: "commercial-industrial",
    label: "Commercial & Industrial",
    image: "/industrial-services-01.png",
    imageAlt: "Industrial or lab space built by Luxterra Builders",
    intro:
      "Offices, warehouses, labs, and tenant build-outs focused on function, safety, and future expansion.",
    bullets: [
      "Industrial & flex space build-outs",
      "Retail & office interior build-outs",
      "Lab and specialized use spaces",
      "Code compliance, inspections, and city coordination"
    ]
  },
  {
    id: "multifamily-adus",
    label: "Multifamily & ADUs",
    image: "/multifamily-services-01.png",
    imageAlt: "Multifamily project or ADU by Luxterra Builders",
    intro:
      "Investment-focused projects that balance aesthetics, construction cost, and long-term rental performance.",
    bullets: [
      "Duplexes & small multifamily buildings",
      "ADUs and mother-in-law suites",
      "Additions & structural changes",
      "Layout changes and structural upgrades"
    ]
  }
  
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="services-inner">
        <header className="services-header">
          <p className="lp-section-label">Services</p>
          <h1 className="lp-section-title">
            Custom homes, commercial spaces, and multifamily projects built like
            long-term assets.
          </h1>
          <p className="lp-section-sub">
            Luxterra Builders handles design coordination, budgeting, permits,
            and construction so you don&apos;t have to chase trades or manage
            the schedule. We build as if we were keeping the property ourselves.
          </p>
        </header>

        {/* Three service cards */}
        <section className="services-grid">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="service-card"
            >
              <div className="service-card-media">
                <img src={service.image} alt={service.imageAlt} />
              </div>

              <div className="service-card-body">
                <h2 className="service-card-title">{service.label}</h2>
                <p className="service-card-intro">{service.intro}</p>
                <ul className="service-card-list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Simple CTA at bottom */}
        <section className="services-cta">
          <div className="services-cta-inner">
            <h2>Planning a new build or major renovation?</h2>
            <p>
              Whether it&apos;s a custom home, tenant build-out, or multifamily
              project, we can help you scope the work, set a budget, and build
              a schedule that matches your goals.
            </p>
            <div className="services-cta-actions">
              <a href="/quote" className="lp-btn-primary">
                Request a Free Consultation
              </a>
              <a href="tel:12542902482" className="lp-btn-secondary">
                Call (254) 290-2482
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
