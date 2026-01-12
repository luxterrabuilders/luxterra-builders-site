// app/projects/page.js
"use client";

import "../home.css";

const projects = [
  {
    slug: "kings-modern-residence",
    tag: "Custom Home",
    title: "Kings Modern Residence",
    image: "/01.jpg",
    blurb:
      "Warm interiors, clean lines, and a reimagined layout in the heart of San Antonio.",
    meta: "3,000+ sq ft • Full gut & rebuild",
  },
  {
    slug: "adaes-home",
    tag: "Residential Remodel",
    title: "Adaes Home",
    image: "/02.jpg",
    blurb:
      "Open-concept living, updated kitchen, and finishes tailored to how this family really lives.",
    meta: "Interior reconfiguration • New finishes",
  },
  {
    slug: "industrial-lab",
    tag: "Industrial",
    title: "Advanced Industrial Lab",
    image: "/03.jpg",
    blurb:
      "High-performance industrial space with durable finishes and efficient circulation.",
    meta: "Lab & flex space • Tenant build-out",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="lp-featured projects-layout">
        <p className="lp-section-label">Projects</p>
        <h1 className="lp-section-title">Recent Luxterra builds.</h1>
        <p className="lp-section-sub">
          A closer look at the kind of detail, coordination, and craftsmanship
          we bring to every project.
        </p>

        <div className="lp-project-grid">
          {projects.map((p) => (
            <article key={p.slug} className="lp-project-card">
              <div className="lp-project-image-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="lp-project-body">
                <p className="lp-project-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="lp-project-text">{p.blurb}</p>
                <p className="lp-project-meta">{p.meta}</p>
                <a href={`/projects/${p.slug}`} className="lp-project-link">
                  View project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

