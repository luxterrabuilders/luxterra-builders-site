// app/projects/adaes-home/page.js
import "../project.css";

export default function AdaesHome() {
  return (
    <main className="project-page">
      <div className="project-inner">
        <p className="project-breadcrumb">
          <a href="/projects">Projects</a> · Residential Remodel
        </p>

        <h1 className="project-title">Adaes Home Renovation</h1>
        <p className="project-subtitle">
          San Antonio, TX • Interior reconfiguration • Family-focused remodel
        </p>

        <div className="project-hero-layout">
          <div className="project-intro">
            <p>
              This renovation focused on opening up the main living areas and
              making the home more functional for a busy family. Walls came
              down, circulation was simplified, and finishes were updated from
              floor to ceiling.
            </p>
            <p>
              The result is a bright, welcoming interior with better storage,
              durable materials, and a layout that finally matches how the
              owners use the space.
            </p>

            <div className="project-meta-grid">
              <div className="project-meta">
                <span className="project-meta-label">Scope</span>
                <span className="project-meta-value">
                  Interior reconfiguration &amp; finish update
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Services</span>
                <span className="project-meta-value">
                  Design–build, permits, interior finishes
                </span>
              </div>
              <div className="project-meta">
                <span className="project-meta-label">Timeline</span>
                <span className="project-meta-value">
                  10–12 weeks from demo to move-in
                </span>
              </div>
            </div>
          </div>

          <div className="project-hero-media">
            <div className="project-hero-image-wrap">
              <img src="/02.jpg" alt="Adaes Home living room renovation" />
            </div>
          </div>
        </div>

        <section className="project-section">
          <h2>What we focused on</h2>
          <p>
            We started by understanding how the family moved through the house
            every day. That informed which walls to remove, where to add
            storage, and how to connect the kitchen, dining, and living spaces.
          </p>
          <ul>
            <li>Removed interior walls to create an open main living area.</li>
            <li>New kitchen layout with island and better appliance placement.</li>
            <li>Updated lighting, flooring, and paint throughout.</li>
            <li>Added storage in key “drop zone” locations.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Highlights</h2>
          <div className="project-gallery-grid">
            <img src="/01.jpg" alt="Exterior view of renovated home" />
            <img src="/03.jpg" alt="Living room and media wall" />
            <img src="/05.jpg" alt="Detail of finishes and textures" />
          </div>
        </section>
      </div>
    </main>
  );
}
