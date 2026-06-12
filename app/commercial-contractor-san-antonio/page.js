// app/commercial-contractor-san-antonio/page.js
import "./commercial.css";

export const metadata = {
  title: "Commercial Contractor San Antonio | Luxterra Builders",
  description:
    "Luxterra Builders handles commercial build-outs, tenant improvements, office spaces, retail spaces, industrial spaces, and specialized commercial projects in San Antonio.",
};

export default function CommercialContractorSanAntonioPage() {
  return (
    <main className="commercial-page">
      {/* HERO */}
      <section className="commercial-hero">
        <div className="commercial-hero-copy">
          <p className="commercial-kicker">San Antonio Commercial Contractor</p>

          <h1>Commercial spaces built for function, durability, and growth.</h1>

          <p>
            Luxterra Builders helps business owners, investors, and property
            owners complete commercial build-outs, tenant improvements, office
            spaces, retail spaces, industrial spaces, and specialized commercial
            projects across San Antonio and surrounding areas.
          </p>

          <div className="commercial-actions">
            <a href="/quote" className="commercial-btn commercial-btn-primary">
              Request a Free Consultation
            </a>
            <a
              href="tel:12542902482"
              className="commercial-btn commercial-btn-secondary"
            >
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="commercial-hero-image">
          <img
            src="/industrial-01.jpg"
            alt="Commercial industrial build-out in San Antonio by Luxterra Builders"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="commercial-section commercial-two-column">
        <div>
          <p className="commercial-section-label">Why Luxterra</p>
          <h2>Your commercial project needs more than basic construction.</h2>
        </div>

        <div className="commercial-copy">
          <p>
            Commercial construction has to balance schedule, code requirements,
            tenant needs, inspections, durability, and business operations. A
            small coordination mistake can slow down opening day or create
            expensive rework.
          </p>
          <p>
            Luxterra Builders helps clients plan the scope, coordinate trades,
            manage inspections, and keep the build moving with clear
            communication from start to finish.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="commercial-section">
        <div className="commercial-section-header">
          <p className="commercial-section-label">What we build</p>
          <h2>Commercial build-outs and tenant improvements.</h2>
          <p>
            We help turn empty, outdated, or underused spaces into functional
            commercial environments ready for business.
          </p>
        </div>

        <div className="commercial-card-grid">
          <article className="commercial-card">
            <h3>Tenant Improvements</h3>
            <p>
              Build-outs and upgrades for leased commercial spaces, including
              layout changes, finishes, utilities, and code-related work.
            </p>
          </article>

          <article className="commercial-card">
            <h3>Office Build-Outs</h3>
            <p>
              Offices, conference rooms, reception areas, break rooms, private
              workspaces, and flexible layouts for growing teams.
            </p>
          </article>

          <article className="commercial-card">
            <h3>Retail & Service Spaces</h3>
            <p>
              Customer-facing spaces designed for daily use, brand presentation,
              durability, and efficient business operations.
            </p>
          </article>

          <article className="commercial-card">
            <h3>Industrial & Flex Spaces</h3>
            <p>
              Warehouse, lab, production, storage, and flex-space improvements
              built around function, safety, and long-term use.
            </p>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="commercial-section commercial-process-section">
        <div className="commercial-section-header">
          <p className="commercial-section-label">Our process</p>
          <h2>A clear path from scope to finished space.</h2>
        </div>

        <div className="commercial-process-grid">
          <div className="commercial-process-step">
            <span>01</span>
            <h3>Scope Review</h3>
            <p>
              We review the space, business goals, lease requirements, rough
              budget, schedule, and what must be completed before opening.
            </p>
          </div>

          <div className="commercial-process-step">
            <span>02</span>
            <h3>Planning & Pricing</h3>
            <p>
              We help clarify layout, materials, code needs, inspections,
              utilities, trades, and realistic project pricing.
            </p>
          </div>

          <div className="commercial-process-step">
            <span>03</span>
            <h3>Construction</h3>
            <p>
              Luxterra coordinates trades, schedule, jobsite activity, city
              inspections, and communication throughout the build.
            </p>
          </div>

          <div className="commercial-process-step">
            <span>04</span>
            <h3>Final Turnover</h3>
            <p>
              We finish punch list items, clean up the site, and help deliver a
              completed space ready for business use.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT PROOF */}
      <section className="commercial-section commercial-featured-project">
        <div className="commercial-featured-copy">
          <p className="commercial-section-label">Project proof</p>
          <h2>Advanced Industrial Lab</h2>
          <p>
            The Advanced Industrial Lab project shows Luxterra’s ability to
            coordinate specialized commercial and industrial space requirements,
            including functional layouts, durable finishes, and build-out details
            that support daily operations.
          </p>
          <a href="/projects/industrial-lab" className="commercial-text-link">
            View Advanced Industrial Lab →
          </a>
        </div>

        <div className="commercial-featured-images">
          <img
            src="/industrial-01.jpg"
            alt="Advanced Industrial Lab commercial build-out"
          />
          <img
            src="/industrial-03.jpg"
            alt="Industrial lab interior build-out by Luxterra Builders"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="commercial-section">
        <div className="commercial-section-header">
          <p className="commercial-section-label">FAQ</p>
          <h2>Common commercial construction questions.</h2>
        </div>

        <div className="commercial-faq-list">
          <article>
            <h3>Do you handle tenant improvements?</h3>
            <p>
              Yes. Luxterra can help with commercial tenant improvements,
              build-outs, layout changes, finishes, and coordination needed to
              prepare a space for business use.
            </p>
          </article>

          <article>
            <h3>Can you help before I sign a lease?</h3>
            <p>
              Yes. It is smart to speak with a builder before signing a lease so
              you can better understand construction costs, timing, utilities,
              and potential code requirements.
            </p>
          </article>

          <article>
            <h3>Do you work on industrial or flex spaces?</h3>
            <p>
              Yes. Luxterra works on industrial, lab, warehouse, and flex-space
              projects where function, durability, safety, and inspections need
              to be coordinated carefully.
            </p>
          </article>

          <article>
            <h3>How early should I contact a commercial contractor?</h3>
            <p>
              Early. A contractor can help you avoid leasing, designing, or
              budgeting around a plan that may be expensive or difficult to
              build.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="commercial-final-cta">
        <div>
          <h2>Planning a commercial build-out in San Antonio?</h2>
          <p>
            Tell us about the space, business use, timeline, and budget range.
            We’ll help you understand what is realistic and what needs to happen
            next.
          </p>
        </div>

        <div className="commercial-actions">
          <a href="/quote" className="commercial-btn commercial-btn-primary">
            Request a Free Consultation
          </a>
          <a
            href="tel:12542902482"
            className="commercial-btn commercial-btn-secondary"
          >
            Call (254) 290-2482
          </a>
        </div>
      </section>
    </main>
  );
}
