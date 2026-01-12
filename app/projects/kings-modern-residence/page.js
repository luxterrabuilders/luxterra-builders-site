// app/projects/kings-modern-residence/page.js
import "../project.css";

export default function KingsModernResidence() {
  return (
    <main className="project-page">
      <div className="project-inner">
        <p className="project-breadcrumb">
          <a href="/projects">Projects</a> · Custom Home
        </p>

        <h1 className="project-title">Kings Modern Residence</h1>
        <p className="project-subtitle">
          San Antonio, TX • 3,000+ sq ft custom home • Full gut &amp; rebuild
        </p>

        <div className="project-hero-layout">
          <div className="project-intro">
            <p>
              This modern residence started as a tired structure with an awkward
              layout. Luxterra reworked the floor plan, upgraded the envelope,
              and layered in warm finishes so the home feels both elevated and
              comfortable.
            </p>
            <p>
              From the front elevation to the living room millwork, every detail
              was coordinated with the owner to make sure the house reflects how
              they actually live day-to-day.
            </p>

            <div className="project-meta-grid">
              <div className="project-meta">
                <span className="project-meta-label">Scope</span>
                <span className="project-meta-value">
                  Full gut, structural upgrades, additions
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Services</span>
                <span className="project-meta-value">
                  Design–build, permitting, interiors
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Client</span>
                <span className="project-meta-value">
                  Owner-occupied custom residence
                </span>
              </div>
            </div>
          </div>

          <div className="project-hero-media">
            <div className="project-hero-image-wrap">
              <img
                src="/01.jpg"
                alt="Kings Modern Residence exterior at dusk"
              />
            </div>
          </div>
        </div>

        <section className="project-section">
          <h2>What we delivered</h2>
          <p>
            The original house had small, disconnected rooms and no real
            connection to the yard. We opened up the main living areas, added
            more glass to bring in natural light, and upgraded the building
            systems to current standards.
          </p>
          <ul>
            <li>New open-concept kitchen, living, and dining layout.</li>
            <li>Updated exterior with modern siding and warm accents.</li>
            <li>Energy-efficient windows, insulation, and HVAC.</li>
            <li>Custom cabinetry and built-ins throughout the home.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Highlights</h2>
          <div className="project-gallery-grid">
            <img src="/02.jpg" alt="Kings Modern Residence living room" />
            <img src="/03.jpg" alt="Built-in shelving and media wall" />
            <img src="/04.jpg" alt="Detail of finishes and lighting" />
          </div>
        </section>
      </div>
    </main>
  );
}

