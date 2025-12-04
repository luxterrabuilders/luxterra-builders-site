export const metadata = {
  title: "Projects | Luxterra Builders",
  description:
    "Selected residential, commercial, and multifamily construction projects by Luxterra Builders.",
};

const sampleProjects = [
  {
    icon: "🏡",
    type: "Custom Home",
    name: "Hill Country Modern Residence",
    location: "North San Antonio, TX",
    summary:
      "4,000+ sq ft custom home with open-concept living, large windows, and outdoor entertainment space.",
  },
  {
    icon: "🏭",
    type: "Industrial",
    name: "Distribution Warehouse",
    location: "San Antonio, TX",
    summary:
      "65,000 sq ft warehouse with loading docks, high-span structure, and energy-efficient lighting.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="page-hero">
        <h1>Our Projects</h1>
        <p>Recent residential, commercial, and industrial builds.</p>
      </section>

      {/* GRID */}
      <section className="project-grid">
        {sampleProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.name}</h3>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Location:</strong> {project.location}</p>
            <p className="summary">{project.summary}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
