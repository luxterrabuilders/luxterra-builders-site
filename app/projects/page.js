// app/projects/page.js
import Link from "next/link";
import "./projects.css";

export const metadata = {
  title: "Projects | Luxterra Builders",
  description: "Recent custom home, commercial, and industrial builds by Luxterra Builders.",
};

const projects = [
  {
    slug: "kings-modern-residence",
    tag: "Custom Home",
    title: "Kings Modern Residence",
    location: "San Antonio, TX",
    summary:
      "Modern custom home with ADU/mother-in-law suite, designed for multigenerational living and long-term flexibility.",
    details: "3,000+ sq ft • Full gut & rebuild • ADU/mother-in-law suite",
    image: "/kings-01.jpg",
    alt: "Exterior of a modern custom home with ADU in San Antonio",
    href: "/projects/kings-modern-residence",
  },

  {
    slug: "burnet-home",
    tag: "Custom Home",
    title: "Burnet Rooftop Residence",
    location: "Burnet, TX",
    summary:
      "Ground-up custom home with a rooftop deck, indoor–outdoor living, and modern elevations tailored to the site.",
    details: "Rooftop deck • 3D design • New construction custom home",
    image: "/burnet-01.jpg",
    alt: "Burnet custom home with rooftop deck at sunset",
    href: "/projects/burnet-home",
  },

    {
    slug: "industrial-lab",
    tag: "Industrial",
    title: "Advanced Industrial Lab",
    location: "San Antonio, TX",
    summary:
      "High-performance industrial lab and flex space built for durable daily use, strict safety requirements, and future expansion.",
    details: "Lab & flex space • Tenant build-out • Code compliance & inspections",
    image: "/industrial-01.jpg",
    alt: "Interior of an advanced industrial lab built by Luxterra Builders",
    href: "/projects/industrial-lab",
  },

];


export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="projects-inner">
        {/* HEADER */}
        <header className="projects-header">
          <p className="projects-kicker">Project Gallery</p>
          <h1 className="projects-title">Recent Luxterra builds.</h1>
          <p className="projects-lede">
            A closer look at the custom homes, commercial spaces, and industrial
            projects we&apos;ve delivered around San Antonio.
          </p>
        </header>

        {/* GRID */}
<section className="projects-grid">
  {projects.map((project) => (
    <article key={project.slug} className="projects-card">
      <Link href={`/projects/${project.slug}`} className="projects-card-link">
        <div className="projects-card-image-wrap">
          <img src={project.image} alt={project.alt} />
        </div>
        <div className="projects-card-body">
          <p className="projects-card-tag">{project.tag}</p>
          <h3>{project.title}</h3>
          <p className="projects-card-text">{project.summary}</p>
          <p className="projects-card-meta">{project.details}</p>
          <span className="projects-card-cta">View project →</span>
        </div>
      </Link>
    </article>
  ))}
</section>

      </div>
    </main>
  );
}

