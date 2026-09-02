// app/thank-you/page.js
//
// Post-submission page. Two jobs: reassure the person that a human has their
// details and tell them what happens next, and give analytics a single URL
// to count as a conversion.

import Link from "next/link";
import "./thank-you.css";

export const metadata = {
  title: "Thank you",
  description:
    "Your project details reached Luxterra Builders. Here's what happens next.",
  // Never index a confirmation page: it would rank for brand searches and
  // show up as a dead end for people who never submitted anything.
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const STEPS = [
  {
    title: "We read your details",
    body: "Christian reviews every inquiry personally. If anything is unclear, you'll get a question rather than a generic reply.",
  },
  {
    title: "We call or email you back within one business day",
    body: "Usually sooner. If you told us you prefer a text, that's what you'll get.",
  },
  {
    title: "We talk through feasibility and budget",
    body: "What's realistic on your site, what it will take to build, and how to phase the work if that makes sense. No obligation to go further.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="ty">
      <section className="ty-inner">
        <p className="ty-kicker">Request received</p>
        <h1>Thanks &mdash; your project details came through.</h1>
        <p className="ty-lede">
          A confirmation email is on its way to the address you gave us. If it
          doesn&apos;t appear in a few minutes, check your spam folder, then call us
          and we&apos;ll sort it out.
        </p>

        <ol className="ty-steps">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="ty-step-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ty-urgent">
          <h2>Need to talk sooner?</h2>
          <p>
            Call or text{" "}
            <a href="tel:+12542902482">(254) 290-2482</a> &mdash; Monday to Friday,
            8:00am to 5:00pm.
          </p>
        </div>

        <div className="ty-next">
          <p className="ty-next-heading">While you wait</p>
          <ul>
            <li>
              <Link href="/projects/kings-modern-residence">
                See a custom home and ADU we completed in San Antonio
              </Link>
            </li>
            <li>
              <Link href="/services">Look through what we build</Link>
            </li>
            <li>
              <Link href="/areas-we-serve">Check the areas we serve</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
