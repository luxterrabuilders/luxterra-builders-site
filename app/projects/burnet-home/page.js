// app/projects/burnet-home/page.js

export const metadata = {
  title: "Burnet Rooftop Residence – Custom Home with Rooftop Deck",
  description:
    "Design-driven custom home in Burnet, TX featuring a rooftop deck, indoor–outdoor living, and modern elevations tailored to the site.",
};

export default function BurnetRooftopResidencePage() {
  return (
    <main className="project-detail-page">
      <div className="project-detail-inner">
        {/* HERO */}
        <section className="project-detail-hero">
          <p className="lp-section-label">Featured Project</p>
          <h1 className="lp-section-title">Burnet Rooftop Residence</h1>
          <p className="lp-section-sub">
            A custom home in Burnet, Texas with a dedicated rooftop deck and
            indoor–outdoor living. Designed with 3D plans so the owner could
            see every space before we broke ground.
          </p>

          <div className="project-detail-meta">
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Project type</span>
              <span className="project-detail-meta-value">
                Custom home + rooftop deck
              </span>
            </div>
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Location</span>
              <span className="project-detail-meta-value">
                Burnet, Texas
              </span>
            </div>
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Scope</span>
              <span className="project-detail-meta-value">
                Ground-up build, structural coordination, interior finishes
              </span>
            </div>
          </div>
        </section>

        {/* STORY / COPY */}
        <section className="project-detail-copy">
          <div className="project-detail-copy-inner">
            <div className="project-detail-copy-main">
              <h2>Planned in 3D, built for real life.</h2>
              <p>
                This rooftop residence was designed for a client who wanted a
                modern home that works every day—and shows off during evenings
                and weekends. We used 3D modeling and renderings to dial in
                views, natural light, and circulation before any concrete was
                poured.
              </p>
              <p>
                The main level centers around an open kitchen, living, and
                dining area that flows to the exterior. Upstairs, a dedicated
                rooftop deck gives space for entertaining, sunsets, and long-term
                flexibility as the neighborhood grows.
              </p>
            </div>

            <div className="project-detail-copy-list">
              <h3>What Luxterra delivered</h3>
              <ul>
                <li>
                  Full 3D design package with exterior and interior renderings.
                </li>
                <li>
                  Custom floor plan laid out for rooftop access and outdoor
                  living.
                </li>
                <li>
                  Structural coordination to support the rooftop deck and views.
                </li>
                <li>
                  Finish selections that balance modern design and durability.
                </li>
                <li>
                  Turn-key management from permitting through final inspection.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="project-detail-gallery">
          <h2 className="project-detail-gallery-title">Project visuals</h2>
          <div className="project-detail-gallery-grid">
            {/* 01 */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-01.jpg"
                  alt="Burnet Rooftop Residence – front elevation"
                />
              </div>
              <figcaption>Front elevation of the Burnet Rooftop Residence.</figcaption>
            </figure>

            {/* 02 */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-02.jpg"
                  alt="Rear yard and outdoor space"
                />
              </div>
              <figcaption>
                Rear yard and outdoor space designed for everyday use.
              </figcaption>
            </figure>

            {/* 03 – rooftop */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-03.jpg"
                  alt="Rooftop deck 3D rendering"
                />
              </div>
              <figcaption>
                3D view of the rooftop deck and guardrail layout.
              </figcaption>
            </figure>

            {/* 04 – living / kitchen */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-04.jpg"
                  alt="Living and kitchen 3D view"
                />
              </div>
              <figcaption>
                Open-concept living and kitchen with sightlines toward the roof deck.
              </figcaption>
            </figure>

            {/* 05 – primary suite */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-05.jpg"
                  alt="Primary suite rendering"
                />
              </div>
              <figcaption>
                Primary suite render showing finishes and natural light.
              </figcaption>
            </figure>

            {/* 06 – plans */}
            <figure className="project-detail-gallery-item">
              <div className="project-detail-image-wrap">
                <img
                  src="/burnet-06.jpg"
                  alt="Floor plan / 3D diagram"
                />
              </div>
              <figcaption>
                3D plan view used to coordinate structure, stairs, and rooftop access.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CTA */}
        <section className="project-detail-cta">
          <div className="project-detail-cta-inner">
            <div>
              <h2>Thinking about a custom home with a rooftop deck?</h2>
              <p>
                We can walk you through feasibility, design options, and budget,
                and build from 3D concepts to final inspection.
              </p>
            </div>
            <div className="project-detail-cta-actions">
              <a href="/quote" className="lp-btn lp-btn-primary">
                Request a Free Consultation
              </a>
              <a href="tel:12542902482" className="lp-phone">
                Call (254) 290-2482
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

