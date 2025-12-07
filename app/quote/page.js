// app/quote/page.js

export const metadata = {
  title: "Request a Project Quote | Luxterra Builders",
  description:
    "Share your project details and request a free consultation for custom homes, industrial, commercial, or pool projects in San Antonio & surrounding areas.",
};

export default function QuotePage() {
  return (
    <main
      style={{
        padding: "80px 16px",
        background: "#020817",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#0b1120",
          borderRadius: "24px",
          padding: "32px 24px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
          color: "#e5e7eb",
        }}
      >
        <header style={{ marginBottom: "24px" }}>
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a5b4fc",
              marginBottom: "8px",
            }}
          >
            Request a Project Quote
          </p>
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#f9fafb",
              marginBottom: "8px",
            }}
          >
            Tell us about your project
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#9ca3af" }}>
            Share a few details and we&apos;ll follow up within one business
            day to discuss scope, budget, and next steps.
          </p>
        </header>

        <form
          action="https://formspree.io/f/myzrdyba" 
          method="POST"
          style={{ display: "grid", gap: "16px" }}
        >
          {/* Row 1: Name + Email */}
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
            }}
          >
            <label style={{ fontSize: "0.9rem" }}>
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                style={inputStyle}
              />
            </label>

            <label style={{ fontSize: "0.9rem" }}>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                style={inputStyle}
              />
            </label>
          </div>

          {/* Row 2: Phone + Location */}
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
            }}
          >
            <label style={{ fontSize: "0.9rem" }}>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="(###) ###-####"
                style={inputStyle}
              />
            </label>

            <label style={{ fontSize: "0.9rem" }}>
              Project Location
              <input
                type="text"
                name="location"
                placeholder="City, neighborhood, or address"
                style={inputStyle}
              />
            </label>
          </div>

          {/* Row 3: Project type + Budget */}
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
            }}
          >
            <label style={{ fontSize: "0.9rem" }}>
              Project Type
              <select name="projectType" required style={inputStyle}>
                <option value="">Select one</option>
                <option value="custom-home">Custom Home</option>
                <option value="industrial">Industrial</option>
                <option value="commercial">Commercial</option>
                <option value="pools">Pools</option>
                <option value="multifamily">Multifamily</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label style={{ fontSize: "0.9rem" }}>
              Approximate Budget
              <input
                type="text"
                name="budget"
                placeholder="$250,000, $1.2M, etc."
                style={inputStyle}
              />
            </label>
          </div>

          {/* Row 4: Details */}
          <label style={{ fontSize: "0.9rem" }}>
            Project Details
            <textarea
              name="details"
              required
              rows={5}
              placeholder="Describe what you want to build, your goals, timeline, and any key requirements..."
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "140px",
              }}
            />
          </label>

          {/* Optional: subject line for emails */}
          <input
            type="hidden"
            name="_subject"
            value="New project quote request from luxterrabuilders.com"
          />

          {/* Optional: where to send user after submit */}
          {/* <input type="hidden" name="_redirect" value="https://luxterrabuilders.com/thank-you" /> */}

          <button
            type="submit"
            style={{
              marginTop: "8px",
              padding: "14px 24px",
              borderRadius: "999px",
              border: "none",
              background:
                "linear-gradient(135deg, #fbbf24 0%, #f97316 40%, #eab308 100%)",
              color: "#111827",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(251,191,36,0.35)",
            }}
          >
            Submit Quote Request
          </button>

          <p
            style={{
              marginTop: "6px",
              fontSize: "0.8rem",
              color: "#6b7280",
            }}
          >
            We&apos;ll email your project details securely to the Luxterra
            Builders team. No spam, ever.
          </p>
        </form>
      </div>
    </main>
  );
}

/** Simple shared input style */
const inputStyle = {
  marginTop: "6px",
  width: "100%",
  padding: "10px 12px",
  borderRadius: "999px",
  border: "1px solid #1f2937",
  backgroundColor: "#020617",
  color: "#e5e7eb",
  fontSize: "0.9rem",
  outline: "none",
};
