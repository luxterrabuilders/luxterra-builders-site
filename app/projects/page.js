// app/projects/page.js
import Link from "next/link";
import "./projects.css";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects – Recent Luxterra Builds",
  description:
    "A curated look at Luxterra’s recent custom homes, commercial spaces, and multifamily projects built like long-term assets.",
};

const projects = [
  {
    slug: "917-burnet",
    tag: "Historic Renovation + Custom Pool & Spa",
    title: "917 Burnet Street",
    location: "San Antonio, TX",
    summary:
      "A historic San Antonio home taken back to the studs and rebuilt, with a custom-built pool, spa and rock waterfall. Minutes from downtown, and now our model home \u2014 walk it by appointment.",
    details: "Full historic renovation \u2022 Custom pool & spa \u2022 Model home",
    image: "/917-burnet-front-elevation-twilight.jpg",
    alt: "917 Burnet Street historic home renovation at twilight, San Antonio",
    href: "/projects/917-burnet",
  },

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
    tag: "Design Concept — Available to Build",
    title: "Burnet Rooftop Residence",
    location: "Burnet, TX",
    summary:
      "A design concept shown in 3D renderings — this home has not been built yet. A rooftop deck and indoor-outdoor living, available to build on your lot.",
    details: "Renderings • Rooftop deck • Available to build",
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }]} />

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
          <Image
            src={project.image}
            alt={project.alt}
            width={1600}
            height={1066}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
          />
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

