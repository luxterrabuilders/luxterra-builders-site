// app/adu-builder-san-antonio/page.js
import "./adu.css";

export const metadata = {
  title: "ADU Builder San Antonio | Mother-in-Law Suites | Luxterra Builders",
  description:
    "Luxterra Builders designs and builds ADUs, mother-in-law suites, garage conversions, and backyard guest houses in San Antonio and nearby areas.",
};

export default function ADUBuilderSanAntonioPage() {
  return (
    <main className="adu-page">
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
            <a href="tel:12542902482" className="adu-btn adu-btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="adu-hero-image">
          <img
            src="/kings-27.jpg"
            alt="ADU mother-in-law suite exterior in San Antonio by Luxterra Builders"
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
          <h2>Kings Modern Residence: Custom home + ADU</h2>
          <p>
            Kings Modern Residence includes a dedicated ADU / mother-in-law suite
            designed for flexibility on a single property. It is a strong example
            of how a custom home and secondary living space can work together.
          </p>
          <a href="/projects/kings-modern-residence" className="adu-text-link">
            View Kings Modern Residence →
          </a>
        </div>

        <div className="adu-featured-images">
          <img
            src="/kings-27.jpg"
            alt="Kings Modern Residence ADU exterior"
          />
          <img
            src="/kings-31.jpg"
            alt="Kings Modern Residence ADU living area"
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
          <article>
            <h3>Can I build an ADU on my property in San Antonio?</h3>
            <p>
              It depends on your lot, zoning, setbacks, utilities, parking, and
              the scope of the unit. We can help review the site and determine
              what is realistic before you spend money on full plans.
            </p>
          </article>

          <article>
            <h3>Can an ADU be used as a rental?</h3>
            <p>
              Many owners build ADUs for rental income, family use, or future
              flexibility. The right strategy depends on local rules, property
              layout, and your long-term plan.
            </p>
          </article>

          <article>
            <h3>Is a garage conversion cheaper than a detached ADU?</h3>
            <p>
              Sometimes, but not always. Existing structure helps, but utilities,
              insulation, foundation, ceiling height, parking, and code upgrades
              can affect cost.
            </p>
          </article>

          <article>
            <h3>How early should I talk to a builder?</h3>
            <p>
              Early. A builder can help you avoid designing something that is
              too expensive, difficult to permit, or hard to build on your lot.
            </p>
          </article>
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
          <a href="tel:12542902482" className="adu-btn adu-btn-secondary">
            Call (254) 290-2482
          </a>
        </div>
      </section>
    </main>
  );
}