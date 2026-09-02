// app/contact/page.js

import LeadForm from "../components/LeadForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions about a build, ADU, or commercial project in San Antonio? Contact Luxterra Builders to talk through your ideas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Luxterra Builders",
    description:
      "Talk to a San Antonio design-build contractor about your custom home, ADU, commercial, or industrial project.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <h1>Contact Luxterra Builders</h1>
        <p>
          Tell us about your project and we&apos;ll respond with next steps.
          We&apos;re based in San Antonio and serve the surrounding areas.
        </p>
      </section>

      <section className="page-two-column">
        <div className="page-card">
          <h2>Get in touch</h2>
          <p>
            Phone: <a href="tel:+12542902482">(254) 290-2482</a>
            <br />
            Email:{" "}
            <a href="mailto:info@luxterrabuilders.com">
              info@luxterrabuilders.com
            </a>
          </p>
          <p>
            Business Hours:
            <br />
            Monday &ndash; Friday, 8:00am &ndash; 5:00pm
          </p>
          <p>
            Typical projects: custom homes, industrial buildings, commercial
            spaces, and multifamily developments.
          </p>
          <p>
            Planning something specific and want a budget conversation?{" "}
            <a href="/quote">Request a free consultation</a> instead &mdash; it asks
            a few more questions so we can give you a straighter answer.
          </p>
        </div>

        <div className="page-card form">
          <h2>Send a message</h2>
          <LeadForm variant="short" sourcePage="/contact" />
        </div>
      </section>
    </main>
  );
}
