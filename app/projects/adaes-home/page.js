// app/projects/adaes-home/page.js
import Link from "next/link";

export const metadata = {
  title: "Adaes Home | Luxterra Builders",
  description:
    "A family-focused custom home by Luxterra Builders with open living, natural light, and durable finishes.",
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

export default function AdaesHomePage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.container}>
        <Link href="/" style={pageStyles.backLink}>
          ← Back to Home
        </Link>

        <p style={pageStyles.heroKicker}>FEATURED PROJECT</p>
        <h1 style={pageStyles.h1}>Adaes Home</h1>
        <p style={pageStyles.subtitle}>
          A family-centered home designed around open living, natural light, and
          finishes that can handle real life—kids, guests, and everyday use.
        </p>

        <div style={pageStyles.metaRow}>
          <span style={pageStyles.pill}>Location: Greater San Antonio</span>
          <span style={pageStyles.pill}>Type: Custom Home</span>
          <span style={pageStyles.pill}>Focus: Family living</span>
        </div>

        <div style={pageStyles.grid}>
          <div>
            <h2 style={pageStyles.sectionTitle}>Project Overview</h2>
            <p style={pageStyles.p}>
              The Adaes Home was designed for a family who wanted space to gather and
              host without losing comfort and warmth. The main living areas flow
              together, with sightlines from the kitchen into the living and dining
              spaces.
            </p>
            <p style={{ ...pageStyles.p, marginTop: "10px" }}>
              Luxterra worked closely with the owners to balance aesthetics, budget,
              and durability—selecting finishes that look great but can stand up to
              daily use.
            </p>
          </div>

          <div>
            <h2 style={pageStyles.sectionTitle}>Highlights</h2>
            <ul style={pageStyles.list}>
              <li>Open living layout connecting kitchen, dining, and family room.</li>
              <li>Natural light prioritized in main living spaces and bedrooms.</li>
              <li>Durable flooring and surfaces selected for kids & pets.</li>
              <li>Thoughtful storage and built-ins to keep clutter under control.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style={pageStyles.sectionTitle}>Photo preview</h2>
          <div style={pageStyles.galleryGrid}>
            <img src="/04.jpg" alt="Adaes Home living area" style={pageStyles.img} />
            <img src="/06.jpg" alt="Kitchen and dining" style={pageStyles.img} />
            <img src="/07.jpg" alt="Bedroom" style={pageStyles.img} />
          </div>
        </div>

        <div style={pageStyles.ctaCard}>
          <p style={pageStyles.ctaText}>
            Planning a custom home for your family? We can help you understand what&apos;s
            realistic for your budget and timeline before you break ground.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/quote" style={pageStyles.btnPrimary}>
              Start a Family Home Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

