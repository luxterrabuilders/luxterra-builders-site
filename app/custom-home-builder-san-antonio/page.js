// app/custom-home-builder-san-antonio/page.js
import "./custom-home.css";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, serviceSchema } from "../lib/schema";

const FAQS = [
  {
    "q": "When should I contact a builder?",
    "a": "Early. A builder can help you understand budget, timeline, site constraints, and constructability before you spend too much money on plans."
  },
  {
    "q": "Can Luxterra help before I have plans?",
    "a": "Yes. We can help discuss the project, budget expectations, lot conditions, and the next steps needed before construction."
  },
  {
    "q": "Do you build outside San Antonio?",
    "a": "Yes. Luxterra serves San Antonio and surrounding areas including Boerne, New Braunfels, Bulverde, Helotes, and nearby communities."
  },
  {
    "q": "Do you only build luxury homes?",
    "a": "No. We focus on well-planned custom homes and residential projects where quality, communication, and long-term value matter."
  }
];


export const metadata = {
  alternates: { canonical: "/custom-home-builder-san-antonio" },
  title: "Custom Home Builder San Antonio",
  description:
    "Luxterra Builders designs and builds custom homes in San Antonio and nearby areas with clear budgets, realistic schedules, and owner-level communication.",
};

export default function CustomHomeBuilderSanAntonioPage() {
  return (
    <main className="custom-home-page">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Custom Home Builder", href: "/custom-home-builder-san-antonio" }]} />

      {/* HERO */}
      <section className="custom-home-hero">
        <div className="custom-home-hero-copy">
          <p className="custom-home-kicker">San Antonio Custom Home Builder</p>

          <h1>Build a custom home with a team that thinks like an owner.</h1>

          <p>
            Luxterra Builders helps homeowners and investors plan and build
            custom homes across San Antonio and surrounding areas with clear
            budgets, realistic schedules, and hands-on construction management.
          </p>

          <div className="custom-home-actions">
            <a href="/quote" className="custom-home-btn custom-home-btn-primary">
              Request a Free Consultation
            </a>
            <a href="tel:+12542902482" className="custom-home-btn custom-home-btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="custom-home-hero-image">
          <Image
            src="/kings-01.jpg"
            alt="Custom home exterior in San Antonio built by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="custom-home-section custom-home-two-column">
        <div>
          <p className="custom-home-section-label">Why Luxterra</p>
          <h2>A custom home should be planned like a long-term asset.</h2>
        </div>

        <div className="custom-home-copy">
          <p>
            A custom home is not just a construction project. It is a major
            investment that needs smart planning, clean coordination, and a
            builder who understands both design and long-term value.
          </p>
          <p>
            Luxterra Builders helps clients move from early ideas to a finished
            home by coordinating planning, budgeting, permits, trades,
            inspections, and final walkthrough.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="custom-home-section">
        <div className="custom-home-section-header">
          <p className="custom-home-section-label">What we handle</p>
          <h2>Ground-up custom homes and major residential projects.</h2>
          <p>
            We help turn the vision into a clear scope, budget, and construction
            plan before work begins.
          </p>
        </div>

        <div className="custom-home-card-grid">
          <article className="custom-home-card">
            <h3>Ground-Up Custom Homes</h3>
            <p>
              New custom homes built from planning and site preparation through
              final punch list and move-in.
            </p>
          </article>

          <article className="custom-home-card">
            <h3>Design-Build Coordination</h3>
            <p>
              Coordination with designers, architects, engineers, trades, and
              inspectors to keep the project moving.
            </p>
          </article>

          <article className="custom-home-card">
            <h3>Home Additions</h3>
            <p>
              Add bedrooms, living space, garages, guest suites, or flexible
              spaces while keeping the home cohesive.
            </p>
          </article>

          <article className="custom-home-card">
            <h3>ADUs & Guest Suites</h3>
            <p>
              Build secondary living spaces, mother-in-law suites, and guest
              homes that add flexibility and long-term value.
            </p>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="custom-home-section custom-home-process-section">
        <div className="custom-home-section-header">
          <p className="custom-home-section-label">Our process</p>
          <h2>Clear communication from first conversation to final walkthrough.</h2>
        </div>

        <div className="custom-home-process-grid">
          <div className="custom-home-process-step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>
              We review your goals, lot, timeline, budget range, inspiration,
              and what kind of home you want to build.
            </p>
          </div>

          <div className="custom-home-process-step">
            <span>02</span>
            <h3>Planning</h3>
            <p>
              We help coordinate scope, layout, structural needs, finish goals,
              pricing, and permit requirements.
            </p>
          </div>

          <div className="custom-home-process-step">
            <span>03</span>
            <h3>Construction</h3>
            <p>
              Luxterra manages scheduling, trades, inspections, communication,
              and quality control throughout the build.
            </p>
          </div>

          <div className="custom-home-process-step">
            <span>04</span>
            <h3>Walkthrough</h3>
            <p>
              We complete punch list items, verify details, clean up the site,
              and hand over a finished home.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT PROOF */}
      <section className="custom-home-section custom-home-featured-project">
        <div className="custom-home-featured-copy">
          <p className="custom-home-section-label">Project proof</p>
          <h2>Kings Modern Residence</h2>
          <p>
            Kings Modern Residence is a custom home project in San Antonio with
            modern finishes, flexible living areas, an ADU / mother-in-law
            suite, and outdoor living space.
          </p>
          <a href="/projects/kings-modern-residence" className="custom-home-text-link">
            View Kings Modern Residence →
          </a>
        </div>

        <div className="custom-home-featured-images">
          <Image
            src="/kings-01.jpg"
            alt="Kings Modern Residence exterior by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <Image
            src="/kings-15.jpg"
            alt="Kings Modern Residence interior by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="custom-home-section">
        <div className="custom-home-section-header">
          <p className="custom-home-section-label">FAQ</p>
          <h2>Common custom home questions.</h2>
        </div>

        <div className="custom-home-faq-list">
          {FAQS.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="custom-home-final-cta">
        <div>
          <h2>Planning a custom home in San Antonio?</h2>
          <p>
            Tell us about your lot, vision, budget range, and timeline. We’ll
            help you understand what is realistic and what the next step should
            be.
          </p>
        </div>

        <div className="custom-home-actions">
          <a href="/quote" className="custom-home-btn custom-home-btn-primary">
            Request a Free Consultation
          </a>
          <a href="tel:+12542902482" className="custom-home-btn custom-home-btn-secondary">
            Call (254) 290-2482
          </a>
        </div>
      </section>

      <JsonLd data={faqPageSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: "Custom Home Construction",
          description: "Luxterra Builders designs and builds custom homes in San Antonio and nearby areas with clear budgets, realistic schedules, and owner-level communication.",
          path: "/custom-home-builder-san-antonio",
        })}
      />
    </main>
  );
}
