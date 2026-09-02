// app/industrial-build-outs-san-antonio/page.js
import "./industrial-build-outs.css";

export const metadata = {
  title: "Industrial Build-Outs San Antonio | Luxterra Builders",
  description:
    "Luxterra Builders handles industrial build-outs, lab spaces, warehouse improvements, flex spaces, and specialized commercial construction in San Antonio.",
};

export default function IndustrialBuildOutsSanAntonioPage() {
  return (
    <main className="industrial-page">
      <section className="industrial-hero">
        <div className="industrial-hero-copy">
          <p className="industrial-kicker">San Antonio Industrial Build-Outs</p>

          <h1>Industrial and lab spaces built for function, safety, and daily use.</h1>

          <p>
            Luxterra Builders helps business owners, operators, and property
            owners complete industrial build-outs, lab spaces, warehouse
            improvements, flex spaces, and specialized commercial projects across
            San Antonio and surrounding areas.
          </p>

          <div className="industrial-actions">
            <a href="/quote" className="industrial-btn industrial-btn-primary">
              Request a Free Consultation
            </a>
            <a href="tel:12542902482" className="industrial-btn industrial-btn-secondary">
              Call (254) 290-2482
            </a>
          </div>
        </div>

        <div className="industrial-hero-image">
          <img
            src="/industrial-01.jpg"
            alt="Industrial build-out in San Antonio by Luxterra Builders"
          />
        </div>
      </section>

      <section className="industrial-section industrial-two-column">
        <div>
          <p className="industrial-section-label">Why Luxterra</p>
          <h2>Industrial projects need practical planning and clean coordination.</h2>
        </div>

        <div className="industrial-copy">
          <p>
            Industrial and specialized commercial spaces have to support real
            operations. Layout, utilities, access, durability, safety, inspection
            requirements, and future flexibility all matter.
          </p>
          <p>
            Luxterra Builders helps clarify the scope, coordinate trades, manage
            construction details, and keep the project moving with clear
            communication from start to finish.
          </p>
        </div>
      </section>

      <section className="industrial-section">
        <div className="industrial-section-header">
          <p className="industrial-section-label">What we build</p>
          <h2>Industrial, lab, warehouse, and flex-space build-outs.</h2>
          <p>
            We help turn empty, outdated, or underused commercial spaces into
            functional environments ready for daily operations.
          </p>
        </div>

        <div className="industrial-card-grid">
          <article className="industrial-card">
            <h3>Industrial Build-Outs</h3>
            <p>
              Functional improvements for industrial spaces, production areas,
              storage, operations, and specialized business use.
            </p>
          </article>

          <article className="industrial-card">
            <h3>Lab Spaces</h3>
            <p>
              Lab and technical-use spaces built with attention to layout,
              durability, utilities, safety, and inspection needs.
            </p>
          </article>

          <article className="industrial-card">
            <h3>Warehouse Improvements</h3>
            <p>
              Warehouse upgrades, interior improvements, work areas, storage
              layouts, office areas, and support spaces.
            </p>
          </article>

          <article className="industrial-card">
            <h3>Flex Spaces</h3>
            <p>
              Flexible commercial spaces that combine office, warehouse,
              production, storage, or specialty use under one roof.
            </p>
          </article>
        </div>
      </section>

      <section className="industrial-section industrial-process-section">
        <div className="industrial-section-header">
          <p className="industrial-section-label">Our process</p>
          <h2>A clear build-out process for specialized spaces.</h2>
        </div>

        <div className="industrial-process-grid">
          <div className="industrial-process-step">
            <span>01</span>
            <h3>Use & Scope Review</h3>
            <p>
              We review how the space will be used, what needs to be built, and
              what must be considered before construction starts.
            </p>
          </div>

          <div className="industrial-process-step">
            <span>02</span>
            <h3>Planning & Pricing</h3>
            <p>
              We help clarify layout, materials, utilities, trades, code
              requirements, inspection needs, and realistic construction pricing.
            </p>
          </div>

          <div className="industrial-process-step">
            <span>03</span>
            <h3>Construction</h3>
            <p>
              Luxterra coordinates trades, scheduling, jobsite activity,
              inspections, communication, and quality control.
            </p>
          </div>

          <div className="industrial-process-step">
            <span>04</span>
            <h3>Final Turnover</h3>
            <p>
              We complete punch list items, clean up the site, and help deliver a
              finished space ready for business use.
            </p>
          </div>
        </div>
      </section>

      <section className="industrial-section industrial-featured-project">
        <div className="industrial-featured-copy">
          <p className="industrial-section-label">Project proof</p>
          <h2>Advanced Industrial Lab</h2>
          <p>
            The Advanced Industrial Lab project shows Luxterra’s ability to
            coordinate specialized industrial and lab-space requirements,
            including functional layouts, durable finishes, and details that
            support daily operations.
          </p>
          <a href="/projects/industrial-lab" className="industrial-text-link">
            View Advanced Industrial Lab →
          </a>
        </div>

        <div className="industrial-featured-images">
          <img
            src="/industrial-01.jpg"
            alt="Advanced Industrial Lab project by Luxterra Builders"
          />
          <img
            src="/industrial-03.jpg"
            alt="Industrial lab interior build-out in San Antonio"
          />
        </div>
      </section>

      <section className="industrial-section">
        <div className="industrial-section-header">
          <p className="industrial-section-label">FAQ</p>
          <h2>Common industrial build-out questions.</h2>
        </div>

        <div className="industrial-faq-list">
          <article>
            <h3>Do you handle industrial build-outs?</h3>
            <p>
              Yes. Luxterra Builders can help with industrial spaces, lab spaces,
              warehouse improvements, flex spaces, and specialized commercial
              build-outs.
            </p>
          </article>

          <article>
            <h3>Can you help before I lease or buy a space?</h3>
            <p>
              Yes. It is smart to speak with a builder early so you can better
              understand construction costs, timing, utilities, inspections, and
              possible build-out limitations.
            </p>
          </article>

          <article>
            <h3>Do you coordinate inspections and trades?</h3>
            <p>
              Yes. Luxterra helps coordinate trades, jobsite scheduling,
              inspections, construction details, and communication throughout the
              project.
            </p>
          </article>

          <article>
            <h3>What areas do you serve?</h3>
            <p>
              Luxterra Builders serves San Antonio and surrounding areas,
              including Boerne, New Braunfels, Bulverde, Helotes, and nearby
              communities.
            </p>
          </article>
        </div>
      </section>

      <section className="industrial-final-cta">
        <div>
          <h2>Planning an industrial or lab build-out?</h2>
          <p>
            Tell us about the space, business use, schedule, and budget range.
            We’ll help you understand what is realistic and what needs to happen
            next.
          </p>
        </div>

        <div className="industrial-actions">
          <a href="/quote" className="industrial-btn industrial-btn-primary">
            Request a Free Consultation
          </a>
          <a href="tel:12542902482" className="industrial-btn industrial-btn-secondary">
            Call (254) 290-2482
          </a>
        </div>
      </section>
    </main>
  );
}