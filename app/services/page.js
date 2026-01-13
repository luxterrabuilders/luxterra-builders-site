// app/services/page.js
import "./services.css";

const SERVICES = [
  {
    id: "custom-homes",
    label: "Custom Homes",
    kicker: "Custom Homes",
    title: "Custom Homes",
    blurb:
      "High-end residential builds with modern design, efficient layouts, and long-term value.",
    bullets: [
      "Ground-up custom homes",
      "Architect & engineer coordination",
      "Exterior & interior finish guidance",
    ],
    image: "/custom-homes-services-01.jpg", // ✅ PNG
    imageAlt: "Custom home exterior by Luxterra Builders",
  },
  {
    id: "industrial",
    label: "Commercial & Industrial",
    kicker: "Commercial & Industrial",
    title: "Commercial & Industrial",
    blurb:
      "Offices, warehouses, labs, and tenant spaces built for function, safety, and future expansion.",
    bullets: [
      "Industrial & flex space",
      "Retail & office interiors",
      "Code compliance & inspections",
    ],
    image: "/industrial-services-01.png", // ✅ PNG
    imageAlt: "Industrial or commercial project by Luxterra Builders",
  },
  {
    id: "multifamily",
    label: "Multifamily & ADUs",
    kicker: "Multifamily project or ADU by Luxterra Builders",
    title: "Multifamily & ADUs",
    blurb:
      "Investment-focused builds that balance aesthetics, cost, and rental performance.",
    bullets: [
      "Duplexes & small multifamily",
      "Accessory dwelling units (ADUs)",
      "Additions & structural changes",
    ],
    image: "/multifamily-services-01.png", // ✅ PNG
    imageAlt: "Multifamily building by Luxterra Builders",
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

