// app/projects/industrial-lab/page.js
import Link from "next/link";

export const metadata = {
  title: "Industrial Lab Facility | Luxterra Builders",
  description:
    "An industrial lab and flex space built by Luxterra Builders with efficient circulation, service access, and future-ready infrastructure.",
};

const pageStyles = {
  main: {
    minHeight: "100vh",
    background: "#020617",
    color: "#f9fafb",
    padding: "96px 20px 64px",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  backLink: {
    fontSize: "0.85rem",
    color: "#9ca3af",
    textDecoration: "none",
  },
  heroKicker: {
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.75rem",
    color: "#9ca3af",
    marginTop: "16px",
    marginBottom: "8px",
  },
  h1: {
    fontSize: "2.2rem",
    fontWeight: 600,
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "0.98rem",
    color: "#e5e7eb",
    maxWidth: "620px",
    marginBottom: "24px",
  },
  metaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "28px",
  },
  pill: {
    fontSize: "0.8rem",
    padding: "6px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.6)",
    color: "#e5e7eb",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
    gap: "28px",
    marginBottom: "32px",
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "6px",
  },
  p: {
    fontSize: "0.95rem",
    color: "#e5e7eb",
    lineHeight: 1.7,
  },
  list: {
    fontSize: "0.9rem",
    color: "#e5e7eb",
    paddingLeft: "18px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "10px",
    marginTop: "6px",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    height: "120px",
  },
  ctaCard: {
    marginTop: "32px",
    padding: "18px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(148,163,184,0.6)",
    background: "rgba(15,23,42,0.9)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "center",
  },
  ctaText: {
    fontSize: "0.95rem",
    color: "#e5e7eb",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "9px 16px",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    background: "linear-gradient(135deg,#fbbf24,#eab308)",
    color: "#111827",
    border: "none",
  },
};

export default function IndustrialLabPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.container}>
        <Link href="/" style={pageStyles.backLink}>
          ← Back to Home
        </Link>

        <p style={pageStyles.heroKicker}>FEATURED PROJECT</p>
        <h1 style={pageStyles.h1}>Industrial Lab Facility</h1>
        <p style={pageStyles.subtitle}>
          A specialized industrial lab and flex space designed for efficient workflow,
          safe operations, and future equipment upgrades.
        </p>

        <div style={pageStyles.metaRow}>
          <span style={pageStyles.pill}>Location: Texas</span>
          <span style={pageStyles.pill}>Type: Industrial / Lab</span>
          <span style={pageStyles.pill}>Scope: Interior build-out</span>
        </div>

        <div style={pageStyles.grid}>
          <div>
            <h2 style={pageStyles.sectionTitle}>Project Overview</h2>
            <p style={pageStyles.p}>
              This industrial lab project required careful coordination around existing
              infrastructure, safety code, and specialized equipment. Circulation paths,
              service access, and work zones were all planned with long-term use in mind.
            </p>
            <p style={{ ...pageStyles.p, marginTop: "10px" }}>
              Luxterra worked with the client&apos;s operations and safety teams to
              translate their requirements into a buildable, efficient layout.
            </p>
          </div>

          <div>
            <h2 style={pageStyles.sectionTitle}>Highlights</h2>
            <ul style={pageStyles.list}>
              <li>Efficient circulation between lab, storage, and service areas.</li>
              <li>Utility routing planned for future equipment additions.</li>
              <li>Code-driven design with inspections coordinated and closed out.</li>
              <li>Durable finishes suited for industrial workflows.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style={pageStyles.sectionTitle}>Photo preview</h2>
          <div style={pageStyles.galleryGrid}>
            <img src="/05.jpg" alt="Industrial lab area" style={pageStyles.img} />
            <img src="/08.jpg" alt="Service / support area" style={pageStyles.img} />
            <img src="/09.jpg" alt="Detail finishes" style={pageStyles.img} />
          </div>
        </div>

        <div style={pageStyles.ctaCard}>
          <p style={pageStyles.ctaText}>
            Planning an industrial, warehouse, or lab space? We can help you align
            design, code, and construction with how your team actually works.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/quote" style={pageStyles.btnPrimary}>
              Discuss an Industrial Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

