// app/projects/industrial-lab/page.js
import "../project.css";

export default function IndustrialLab() {
  return (
    <main className="project-page">
      <div className="project-inner">
        <p className="project-breadcrumb">
          <a href="/projects">Projects</a> · Industrial
        </p>

        <h1 className="project-title">Advanced Industrial Lab</h1>
        <p className="project-subtitle">
          San Antonio, TX • Lab &amp; flex space build-out • Industrial tenant
          improvement
        </p>

        <div className="project-hero-layout">
          <div className="project-intro">
            <p>
              This industrial lab was built for a growing company that needed
              clean circulation, durable finishes, and clear separation between
              office and production areas. Luxterra delivered a layout that
              supports both day-to-day work and future expansion.
            </p>
            <p>
              The project combined new construction with strategic reuse of
              existing structure, keeping the schedule tight while still
              delivering a polished final product.
            </p>

            <div className="project-meta-grid">
              <div className="project-meta">
                <span className="project-meta-label">Scope</span>
                <span className="project-meta-value">
                  Lab, warehouse, and office build-out
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Services</span>
                <span className="project-meta-value">
                  Preconstruction, design coordination, GC
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Key priorities</span>
                <span className="project-meta-value">
                  Safety, durability, clean workflow
                </span>
              </div>
            </div>
          </div>

          <div className="project-hero-media">
            <div className="project-hero-image-wrap">
              <img src="/03.jpg" alt="Industrial lab interior" />
            </div>
          </div>
        </div>

        <section className="project-section">
          <h2>What we delivered</h2>
          <p>
            From early budgeting through final punch list, Luxterra managed the
            entire build so the client could stay focused on operations. We
            coordinated directly with engineers, vendors, and inspectors to keep
            approvals moving.
          </p>
          <ul>
            <li>Durable flooring and wall systems for heavy use areas.</li>
            <li>Upgraded power and mechanical systems sized for growth.</li>
            <li>
              Clearly separated clean zones, storage, and shipping/receiving.
            </li>
            <li>Efficient lighting and controls for long operating hours.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Highlights</h2>
          <div className="project-gallery-grid">
            <img src="/04.jpg" alt="Industrial corridor and finishes" />
            <img src="/06.jpg" alt="Equipment-ready flex space" />
            <img src="/05.jpg" alt="Detail of lighting and structure" />
          </div>
        </section>
      </div>
    </main>
  );
}

