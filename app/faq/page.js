// app/faq/page.js
//
// The eight service pages already carry their own FAQs. This hub deliberately
// does NOT repeat them - it answers the three questions those pages dodge and
// that every caller actually asks first: what does it cost, how long does it
// take, and are you legitimate. Those are also the questions ChatGPT and AI
// Overviews get asked about builders, so they are worth owning in one place.
//
// The pricing figures come from app/lib/business.js, which is the single
// source of truth for them. Do not hardcode a number here.
//
// Everything else on this page was confirmed by Christian on 8 Sep 2026:
// semi-custom ships with a set upgrade package while custom means the owner
// chooses every selection; Luxterra is registered as a contractor with San
// Antonio Development Services; and he refers clients to construction lenders
// rather than lending himself.

import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema } from "../lib/schema";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  PRICE_SEMI_CUSTOM_PSF,
  PRICE_CUSTOM_PSF_RANGE,
  PRICE_INCLUDES,
  PRICE_EXCLUDES,
} from "../lib/business";
import "./faq.css";

export const metadata = {
  alternates: { canonical: "/faq" },
  title: "Frequently Asked Questions",
  description:
    "What it costs to build with Luxterra Builders, how long a custom home takes in San Antonio, and how licensing and insurance really work in Texas.",
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
    a: `Semi-custom homes start at ${PRICE_SEMI_CUSTOM_PSF} per square foot. Custom homes generally run ${PRICE_CUSTOM_PSF_RANGE} per square foot depending on finish level. Those figures are turnkey for the construction itself - ${PRICE_INCLUDES} are in the number, not added afterwards. They do not include ${PRICE_EXCLUDES}, which are separate. Treat any per-square-foot figure as a starting point rather than a quote: the same house costs different amounts on different lots, because site work, foundation requirements and utility runs move with the property.`,
  },
  {
    group: "Cost and timeline",
    q: "What is the difference between semi-custom and custom?",
    a: "A semi-custom home comes with a set package of upgrades already included, so most of the specification is settled before you start and the budget is more predictable. On a custom home you choose every selection and every upgrade yourself. The construction standard is the same either way - the difference is how many decisions are yours, and how far the finish level can move the final number.",
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
    a: "Not routine remodels - kitchens, bathrooms, flooring and similar single-room work are not what we are set up for, and you will get better service and a better price from a remodeler who does them every week. We do take on major renovations. The Dignowity Hill house was a 1902 house taken down to its structure and rebuilt over six months, including new foundation piers, all new electrical and one hundred percent new plumbing.",
  },
  {
    group: "What we build",
    q: "Do you build entry-level or spec homes?",
    a: "No. We build custom and semi-custom homes, commercial and industrial projects, and small multifamily. We are not a volume builder and we do not build on speculation, which means we are usually the wrong choice if price per square foot is the only thing being compared.",
  },
  {
    group: "Working with us",
    q: "Is Luxterra licensed and insured?",
    a: "Texas does not issue a state general contractor license - no residential builder in Texas has one, and any builder telling you they are state-licensed is describing something that does not exist. What does exist: electrical, plumbing and HVAC are licensed at the state level, and those trades on our jobs hold their own current licenses. Luxterra carries $1,000,000 in general liability insurance, and is registered as a contractor with San Antonio Development Services, which the city requires before it will issue a permit. We are happy to send our certificate of insurance on request.",
  },
  {
    group: "Working with us",
    q: "Can you help with financing?",
    a: "We do not lend, but we can introduce you to construction lenders who write this kind of loan regularly. A construction loan does not work like a normal mortgage - it funds in stages against work actually completed, and it is inspected along the way - so going to a lender who does them routinely saves a lot of friction. Ask and we will point you at the right people.",
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
