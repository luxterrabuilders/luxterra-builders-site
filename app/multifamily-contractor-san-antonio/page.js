// app/multifamily-contractor-san-antonio/page.js
import "./multifamily.css";
import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/multifamily-contractor-san-antonio" },
  title: "Multifamily Contractor San Antonio",
  description:
    "Luxterra Builders helps investors and property owners build duplexes, small multifamily projects, ADUs, additions, and investment-focused residential projects in San Antonio.",
};

export default function MultifamilyContractorSanAntonioPage() {
  return (
    <main className="multifamily-page">
      {/* HERO */}
      <section className="multifamily-hero">
        <div className="multifamily-hero-copy">
          <p className="multifamily-kicker">San Antonio Multifamily Contractor</p>

          <h1>Multifamily projects built with investor-level thinking.</h1>

          <p>
            Luxterra Builders helps investors, developers, and property owners
            plan and build duplexes, small multifamily projects, ADUs, additions,
            and income-focused residential construction across San Antonio and
            surrounding areas.
          </p>

          <div className="multifamily-actions">
            <a
              href="/quote"
              className="multifamily-btn multifamily-btn-primary"
            >
              Request a Free Consultation
            </a>
            <a
              href="tel:12542902482"
              className="multifamily-btn multifamily-btn-secondary"
            >
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="multifamily-hero-image">
          <Image
            src="/multifamily-services-01.png"
            alt="Multifamily construction project in San Antonio by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="multifamily-section multifamily-two-column">
        <div>
          <p className="multifamily-section-label">Why Luxterra</p>
          <h2>Investment property construction needs clear numbers and clean execution.</h2>
        </div>

        <div className="multifamily-copy">
          <p>
            Multifamily construction is different from a one-off residential
            remodel. The layout, durability, cost control, timeline, utility
            planning, parking, and long-term maintenance all affect the return
            on the project.
          </p>
          <p>
            Luxterra Builders approaches multifamily projects like long-term
            assets. We help clarify the scope, budget, schedule, construction
            details, and trade coordination before the project gets expensive.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="multifamily-section">
        <div className="multifamily-section-header">
          <p className="multifamily-section-label">What we build</p>
          <h2>Small multifamily and investment-focused residential projects.</h2>
          <p>
            We help property owners and investors build practical, durable spaces
            designed for rental performance, resale value, and long-term use.
          </p>
        </div>

        <div className="multifamily-card-grid">
          <article className="multifamily-card">
            <h3>Duplexes & Small Multifamily</h3>
            <p>
              New duplexes, triplex-style layouts, small multifamily buildings,
              and income-focused residential construction.
            </p>
          </article>

          <article className="multifamily-card">
            <h3>ADUs & Secondary Units</h3>
            <p>
              Backyard guest houses, mother-in-law suites, rental units, and
              secondary living spaces that add property flexibility.
            </p>
          </article>

          <article className="multifamily-card">
            <h3>Additions & Conversions</h3>
            <p>
              Add square footage, convert underused space, or rework layouts to
              improve usability and long-term value.
            </p>
          </article>

          <article className="multifamily-card">
            <h3>Investor Build Planning</h3>
            <p>
              Early construction input for investors evaluating land, rental
              strategy, budgets, schedules, and build feasibility.
            </p>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="multifamily-section multifamily-process-section">
        <div className="multifamily-section-header">
          <p className="multifamily-section-label">Our process</p>
          <h2>A practical process for investment-focused projects.</h2>
        </div>

        <div className="multifamily-process-grid">
          <div className="multifamily-process-step">
            <span>01</span>
            <h3>Project Review</h3>
            <p>
              We review your property, goals, budget range, rental strategy,
              schedule, and what type of multifamily project makes sense.
            </p>
          </div>

          <div className="multifamily-process-step">
            <span>02</span>
            <h3>Scope & Budget</h3>
            <p>
              We help clarify layout, structure, utilities, finishes, code needs,
              site requirements, and realistic construction pricing.
            </p>
          </div>

          <div className="multifamily-process-step">
            <span>03</span>
            <h3>Construction</h3>
            <p>
              Luxterra coordinates trades, scheduling, inspections, jobsite
              activity, communication, and quality control.
            </p>
          </div>

          <div className="multifamily-process-step">
            <span>04</span>
            <h3>Turnover</h3>
            <p>
              We complete punch list items, clean up the site, and help deliver a
              finished property ready for use, lease-up, or resale.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT PROOF */}
      <section className="multifamily-section multifamily-featured-project">
        <div className="multifamily-featured-copy">
          <p className="multifamily-section-label">Project proof</p>
          <h2>Kings Modern Residence: Custom home + ADU</h2>
          <p>
            Kings Modern Residence includes a dedicated ADU / mother-in-law suite
            designed for flexibility and long-term property value. It shows how
            secondary living space can support family use, guest space, or
            future rental potential.
          </p>
          <a
            href="/projects/kings-modern-residence"
            className="multifamily-text-link"
          >
            View Kings Modern Residence →
          </a>
        </div>

        <div className="multifamily-featured-images">
          <Image
            src="/kings-27.jpg"
            alt="ADU exterior at Kings Modern Residence"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <Image
            src="/kings-31.jpg"
            alt="Interior space at Kings Modern Residence ADU"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="multifamily-section">
        <div className="multifamily-section-header">
          <p className="multifamily-section-label">FAQ</p>
          <h2>Common multifamily construction questions.</h2>
        </div>

        <div className="multifamily-faq-list">
          <article>
            <h3>Do you build duplexes and small multifamily projects?</h3>
            <p>
              Yes. Luxterra can help with duplexes, small multifamily projects,
              ADUs, additions, and investment-focused residential construction.
            </p>
          </article>

          <article>
            <h3>Can you help before I buy a lot or property?</h3>
            <p>
              Yes. Getting builder input early can help you understand rough
              construction costs, site challenges, utility needs, and whether the
              project is realistic.
            </p>
          </article>

          <article>
            <h3>Do you work with investors?</h3>
            <p>
              Yes. We work with property owners and investors who care about
              budget clarity, schedule, durability, and long-term property
              performance.
            </p>
          </article>

          <article>
            <h3>Can ADUs be part of a multifamily strategy?</h3>
            <p>
              In many cases, yes. ADUs and secondary units can add flexibility,
              family space, rental potential, or long-term value depending on the
              property and local rules.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="multifamily-final-cta">
        <div>
          <h2>Planning a multifamily or investment property project?</h2>
          <p>
            Tell us about the property, your rental or resale goals, budget
            range, and timeline. We’ll help you understand what is realistic and
            what needs to happen next.
          </p>
        </div>

        <div className="multifamily-actions">
          <a
            href="/quote"
            className="multifamily-btn multifamily-btn-primary"
          >
            Request a Free Consultation
          </a>
          <a
            href="tel:12542902482"
            className="multifamily-btn multifamily-btn-secondary"
          >
            Call (254) 290-2482
          </a>
        </div>
      </section>
    </main>
  );
}
