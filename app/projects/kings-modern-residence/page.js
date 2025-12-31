// app/projects/kings-modern-residence/page.js
import Link from "next/link";

export const metadata = {
  title: "Kings Modern Residence | Luxterra Builders",
  description:
    "A modern San Antonio residence built by Luxterra Builders with clean lines, efficient layout, and high-end finishes.",
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

export default function KingsModernResidencePage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.container}>
        <Link href="/" style={pageStyles.backLink}>
          ← Back to Home
        </Link>

        <p style={pageStyles.heroKicker}>FEATURED PROJECT</p>
        <h1 style={pageStyles.h1}>Kings Modern Residence</h1>
        <p style={pageStyles.subtitle}>
          A modern infill residence in San Antonio with clean architectural lines,
          warm materials, and an efficient plan designed for everyday living and
          entertaining.
        </p>

        <div style={pageStyles.metaRow}>
          <span style={pageStyles.pill}>Location: San Antonio, TX</span>
          <span style={pageStyles.pill}>Type: Custom Home</span>
          <span style={pageStyles.pill}>Scope: Ground-up build</span>
        </div>

        <div style={pageStyles.grid}>
          <div>
            <h2 style={pageStyles.sectionTitle}>Project Overview</h2>
            <p style={pageStyles.p}>
              Kings Modern Residence was designed for a client who wanted a bold,
              modern look with highly functional spaces. The home features an open
              living area, clean lines, and a strong connection between the interior
              and exterior spaces.
            </p>
            <p style={{ ...pageStyles.p, marginTop: "10px" }}>
              Luxterra managed the project from early planning through final punch
              list—coordinating with design partners, managing trades, and keeping
              the project on schedule.
            </p>
          </div>

          <div>
            <h2 style={pageStyles.sectionTitle}>Highlights</h2>
            <ul style={pageStyles.list}>
              <li>Modern exterior with strong curb appeal on a tight urban lot.</li>
              <li>Open-concept living, dining, and kitchen with natural light.</li>
              <li>Durable finishes selected for real-world everyday use.</li>
              <li>Efficient floor plan that maximizes usable square footage.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style={pageStyles.sectionTitle}>Photo preview</h2>
          <div style={pageStyles.galleryGrid}>
            <img src="/01.jpg" alt="Kings Modern Residence exterior" style={pageStyles.img} />
            <img src="/02.jpg" alt="Porch and entry" style={pageStyles.img} />
            <img src="/03.jpg" alt="Living room" style={pageStyles.img} />
          </div>
        </div>

        <div style={pageStyles.ctaCard}>
          <p style={pageStyles.ctaText}>
            Have a modern home in mind? Share your plans—or even just a rough idea—
            and we&apos;ll help you understand budget, timeline, and next steps.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/quote" style={pageStyles.btnPrimary}>
              Request a Project Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
