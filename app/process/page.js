// app/process/page.js
//
// TODO (Christian): two things I deliberately left out because I won't invent
// them, and both would make this page considerably stronger:
//   1. Typical duration for each stage on a normal custom home. Even ranges
//      ("permitting usually runs 6-10 weeks in the City of San Antonio")
//      answer the question every first-time builder actually has.
//   2. Anything you do here that most builders don't. The specifics are what
//      make a process page persuasive rather than generic.

import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/business";
import "./process.css";

export const metadata = {
  alternates: { canonical: "/process" },
  title: "Our Design-Build Process",
  description:
    "How a Luxterra project runs, stage by stage: discovery, feasibility and budgeting, design and engineering, permitting, construction, and final walkthrough.",
  openGraph: {
    title: "Our Design-Build Process | Luxterra Builders",
    description:
      "What actually happens on a Luxterra build, from the first conversation to the final punch list.",
    url: "/process",
  },
};

const STAGES = [
  {
    name: "Discovery",
    summary: "We work out what you're actually trying to build, and whether we're the right builder for it.",
    detail:
      "A conversation about the property, how you want to use the space, and the budget range you have in mind. If what you want and what you've budgeted don't line up, this is where you find out — not three months into design. We'll tell you if the project isn't a fit for us.",
    fromYou: "Whatever you have: a lot address, a sketch, saved photos, a builder's plan you liked, or just an idea.",
  },
  {
    name: "Feasibility and budgeting",
    summary: "We find out what the site will actually let you build, and what it will realistically cost.",
    detail:
      "Site conditions, access, utilities, setbacks, and anything about the lot that drives cost before a single wall goes up. You get a preliminary budget built around real construction costs rather than a per-square-foot guess, plus options for phasing the work if the full scope doesn't fit the number today.",
    fromYou: "Survey, plat, or deed restrictions if you have them. If you don't own the lot yet, talk to us before you buy.",
  },
  {
    name: "Design and engineering",
    summary: "Plans get drawn and engineered against a budget that already exists.",
    detail:
      "We coordinate the architect and structural engineer so the drawings reflect what can actually be built for your number. Finish and fixture decisions get made here with allowances written down, because allowances decided later are where budgets quietly come apart.",
    fromYou: "Decisions, mostly. The faster selections get made, the fewer surprises reach the schedule.",
  },
  {
    name: "Permitting",
    summary: "We handle submittals and the back-and-forth with the reviewing authority.",
    detail:
      "Which authority reviews your project depends on where the lot sits — inside San Antonio city limits is a different process from unincorporated Bexar County or a Hill Country municipality. We prepare and submit the package, respond to review comments, and schedule inspections as the build progresses.",
    fromYou: "Signatures, and patience. This stage is largely out of everyone's hands once the package is in.",
  },
  {
    name: "Construction",
    summary: "The build runs, and you always know where it stands.",
    detail:
      "Weekly updates so you never have to chase us for a status. Change orders are documented and priced before the work happens, not discovered on an invoice afterwards. You work directly with the builder throughout — there's no project coordinator between you and the person responsible.",
    fromYou: "Timely answers when a decision is needed. A held decision holds the schedule.",
  },
  {
    name: "Final walkthrough",
    summary: "We walk it together, list what's left, and finish it.",
    detail:
      "A punch list built with you rather than handed to you, then worked until it's closed out. We go through how the systems in the house operate and what to expect in the first year of a new build.",
    fromYou: "A critical eye. Things flagged at the walkthrough are far easier to resolve than things raised months later.",
  },
];

export default function ProcessPage() {
  return (
    <main className="process-page">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Our Process", href: "/process" },
        ]}
      />

      <section className="process-hero">
        <p className="process-kicker">How we build</p>
        <h1>Six stages, and you always know which one you&apos;re in.</h1>
        <p className="process-intro">
          Most people building for the first time aren&apos;t worried about the
          construction. They&apos;re worried about the parts they can&apos;t see:
          what happens next, what it will really cost, and whether anyone will
          tell them when something changes. This is how a Luxterra project runs
          from the first conversation to the last punch list item.
        </p>
      </section>

      <section className="process-stages">
        <ol>
          {STAGES.map((stage, index) => (
            <li key={stage.name}>
              <div className="process-stage-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="process-stage-body">
                <h2>{stage.name}</h2>
                <p className="process-stage-summary">{stage.summary}</p>
                <p className="process-stage-detail">{stage.detail}</p>
                <p className="process-stage-from-you">
                  <span>What we need from you</span>
                  {stage.fromYou}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="process-fit">
        <h2>Where this process starts depends on you</h2>
        <div className="process-fit-grid">
          <article>
            <h3>You already own the lot</h3>
            <p>
              We start at feasibility: what the site allows, what it will cost to
              build on, and whether the plan you have in mind fits it.
            </p>
            <Link href="/custom-home-builder-san-antonio">Custom home building &rarr;</Link>
          </article>
          <article>
            <h3>You&apos;re still looking for land</h3>
            <p>
              Talk to us before you buy. Site conditions are the single biggest
              swing in a build budget, and they are far cheaper to discover
              before closing than after.
            </p>
            <Link href="/quote">Ask about a lot &rarr;</Link>
          </article>
          <article>
            <h3>You&apos;re building to hold or rent</h3>
            <p>
              ADUs, duplexes and small multifamily get planned around long-term
              performance as well as build cost.
            </p>
            <Link href="/multifamily-contractor-san-antonio">Investment projects &rarr;</Link>
          </article>
        </div>
      </section>

      <section className="process-cta">
        <h2>Ready to talk through a project?</h2>
        <p>
          Share your plans, your budget, or a rough idea. We&apos;ll tell you
          what&apos;s realistic and what it takes to build it.
        </p>
        <div className="process-cta-actions">
          <Link href="/quote" className="process-btn-primary">
            Request a free consultation
          </Link>
          <a href={PHONE_HREF} className="process-btn-secondary">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
