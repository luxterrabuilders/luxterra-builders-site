// app/quote/page.js

import "./quote.css";

export const metadata = {
  title: "Request a Project Quote",
  description:
    "Request a free consultation for your custom home, commercial, industrial, or pool project in San Antonio & surrounding areas.",
};

export default function QuotePage() {
  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-inner">
          {/* LEFT: COPY */}
          <div className="quote-copy">
            <p className="quote-kicker">REQUEST A QUOTE</p>
            <h1>Tell us about your project.</h1>
            <p className="quote-intro">
              Whether you&apos;re planning a custom home, an industrial facility, or a
              commercial build-out, Luxterra Builders manages the entire process—from
              planning and permitting to final punch list.
            </p>

            <ul className="quote-bullets">
              <li>Custom homes, industrial, commercial, and pools in San Antonio.</li>
              <li>Clear budgets, transparent change orders, no surprise costs.</li>
              <li>Dedicated project manager and weekly communication.</li>
            </ul>

            <p className="quote-note">
              Share a few details below and we&apos;ll follow up within one business day.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="quote-form-card">
            <form
              className="quote-form"
              action="https://formspree.io/f/myzrdyba"
              method="POST"
            >
              {/* Contact Info */}
              <div className="quote-field-group">
                <div className="quote-field">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="email">Email*</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="quote-field-group">
                <div className="quote-field">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="location">Project Location*</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="San Antonio, TX"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="quote-field">
                <label htmlFor="projectType">Project Type*</label>
                <select id="projectType" name="projectType" required>
                  <option value="">Select one</option>
                  <option value="Custom Home">Custom Home</option>
                  <option value="Remodel / Addition">Remodel / Addition</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Multifamily / ADU">Multifamily / ADU</option>
                  <option value="Pool">Pool</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="quote-field-group">
                <div className="quote-field">
                  <label htmlFor="budget">Approximate Budget</label>
                  <select id="budget" name="budget">
                    <option value="">Select a range</option>
                    <option value="Under $250k">Under $250k</option>
                    <option value="$250k – $500k">$250k – $500k</option>
                    <option value="$500k – $1M">$500k – $1M</option>
                    <option value="$1M+">$1M+</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label htmlFor="timeline">Ideal Start Time</label>
                  <select id="timeline" name="timeline">
                    <option value="">Select</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>

              <div className="quote-field">
                <label htmlFor="message">Tell us about your project*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Lot location, square footage, use (home, warehouse, retail, etc.), and any key details."
                />
              </div>

              <div className="quote-field">
                <label htmlFor="hearAbout">How did you hear about us?</label>
                <input
                  id="hearAbout"
                  name="hearAbout"
                  type="text"
                  placeholder="Referral, Google, social media, etc."
                />
              </div>

              {/* Submit */}
              <button type="submit" className="quote-submit">
                Request My Free Consultation
              </button>

              <p className="quote-privacy">
                By submitting this form, you agree to be contacted by Luxterra Builders
                regarding your project. We respect your time and privacy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
