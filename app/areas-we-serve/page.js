// app/areas-we-serve/page.js
import "./areas.css";
import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/areas-we-serve" },
  title: "Areas We Serve | San Antonio & Texas Hill Country",
  description:
    "Luxterra Builders serves San Antonio, the Texas Hill Country, Boerne, New Braunfels, Bulverde, Spring Branch, Canyon Lake, La Vernia, Helotes, and nearby areas.",
};

const AREAS = [
  "San Antonio",
  "Boerne",
  "New Braunfels",
  "Bulverde",
  "Helotes",
  "Alamo Heights",
  "Stone Oak",
  "Shavano Park",
  "Fair Oaks Ranch",
  "Spring Branch",
  "Canyon Lake",
  "La Vernia",
  "Schertz",
  "Cibolo",
  "Seguin",
  "Castroville",
  "Floresville",
  "Texas Hill Country",
];

const SERVICES = [
  {
    title: "Custom Homes",
    text: "Ground-up custom homes, additions, and design-build coordination for homeowners who want clear planning and quality execution.",
    link: "/custom-home-builder-san-antonio",
  },
  {
    title: "ADUs & Guest Suites",
    text: "Accessory dwelling units, mother-in-law suites, garage conversions, and backyard guest houses built for flexibility and long-term value.",
    link: "/adu-builder-san-antonio",
  },
  {
    title: "Commercial Build-Outs",
    text: "Tenant improvements, office build-outs, retail spaces, and commercial interiors built for daily business use.",
    link: "/commercial-contractor-san-antonio",
  },
  {
    title: "Industrial Build-Outs",
    text: "Industrial spaces, lab spaces, warehouse improvements, and flex-space build-outs designed for function, durability, and growth.",
    link: "/industrial-build-outs-san-antonio",
  },
  {
    title: "Multifamily Projects",
    text: "Duplexes, small multifamily projects, ADUs, additions, and investor-focused residential construction.",
    link: "/multifamily-contractor-san-antonio",
  },
];

export default function AreasWeServePage() {
  return (
    <main className="areas-page">
      <section className="areas-hero">
        <div className="areas-hero-copy">
          <p className="areas-kicker">Areas We Serve</p>

          <h1>Serving San Antonio, the Hill Country, and surrounding communities.</h1>

          <p>
            Luxterra Builders helps homeowners, investors, and business owners
            plan and build custom homes, ADUs, multifamily projects, commercial
            spaces, and industrial build-outs across San Antonio and nearby
            Texas communities.
          </p>

          <div className="areas-actions">
            <a href="/quote" className="areas-btn areas-btn-primary">
              Request a Free Consultation
            </a>
            <a href="tel:12542902482" className="areas-btn areas-btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="areas-hero-image">
          <Image
            src="/kings-01.jpg"
            alt="Custom home project by Luxterra Builders serving San Antonio and the Texas Hill Country"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section className="areas-section areas-two-column">
        <div>
          <p className="areas-section-label">Local construction support</p>
          <h2>Built for homeowners, investors, and business owners across Central Texas.</h2>
        </div>

        <div className="areas-copy">
          <p>
            Every city and property is different. Lot conditions, permitting,
            utilities, access, neighborhood expectations, and project type can
            all affect the construction plan.
          </p>
          <p>
            Luxterra Builders helps clients think through the project early so
            the scope, budget, schedule, and build path are clearer before work
            begins.
          </p>
        </div>
      </section>

      <section className="areas-section">
        <div className="areas-section-header">
          <p className="areas-section-label">Service areas</p>
          <h2>Where we work.</h2>
          <p>
            We serve San Antonio and surrounding areas. If your project is
            nearby and fits our scope, reach out and we can review it.
          </p>
        </div>

        <div className="areas-grid">
          {AREAS.map((area) => (
            <div key={area} className="areas-pill">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="areas-section">
        <div className="areas-section-header">
          <p className="areas-section-label">What we build</p>
          <h2>Construction services across San Antonio and nearby communities.</h2>
        </div>

        <div className="areas-services-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="areas-service-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={service.link}>Learn more →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="areas-section areas-featured">
        <div className="areas-featured-copy">
          <p className="areas-section-label">Project types</p>
          <h2>From custom homes to commercial spaces.</h2>
          <p>
            Luxterra Builders works on residential, investment, commercial, and
            industrial projects. Our goal is to bring clear communication,
            practical planning, and organized construction management to every
            build.
          </p>
        </div>

        <div className="areas-featured-images">
          <Image
            src="/kings-15.jpg"
            alt="Custom home interior by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <Image
            src="/industrial-01.jpg"
            alt="Industrial build-out by Luxterra Builders"
            width={2000}
            height={1500}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="areas-section">
        <div className="areas-section-header">
          <p className="areas-section-label">FAQ</p>
          <h2>Common service area questions.</h2>
        </div>

        <div className="areas-faq-list">
          <article>
            <h3>Do you only work in San Antonio?</h3>
            <p>
              No. Luxterra Builders serves San Antonio and surrounding
              communities including Boerne, New Braunfels, Bulverde, Helotes,
              Spring Branch, Canyon Lake, La Vernia, and other nearby areas.
            </p>
          </article>

          <article>
            <h3>Do you work in the Texas Hill Country?</h3>
            <p>
              Yes. We review Hill Country projects based on location, scope,
              timeline, and fit. Reach out with your property address and project
              details so we can take a look.
            </p>
          </article>

          <article>
            <h3>Can you help before I buy land or sign a lease?</h3>
            <p>
              Yes. Getting builder input early can help you understand site
              challenges, rough construction costs, utilities, permitting, and
              whether the project is realistic.
            </p>
          </article>

          <article>
            <h3>What types of projects do you take on?</h3>
            <p>
              We focus on custom homes, ADUs, multifamily and investment-focused
              residential projects, commercial build-outs, and industrial or
              flex-space build-outs.
            </p>
          </article>
        </div>
      </section>

      <section className="areas-final-cta">
        <div>
          <h2>Planning a project near San Antonio or the Hill Country?</h2>
          <p>
            Send us the property address, project type, rough budget, and
            timeline. We’ll help you understand what is realistic and what the
            next step should be.
          </p>
        </div>

        <div className="areas-actions">
          <a href="/quote" className="areas-btn areas-btn-primary">
            Request a Free Consultation
          </a>
          <a href="tel:12542902482" className="areas-btn areas-btn-secondary">
            Call (254) 290-2482
          </a>
        </div>
      </section>
    </main>
  );
}
