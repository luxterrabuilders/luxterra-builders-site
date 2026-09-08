// app/adu-builder-san-antonio/page.js
import "./adu.css";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, serviceSchema } from "../lib/schema";

const FAQS = [
  {
    "q": "Can I build an ADU on my property in San Antonio?",
    "a": "It depends on your lot, zoning, setbacks, utilities, parking, and the scope of the unit. We can help review the site and determine what is realistic before you spend money on full plans."
  },
  {
    "q": "Can an ADU be used as a rental?",
    "a": "Many owners build ADUs for rental income, family use, or future flexibility. The right strategy depends on local rules, property layout, and your long-term plan."
  },
  {
    "q": "Is a garage conversion cheaper than a detached ADU?",
    "a": "Sometimes, but not always. Existing structure helps, but utilities, insulation, foundation, ceiling height, parking, and code upgrades can affect cost."
  },
  {
    "q": "How early should I talk to a builder?",
    "a": "Early. A builder can help you avoid designing something that is too expensive, difficult to permit, or hard to build on your lot."
  }
];


export const metadata = {
  alternates: { canonical: "/adu-builder-san-antonio" },
  title: "ADU Builder San Antonio | Mother-in-Law Suites",
  description:
    "Luxterra Builders designs and builds ADUs, mother-in-law suites, garage conversions, and backyard guest houses in San Antonio and nearby areas.",
};

export default function ADUBuilderSanAntonioPage() {
  return (
    <main className="adu-page">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "ADU Builder", href: "/adu-builder-san-antonio" }]} />

      {/* HERO */}
      <section className="adu-hero">
        <div className="adu-hero-copy">
          <p className="adu-kicker">San Antonio ADU Builder</p>

          <h1>
            Build an ADU or mother-in-law suite with owner-level thinking.
          </h1>

          <p>
            Luxterra Builders helps homeowners and investors plan and build ADUs,
            backyard guest houses, garage conversions, and mother-in-law suites
            across San Antonio and nearby cities.
          </p>

          <div className="adu-actions">
            <a href="/quote" className="adu-btn adu-btn-primary">
              Request a Free Consultation
            </a>
            <a href="tel:+12542902482" className="adu-btn adu-btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="adu-hero-image">
          <Image
            src="/kings-27.jpg"
            alt="ADU mother-in-law suite exterior in San Antonio by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="adu-section adu-two-column">
        <div>
          <p className="adu-section-label">Why build an ADU?</p>
          <h2>More flexibility on the property you already own.</h2>
        </div>

        <div className="adu-copy">
          <p>
            A well-built ADU can create space for family, guests, rental income,
            aging parents, or a private work-from-home setup. The key is planning
            it correctly from the start: layout, utilities, access, parking,
            privacy, budget, and code requirements all matter.
          </p>
          <p>
            Luxterra approaches ADUs like long-term assets. We help you think
            through how the space will be used today and how it can keep creating
            value years from now.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="adu-section">
        <div className="adu-section-header">
          <p className="adu-section-label">What we build</p>
          <h2>ADUs, guest houses, and flexible living spaces.</h2>
          <p>
            Whether you are building for family, rental income, or future resale
            value, we help turn the idea into a clear scope, budget, and build
            plan.
          </p>
        </div>

        <div className="adu-card-grid">
          <article className="adu-card">
            <h3>Detached ADUs</h3>
            <p>
              Backyard guest houses or secondary units with private access,
              kitchen, bathroom, and living space.
            </p>
          </article>

          <article className="adu-card">
            <h3>Mother-in-Law Suites</h3>
            <p>
              Comfortable living areas designed for parents, extended family, or
              long-term guests.
            </p>
          </article>

          <article className="adu-card">
            <h3>Garage Conversions</h3>
            <p>
              Convert underused garage space into a livable unit, studio, rental,
              or guest suite.
            </p>
          </article>

          <article className="adu-card">
            <h3>Additions</h3>
            <p>
              Add square footage to an existing home while keeping circulation,
              structure, and finish quality aligned.
            </p>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="adu-section adu-process-section">
        <div className="adu-section-header">
          <p className="adu-section-label">Our process</p>
          <h2>Clear steps from idea to final walkthrough.</h2>
        </div>

        <div className="adu-process-grid">
          <div className="adu-process-step">
            <span>01</span>
            <h3>Site & goal review</h3>
            <p>
              We talk through your property, goals, rough budget, timeline, and
              what type of ADU makes the most sense.
            </p>
          </div>

          <div className="adu-process-step">
            <span>02</span>
            <h3>Planning & budget</h3>
            <p>
              We help coordinate layout, structural needs, utilities, access, and
              early pricing so there are fewer surprises.
            </p>
          </div>

          <div className="adu-process-step">
            <span>03</span>
            <h3>Permits & build</h3>
            <p>
              Luxterra manages trades, inspections, schedule, and communication
              throughout construction.
            </p>
          </div>

          <div className="adu-process-step">
            <span>04</span>
            <h3>Final walkthrough</h3>
            <p>
              We complete punch list items, clean up the jobsite, and hand over a
              finished space ready to use.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT PROOF */}
      <section className="adu-section adu-featured-project">
        <div className="adu-featured-copy">
          <p className="adu-section-label">Project proof</p>
          <h2>Kings Modern Residence: 433 square feet that earns income</h2>
          <p>
            We built a 1,358 square foot custom home and a fully independent 433
            square foot ADU on one San Antonio lot, finished in 2024. The ADU is
            one bedroom and one full bathroom with its own kitchen and its own
            entrance &mdash; not a converted room.
          </p>
          <p>
            Both units operate as short-term rentals today. That is the case for
            building a second dwelling properly, in one sentence: it is not
            storage, it is a second income.
          </p>
          <a href="/projects/kings-modern-residence" className="adu-text-link">
            View Kings Modern Residence →
          </a>
        </div>

        <div className="adu-featured-images">
          <Image
            src="/kings-32.jpg"
            alt="Interior of a 433 square foot ADU in San Antonio, sleeping area opening onto its own kitchen"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <Image
            src="/kings-29.jpg"
            alt="ADU kitchen with white cabinetry, stainless range and a navy accent wall, San Antonio"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="adu-section">
        <div className="adu-section-header">
          <p className="adu-section-label">FAQ</p>
          <h2>Common ADU questions.</h2>
        </div>

        <div className="adu-faq-list">
          {FAQS.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="adu-final-cta">
        <div>
          <h2>Planning an ADU or mother-in-law suite?</h2>
          <p>
            Share your property address, rough idea, and budget range. We’ll help
            you understand what is realistic and what the next step should be.
          </p>
        </div>

        <div className="adu-actions">
          <a href="/quote" className="adu-btn adu-btn-primary">
            Request a Free Consultation
          </a>
          <a href="tel:+12542902482" className="adu-btn adu-btn-secondary">
            Call (254) 290-2482
          </a>
        </div>
      </section>

      <JsonLd data={faqPageSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: "ADU and Mother-in-Law Suite Construction",
          description: "Luxterra Builders designs and builds ADUs, mother-in-law suites, garage conversions, and backyard guest houses in San Antonio and nearby areas.",
          path: "/adu-builder-san-antonio",
        })}
      />
    </main>
  );
}