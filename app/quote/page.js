// app/quote/page.js

import LeadForm from "../components/LeadForm";
import "./quote.css";

export const metadata = {
  title: "Request a Free Consultation",
  description:
    "Tell Luxterra Builders about your custom home, commercial, or multifamily project and get a free consultation and budget range.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Request a Free Consultation | Luxterra Builders",
    description:
      "Share your plans, budget, or a rough idea. We'll tell you what's realistic to build in San Antonio and what it takes.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-inner">
          {/* LEFT: COPY */}
          <div className="quote-copy">
            <p className="quote-kicker">REQUEST A CONSULTATION</p>
            <h1>Tell us about your project.</h1>
            <p className="quote-intro">
              Whether you&apos;re planning a custom home, an industrial facility, or a
              commercial build-out, Luxterra Builders manages the entire process&mdash;from
              planning and permitting to final punch list.
            </p>

            <ul className="quote-bullets">
              <li>Custom homes, ADUs, multifamily, commercial and industrial work across San Antonio.</li>
              <li>Clear budgets, documented change orders, no surprise costs.</li>
              <li>You work directly with the builder, with weekly updates.</li>
            </ul>

            <p className="quote-note">
              Share a few details and we&apos;ll follow up within one business day. The
              more you can tell us about the site and the budget, the more useful our
              first answer will be.
            </p>

            <p className="quote-note">
              Don&apos;t own a lot yet? Say so below &mdash; we help people evaluate land
              before they buy, and it&apos;s far cheaper to find the problems then.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="quote-form-card">
            <LeadForm variant="full" sourcePage="/quote" />
          </div>
        </div>
      </section>
    </main>
  );
}
