// app/projects/industrial-lab/page.js
"use client";

import "../project.css";

const labImages = [
  "/industrial-01.jpg",
  "/industrial-02.jpg",
  "/industrial-03.jpg",
  "/industrial-04.jpg",
  "/industrial-05.jpg",
];

export default function IndustrialLabPage() {
  return (
    <main className="project-detail-page">
      <div className="project-detail-inner">
        {/* HERO */}
        <header className="project-detail-hero">
          <p className="project-detail-label">Industrial</p>
          <h1 className="project-detail-title">Advanced Industrial Lab</h1>
          <p className="project-detail-location">San Antonio, TX</p>

          <p className="project-detail-intro">
            High-performance industrial lab with durable finishes, organized
            circulation, and equipment-ready infrastructure.
          </p>

          <div className="project-detail-meta">
            <div>
              <span className="project-detail-meta-label">Project type</span>
              <span className="project-detail-meta-value">
                Industrial lab &amp; flex space
              </span>
            </div>
            <div>
              <span className="project-detail-meta-label">Scope</span>
              <span className="project-detail-meta-value">
                Layout rework, finishes, utilities, inspections
              </span>
            </div>
          </div>
        </header>

        {/* STORY */}
        <section className="project-detail-story">
          <h2 className="project-detail-heading">
            Built to work hard every day.
          </h2>
          <p>
            The industrial lab was designed for a client who needed a clean,
            efficient space that could handle heavy daily use, strict safety
            standards, and future equipment upgrades.
          </p>
          <ul className="project-detail-bullets">
            <li>Reconfigured floor plan for clear circulation.</li>
            <li>Durable walls, floors, and finishes for heavy use.</li>
            <li>Integrated power, data, and mechanical runs.</li>
            <li>Code-compliant life safety and ventilation.</li>
          </ul>
        </section>

        {/* GALLERY */}
        <section className="project-detail-gallery">
          <h2 className="project-detail-heading">Project photos</h2>
          <p className="project-detail-gallery-intro">
            A closer look at the lab layout, finishes, and details.
          </p>

          <div className="project-detail-gallery-grid">
            {labImages.map((src, index) => (
              <figure key={src} className="project-detail-gallery-item">
                <img
                  src={src}
                  alt={`Advanced Industrial Lab – photo ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="project-detail-cta">
          <div className="project-detail-cta-inner">
            <h2>Planning an industrial or lab build-out?</h2>
            <p>
              Whether it&apos;s a new facility or a retrofit, we can help you
              plan a layout, schedule, and budget that meets your operational
              needs and passes inspection the first time.
            </p>
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

