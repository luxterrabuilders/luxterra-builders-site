// app/faq/page.js
//
// The eight service pages already carry their own FAQs. This hub deliberately
// does NOT repeat them - it answers the three questions those pages dodge and
// that every caller actually asks first: what does it cost, how long does it
// take, and are you legitimate. Those are also the questions ChatGPT and AI
// Overviews get asked about builders, so they are worth owning in one place.
//
// TODO (Christian): I need real answers before these go live. I have left each
// one visibly incomplete rather than guessing, because a wrong number here is
// worse than no number.
//   1. CUSTOM HOME PRICING. You gave me $160/sqft as the semi-custom starting
//      point. I need the custom range. A range is fine - "$220 to $300 depending
//      on finish level" answers the question honestly.
//   2. WHAT THE PER-SQFT NUMBER INCLUDES. Does it cover the slab, or start
//      above it? Site work? Driveway? Landscaping? Appliances? This is the
//      single most misread number in homebuilding and being straight about it
//      is a real advantage over the builders who aren't.
//   3. SEMI-CUSTOM VS CUSTOM. What actually separates them in your business -
//      a plan library vs a blank sheet? Fixed selections vs open? One sentence.
//   4. CITY REGISTRATION. Are you registered as a contractor with San Antonio
//      Development Services? You pulled permits on 917 Burnet so I assume yes,
//      but I won't state it without you confirming. A registration number would
//      be even better.
//   5. FINANCING. Do you refer people to construction lenders, or stay out of
//      it? Either answer is fine. Silence is what costs leads.

import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema } from "../lib/schema";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/business";
import "./faq.css";

export const metadata = {
  alternates: { canonical: "/faq" },
  title: "Frequently Asked Questions",
  description:
    "What it costs to build with Luxterra Builders, how long a custom home takes in San Antonio, what we do and don't take on, and how insurance and licensing actually work for Texas contractors.",
  openGraph: {
    title: "Frequently Asked Questions | Luxterra Builders",
    description:
      "Straight answers on cost, timeline, licensing and insurance from a San Antonio design-build contractor.",
    url: "/faq",
  },
};

// This array feeds BOTH the visible page and the FAQPage schema below. Never
// add a question here that the page does not render - marking up invisible
// content breaks Google's structured data policy.
const FAQS = [
  {
    group: "Cost and timeline",
    q: "What does it cost to build with Luxterra?",
    a: "Semi-custom homes start at $160 per square foot. A per-square-foot number is a starting point, not a quote - the same house costs different amounts on different lots, because site work, foundation requirements, utility runs and finish level all move the total. We would rather give you a real range for your specific project after looking at the site than a headline number that turns out to be wrong.",
  },
  {
    group: "Cost and timeline",
    q: "How long does a custom home take?",
    a: "Plan on about three months for architecture and permitting, then about six months of construction. Roughly nine months from first conversation to move-in, assuming decisions get made on schedule. Permitting is the part most likely to stretch, and it depends on where the lot sits - a property in a historic district or an HOA with architectural review adds time that has nothing to do with how fast we build.",
  },
  {
    group: "Cost and timeline",
    q: "What slows a project down most often?",
    a: "Selections and change orders. A decision that waits two weeks does not cost two weeks once it has pushed a trade off the schedule and behind three other jobs. This is why we document and price change orders before the work happens rather than settling up at the end, and why selections get made early instead of during framing.",
  },
  {
    group: "What we build",
    q: "Do you do renovations or remodels?",
    a: "Not routine remodels - kitchens, bathrooms, flooring and similar single-room work are not what we are set up for, and you will get better service and a better price from a remodeler who does them every week. We do take on major renovations. 917 Burnet Street was a 1902 house taken down to its structure and rebuilt over six months, including new foundation piers, all new electrical and one hundred percent new plumbing.",
  },
  {
    group: "What we build",
    q: "Do you build entry-level or spec homes?",
    a: "No. We build custom and semi-custom homes, commercial and industrial projects, and small multifamily. We are not a volume builder and we do not build on speculation, which means we are usually the wrong choice if price per square foot is the only thing being compared.",
  },
  {
    group: "Working with us",
    q: "Is Luxterra licensed and insured?",
    a: "Texas does not issue a state general contractor license - no residential builder in Texas has one, and any builder telling you they are state-licensed is describing something that does not exist. What does exist: electrical, plumbing and HVAC are licensed at the state level, and those trades on our jobs hold their own current licenses. Luxterra carries $1,000,000 in general liability insurance, and contractors must be registered with San Antonio Development Services before the city will issue permits. We are happy to send our certificate of insurance on request.",
  },
  {
    group: "Working with us",
    q: "Who handles interior design and selections?",
    a: "Mi Hee Yoo leads interior design and selections in-house. Having that inside the company rather than coordinated across three separate firms is a large part of why selections stay on schedule and why the finished house looks like the one that was drawn.",
  },
  {
    group: "Working with us",
    q: "What happens after I get in touch?",
    a: "We follow up within one business day. The first conversation is about the site, what you want to build and the number you have in mind - not a sales pitch. If what you want and what you want to spend do not line up, we would rather tell you that in the first week than after you have paid for a full set of plans.",
  },
];

const GROUPS = ["Cost and timeline", "What we build", "Working with us"];

export default function FaqPage() {
  return (
    <main className="faq">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <section className="faq-hero">
        <p className="faq-kicker">Frequently asked questions</p>
        <h1>The questions people actually ask first.</h1>
        <p className="faq-lede">
          Cost, timeline, and whether we are who we say we are. Straight answers,
          including the ones that talk us out of projects we are not right for.
        </p>
      </section>

      {GROUPS.map((group) => (
        <section key={group} className="faq-group">
          <h2>{group}</h2>
          <div className="faq-list">
            {FAQS.filter((faq) => faq.group === group).map((faq) => (
              <article key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="faq-more">
        <h2>Question not here?</h2>
        <p>
          More specific answers live on the pages for each kind of project
          &mdash; <Link href="/build-on-your-lot">building on your own lot</Link>,{" "}
          <Link href="/custom-home-builder-san-antonio">custom homes</Link>,{" "}
          <Link href="/adu-builder-san-antonio">ADUs</Link>,{" "}
          <Link href="/commercial-contractor-san-antonio">commercial</Link> and{" "}
          <Link href="/industrial-build-outs-san-antonio">industrial work</Link>.
          Or just ask us directly.
        </p>
        <div className="faq-actions">
          <Link href="/quote" className="faq-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="faq-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      {/* <Breadcrumbs> already emits the BreadcrumbList markup, so this page
          only adds the FAQPage schema. Two BreadcrumbList blocks on one URL is
          a structured-data error. */}
      <JsonLd data={faqPageSchema(FAQS)} />
    </main>
  );
}
