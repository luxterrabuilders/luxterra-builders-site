// app/services/page.js
import "./services.css";

const SERVICES = [
  {
    id: "custom-homes",
    label: "Custom Homes",
    image: "/custom-home-services-01.jpg",
    alt: "Custom home exterior by Luxterra Builders",
    intro:
      "High-end residential builds with modern design, efficient layouts, and long-term value.",
    bullets: [
      "Ground-up custom homes",
      "Architect & engineer coordination",
      "Exterior & interior finish guidance",
    ],
  },
  {
    id: "commercial-industrial",
    label: "Commercial & Industrial",
    image: "/industrial-services-01.png",
    alt: "Industrial or commercial interior built by Luxterra Builders",
    intro:
      "Offices, warehouses, labs, and tenant build-outs focused on function, safety, and future expansion.",
    bullets: [
      "Industrial & flex space",
      "Retail & office interiors",
      "Code compliance & inspections",
    ],
  },
  {
    id: "multifamily-adus",
    label: "Multifamily & ADUs",
    image: "/multifamily-services-01.png",
    alt: "Multifamily / ADU project by Luxterra Builders",
    intro:
      "Investment-minded builds that balance aesthetics, cost, and rental performance.",
    bullets: [
      "Duplexes & small multifamily",
      "Accessory dwelling units (ADUs)",
      "Additions & structural changes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="services-inner">
        {/* PAGE HEADER */}
        <header className="services-header">
          <p className="lp-section-label">Services</p>
          <h1 className="lp-section-title">From dirt to done.</h1>
          <p className="lp-section-sub">
            Luxterra manages the entire build—planning, budgeting, scheduling,
            and final inspection—so you can focus on your business and life.
          </p>
        </header>

        {/* SERVICES GRID */}
        <section className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="services-card">
              <div className="services-card-image-wrap">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="services-card-image"
                />
              </div>

              <div className="services-card-body">
                <h2 className="services-card-title">{service.label}</h2>
                <p className="services-card-intro">{service.intro}</p>
                <ul className="services-card-list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

