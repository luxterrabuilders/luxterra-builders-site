// app/design-build-contractor-san-antonio/page.js
//
// TODO (Christian): one thing that would sharpen this page and that only you
// can supply - a job where design-build caught a problem early that would
// have been expensive under the separate-contracts route. A drawing that
// wouldn't have priced out, a detail an engineer and a framer disagreed on,
// anything real. One example beats the whole explanation.

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, serviceSchema } from "../lib/schema";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/business";
import "./design-build.css";

export const metadata = {
  alternates: { canonical: "/design-build-contractor-san-antonio" },
  title: "Design-Build Contractor San Antonio",
  description:
    "One contract from design through construction. Luxterra Builders coordinates architect, engineer, permitting and build in San Antonio, so the drawings and the budget stay attached to each other.",
  openGraph: {
    title: "Design-Build Contractor San Antonio | Luxterra Builders",
    description:
      "One team from first sketch to final walkthrough, so nobody can blame the other guy.",
    url: "/design-build-contractor-san-antonio",
  },
};

const FAQS = [
  {
    q: "What is design-build, in plain terms?",
    a: "One company holds responsibility for both the design and the construction. You hire us; we coordinate the architect and the engineer and then build what they draw. The traditional alternative is design-bid-build, where you hire a designer, take the finished drawings out to contractors, and hope the prices come back near your budget.",
  },
  {
    q: "Why does that matter to me as the owner?",
    a: "Mostly because of who is responsible when something doesn't line up. Under separate contracts, a drawing that can't be built for your budget is nobody's fault: the architect designed what you asked for, the builder priced what was drawn. Under design-build it is our problem, because we are on both sides of it.",
  },
  {
    q: "Do I still get to pick my own architect?",
    a: "Yes. If you already have a designer you want to work with, we coordinate with them. Design-build describes who carries the risk of the two halves fitting together, not a requirement to use our people.",
  },
  {
    q: "Is design-build cheaper?",
    a: "Not automatically, and anyone who promises that is guessing. What it reliably does is make cost visible earlier, while changes are still cheap. The expensive version of any project is the one where the budget conversation happens after the drawings are finished.",
  },
];

const STEPS = [
  { t: "One conversation, not three", d: "Budget, site and design get discussed together from the first meeting, because they constrain each other." },
  { t: "Drawings priced as they develop", d: "Not a bid at the end. If a decision moves the number, you hear about it while you can still change your mind." },
  { t: "Engineering coordinated, not inherited", d: "The structural engineer and the builder talk to each other during design rather than after it." },
  { t: "Permitting handled by the same team", d: "We prepare and submit, respond to review comments, and schedule inspections. Design questions from a reviewer come back to people who are still involved." },
  { t: "One line of accountability", d: "When something is wrong, there is no second company to point at. That is the entire proposition." },
];

export default function DesignBuildPage() {
  return (
    <main className="db">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Design-Build Contractor", href: "/design-build-contractor-san-antonio" },
        ]}
      />

      <section className="db-hero">
        <p className="db-kicker">Design-build contractor &middot; San Antonio</p>
        <h1>One team from the first sketch to the final walkthrough.</h1>
        <p className="db-lede">
          The most expensive thing that happens on a custom home usually
          isn&apos;t a construction mistake. It is a set of drawings that get
          finished before anyone prices them, and an owner who finds out months
          later that the house they fell in love with costs a third more than
          they planned to spend.
        </p>
        <p className="db-lede">
          Design-build exists to stop that. One contract covers design and
          construction, so the drawings and the budget stay attached to each
          other the whole way.
        </p>
        <div className="db-actions">
          <Link href="/quote" className="db-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="db-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      <section className="db-compare">
        <h2>The two ways to do this</h2>
        <div className="db-compare-grid">
          <article className="db-compare-card">
            <p className="db-compare-tag">Design-bid-build</p>
            <h3>Hire a designer, then go find a builder</h3>
            <ul>
              <li>You hold two contracts and sit between them.</li>
              <li>The real price arrives after the drawings are finished.</li>
              <li>If the bids come back high, redesigning costs money you have already spent.</li>
              <li>When something doesn&apos;t work, each side can point at the other, and both can be right.</li>
            </ul>
          </article>
          <article className="db-compare-card db-compare-card-ours">
            <p className="db-compare-tag">Design-build</p>
            <h3>One team carries both halves</h3>
            <ul>
              <li>One contract, one point of responsibility.</li>
              <li>Cost is visible while the design is still moving.</li>
              <li>Buildability gets checked as drawings develop, not after.</li>
              <li>When something doesn&apos;t line up, it is ours to fix.</li>
            </ul>
          </article>
        </div>
        <p className="db-compare-note">
          Design-bid-build isn&apos;t wrong &mdash; it is the right structure for
          plenty of projects, particularly public work where competitive bidding
          is required. It is a poor fit for a first-time custom home owner with a
          firm budget.
        </p>
      </section>

      <section className="db-how">
        <h2>What that looks like on a Luxterra job</h2>
        <div className="db-how-grid">
          {STEPS.map((s) => (
            <div key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <p className="db-how-link">
          <Link href="/process">The full six-stage process &rarr;</Link>
        </p>
      </section>

      <section className="db-proof">
        <h2>Built this way</h2>
        <div className="db-proof-grid">
          <Link href="/projects/917-burnet" className="db-proof-card">
            <Image
              src="/917-burnet-kitchen-island.jpg"
              alt="Kitchen with waterfall granite island at 917 Burnet Street, San Antonio"
              width={2000}
              height={1333}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div>
              <p className="db-proof-tag">Historic renovation + custom pool &amp; spa</p>
              <h3>917 Burnet Street</h3>
              <p>
                A 1902 house through design review, an engineer&apos;s foundation
                report, and six months of construction &mdash; with the same team
                on all of it.
              </p>
            </div>
          </Link>
          <Link href="/projects/kings-modern-residence" className="db-proof-card">
            <Image
              src="/kings-01.jpg"
              alt="Kings Modern Residence exterior in San Antonio"
              width={1600}
              height={1066}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div>
              <p className="db-proof-tag">Custom home + ADU</p>
              <h3>Kings Modern Residence</h3>
              <p>
                A main house and a dedicated ADU planned together on one lot,
                which only works if the design and the build are coordinated.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="db-faq">
        <h2>Common questions</h2>
        <div className="db-faq-list">
          {FAQS.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="db-cta">
        <h2>Start with the budget conversation, not the drawings</h2>
        <p>
          Tell us the site, roughly what you want, and what you intend to spend.
          We&apos;ll tell you whether those three things fit together before
          anybody draws anything.
        </p>
        <div className="db-actions db-actions-center">
          <Link href="/quote" className="db-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="db-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      <JsonLd data={faqPageSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: "Design-Build Construction",
          description:
            "Luxterra Builders delivers design-build construction in San Antonio: one contract covering architect and engineer coordination, permitting and construction.",
          path: "/design-build-contractor-san-antonio",
        })}
      />
    </main>
  );
}
