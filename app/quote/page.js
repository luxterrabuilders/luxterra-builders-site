export const metadata = {
  title: "Request a Quote | Luxterra Builders",
  description:
    "Request a construction quote from Luxterra Builders for homes, industrial, commercial, or multifamily projects in San Antonio.",
};

export default function QuotePage() {
  return (
    <main className="page">
      <section className="page-hero">
        <h1>Request a Project Quote</h1>
        <p>
          Share a few details about your project and we&apos;ll follow up with
          a phone call or email to discuss scope, timeline, and budget.
        </p>
      </section>

      <section className="page-card form form-wide">
        <div className="form-grid">
          <label>
            Name
            <input type="text" name="name" placeholder="Your full name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="(###) ###-####" />
          </label>
          <label>
            Project Location
            <input
              type="text"
              name="location"
              placeholder="City, neighborhood, or address"
            />
          </label>
        </div>

        <label>
          Project Type
          <select name="projectType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>New Home Construction</option>
            <option>Remodel / Addition</option>
            <option>Industrial</option>
            <option>Commercial</option>
            <option>Multifamily</option>
            <option>Land / Site Development</option>
          </select>
        </label>

        <label>
          Approximate Budget
          <input
            type="text"
            name="budget"
            placeholder="$250,000, $1.2M, etc."
          />
        </label>

        <label>
          Project Details
          <textarea
            name="details"
            rows={5}
            placeholder="Describe what you want to build, your goals, and any deadlines..."
          />
        </label>

        <button type="submit" disabled>
          Submit Quote Request (email setup coming next)
        </button>
        <p className="muted">
          We&apos;ll enable this button and connect it directly to
          info@luxterrabuilders.com in the next step.
        </p>
      </section>
    </main>
  );
}
