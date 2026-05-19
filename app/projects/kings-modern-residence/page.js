// app/projects/kings-modern-residence/page.js

export const metadata = {
  title: "Kings Modern Residence – Custom Home + ADU",
  description:
    "Modern custom home in San Antonio with a dedicated ADU / mother-in-law suite, open concept living, and high-contrast finishes by Luxterra Builders.",
};

const photos = [
  { src: "/kings-01.jpg", label: "Front elevation – Kings Modern Residence" },
  { src: "/kings-02.jpg", label: "Street view and entry approach" },
  { src: "/kings-03.jpg", label: "Modern exterior with warm materials" },
  { src: "/kings-04.jpg", label: "Overall exterior perspective" },

  { src: "/kings-11.jpg", label: "Open-concept living room" },
  { src: "/kings-15.jpg", label: "Kitchen island and main prep area" },
  { src: "/kings-18.jpg", label: "Kitchen + dining connection" },

  { src: "/kings-19.jpg", label: "Primary bedroom" },
  { src: "/kings-23.jpg", label: "Primary bathroom – vanity and mirrors" },

  { src: "/kings-27.jpg", label: "ADU – exterior" },
  { src: "/kings-31.jpg", label: "ADU – living area" },
  { src: "/kings-34.jpg", label: "ADU – bathroom" },
];

export default function KingsModernResidencePage() {
  return (
    <main className="lp project-detail-page">
      {/* HERO SECTION */}
      <section className="project-detail-hero">
        <div className="project-detail-inner">
          <p className="lp-section-label">Featured Project</p>
          <h1 className="lp-section-title">Kings Modern Residence</h1>
          <p className="lp-section-sub">
            A modern custom home in San Antonio with a dedicated ADU / mother-in-law
            suite. Designed for multigenerational living, rental potential, and
            long-term flexibility on a single lot.
          </p>

          <div className="project-detail-meta">
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Project type</span>
              <span className="project-detail-meta-value">
                Custom Home + ADU / Mother-in-law Suite
              </span>
            </div>
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Location</span>
              <span className="project-detail-meta-value">
                San Antonio, Texas
              </span>
            </div>
            <div className="project-detail-meta-item">
              <span className="project-detail-meta-label">Scope</span>
              <span className="project-detail-meta-value">
                Ground-up build, interior finishes, site planning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / COPY */}
      <section className="project-detail-copy">
        <div className="project-detail-inner project-detail-copy-inner">
          <div className="project-detail-copy-main">
            <h2>Built like an asset, lived in like a home.</h2>
            <p>
              Kings Modern Residence was designed for an owner who wanted modern
              architecture, warm interiors, and an additional dwelling unit that
              could flex between family, guests, or rental income.
            </p>
            <p>
              Luxterra managed the full process—from planning and permits to final
              punch list—coordinating trades, inspections, and finishes to deliver
              a clean, on-budget project.
            </p>
          </div>

          <div className="project-detail-copy-list">
            <h3>Project highlights</h3>
            <ul>
              <li>Custom floor plan for main home + ADU on one property</li>
              <li>Open-concept living, kitchen, and dining for everyday use</li>
              <li>High-contrast kitchen finishes and durable materials</li>
              <li>
                Private ADU / mother-in-law suite with its own entry and amenities
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="project-detail-gallery">
        <div className="project-detail-inner">
          <h2 className="project-detail-gallery-title">Project Photos</h2>
          <div className="project-detail-gallery-grid">
            {photos.map((photo, idx) => (
              <figure key={idx} className="project-detail-gallery-item">
                <div className="project-detail-image-wrap">
                  <img src={photo.src} alt={photo.label} loading="lazy" />
                </div>
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BACK TO PROJECTS / QUOTE */}
      <section className="project-detail-cta">
        <div className="project-detail-inner project-detail-cta-inner">
          <div>
            <h2>Planning a custom home or ADU?</h2>
            <p>
              Whether it&apos;s a ground-up build, a mother-in-law suite, or an
              income-producing ADU, we approach your project like an owner—not just
              a contractor.
            </p>
          </div>
          <div className="project-detail-cta-actions">
            <a href="/quote" className="lp-btn lp-btn-primary">
              Request a Free Consultation
            </a>
            <a href="/projects" className="lp-btn lp-btn-secondary">
              Back to Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

