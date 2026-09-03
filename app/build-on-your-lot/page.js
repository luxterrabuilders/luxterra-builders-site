// app/build-on-your-lot/page.js
//
// TODO (Christian): two things that would make this page much stronger, and
// that I won't write for you because they have to be true:
//   1. A lot you looked at and advised someone NOT to buy, and why. One real
//      example beats every general statement on this page.
//   2. Whether you charge for a lot review, or do it as part of the
//      consultation. Say it plainly either way - people hesitate to ask.

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, serviceSchema } from "../lib/schema";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/business";
import "./build-on-your-lot.css";

export const metadata = {
  alternates: { canonical: "/build-on-your-lot" },
  title: "Build on Your Lot in San Antonio",
  description:
    "Already own land, or looking for it? Luxterra Builders reviews the site, tells you what it will realistically cost to build on, and builds the home. Serving San Antonio and the Hill Country.",
  openGraph: {
    title: "Build on Your Lot in San Antonio | Luxterra Builders",
    description:
      "What your lot will actually let you build, what it will cost, and who builds it. Talk to us before you buy.",
    url: "/build-on-your-lot",
  },
};

const FAQS = [
  {
    q: "Do I need plans before I talk to you?",
    a: "No. Most people come to us with a lot, a rough idea and a number in mind. That is enough to start. Talking early usually saves money, because plans drawn without a builder involved often describe a house that costs more than the owner intended to spend.",
  },
  {
    q: "Can you look at a lot before I buy it?",
    a: "Yes, and we would rather you asked. Site conditions are the single largest swing in a build budget, and they are far cheaper to discover before closing than after. If a lot is going to be expensive to build on, you should know that while you can still walk away.",
  },
  {
    q: "What makes one lot more expensive to build on than another?",
    a: "Access for equipment, slope and how much the site has to be cut or filled, soil and what the foundation has to do about it, how far utilities have to run, whether it is on sewer or needs septic, drainage and floodplain, tree preservation, and any deed restrictions or HOA requirements. Two lots on the same street can differ by a large amount once all of that is priced.",
  },
  {
    q: "Do you build outside San Antonio?",
    a: "Yes. We build across San Antonio and the surrounding Hill Country, including Boerne, New Braunfels, Bulverde, Spring Branch, Canyon Lake, La Vernia, Schertz and Cibolo. Which authority reviews your permit depends on where the lot sits, and we handle that either way.",
  },
];

const CHECKS = [
  { t: "Access and staging", d: "Whether trucks, concrete and equipment can physically get to the build area, and where materials can be staged." },
  { t: "Slope and site work", d: "How much cut and fill the site needs, and what that does to the foundation, drainage and retaining." },
  { t: "Soil and foundation", d: "What the ground will support, and what kind of foundation that implies. This is where a cheap lot often stops being cheap." },
  { t: "Utilities", d: "How far water, sewer, electric and gas have to run, and who pays for the extension." },
  { t: "Sewer or septic", d: "Outside city limits this is often septic, which needs its own area, soil testing and permit." },
  { t: "Drainage and floodplain", d: "Where water goes in a heavy rain, and whether any part of the lot is mapped as floodplain." },
  { t: "Trees and clearing", d: "Which trees are protected, what can come out, and what preservation requires during construction." },
  { t: "Restrictions", d: "Setbacks, deed restrictions, HOA architectural requirements, and historic design review where it applies." },
];

export default function BuildOnYourLotPage() {
  return (
    <main className="boyl">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Build on Your Lot", href: "/build-on-your-lot" },
        ]}
      />

      <section className="boyl-hero">
        <p className="boyl-kicker">Build on your lot &middot; San Antonio &amp; the Hill Country</p>
        <h1>You have the land. The question is what it will really cost to build on it.</h1>
        <p className="boyl-lede">
          Building on your own lot is the best value in custom construction and
          the easiest place to get an expensive surprise. The house is the
          predictable part. The site is where budgets move &mdash; and almost all
          of it is knowable before you commit.
        </p>
        <div className="boyl-actions">
          <Link href="/quote" className="boyl-btn-primary">Get a feasibility conversation</Link>
          <a href={PHONE_HREF} className="boyl-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      <section className="boyl-paths">
        <article>
          <p className="boyl-path-tag">If you already own the lot</p>
          <h2>Start with what the site allows</h2>
          <p>
            We look at the property, talk through what you want to build, and
            come back with a realistic budget range and the constraints that
            matter. If the house you have in mind doesn&apos;t fit the site or the
            number, you find that out now &mdash; not after paying for a full set
            of plans.
          </p>
          <Link href="/quote">Tell us about your lot &rarr;</Link>
        </article>
        <article>
          <p className="boyl-path-tag">If you&apos;re still looking for land</p>
          <h2>Talk to us before you buy</h2>
          <p>
            Two lots at the same price can be tens of thousands apart once you
            price the site work, the utility runs and the foundation. A builder
            walking a lot with you before closing costs nothing like what a bad
            lot costs afterwards.
          </p>
          <Link href="/quote">Ask about a lot you&apos;re considering &rarr;</Link>
        </article>
      </section>

      <section className="boyl-checks">
        <h2>What we look at on a lot</h2>
        <p className="boyl-checks-lede">
          Not an exhaustive list, and not every item matters on every site. But
          this is where the cost differences between two lots almost always come
          from.
        </p>
        <div className="boyl-checks-grid">
          {CHECKS.map((c) => (
            <div key={c.t}>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
        <p className="boyl-checks-note">
          Rules differ depending on whether the lot is inside San Antonio city
          limits, in unincorporated Bexar County, or in a Hill Country
          municipality with its own requirements. We confirm what applies to your
          specific property rather than assuming.
        </p>
      </section>

      <section className="boyl-proof">
        <h2>What that looks like finished</h2>
        <div className="boyl-proof-grid">
          <Link href="/projects/917-burnet" className="boyl-proof-card">
            <Image
              src="/917-burnet-front-elevation-twilight.jpg"
              alt="917 Burnet Street historic home renovation at twilight, San Antonio"
              width={2000}
              height={1342}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div>
              <p className="boyl-proof-tag">Historic renovation + custom pool &amp; spa</p>
              <h3>917 Burnet Street</h3>
              <p>A 1902 house rebuilt in six months, including everything the site threw at us.</p>
            </div>
          </Link>
          <Link href="/projects/kings-modern-residence" className="boyl-proof-card">
            <Image
              src="/kings-01.jpg"
              alt="Kings Modern Residence exterior in San Antonio"
              width={1600}
              height={1066}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div>
              <p className="boyl-proof-tag">Custom home + ADU</p>
              <h3>Kings Modern Residence</h3>
              <p>A custom home with a dedicated ADU on a single San Antonio lot.</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="boyl-process">
        <h2>How the build runs from there</h2>
        <p>
          Discovery, feasibility and budgeting, design and engineering,
          permitting, construction, final walkthrough &mdash; with weekly updates
          and change orders documented and priced before the work happens.
        </p>
        <Link href="/process">See the full process &rarr;</Link>
      </section>

      <section className="boyl-faq">
        <h2>Common questions</h2>
        <div className="boyl-faq-list">
          {FAQS.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="boyl-cta">
        <h2>Tell us about the lot</h2>
        <p>
          Address or general area is enough to start. We&apos;ll tell you what we
          see and what it would take to build there.
        </p>
        <div className="boyl-actions boyl-actions-center">
          <Link href="/quote" className="boyl-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="boyl-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      <JsonLd data={faqPageSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: "Build on Your Lot Construction",
          description:
            "Luxterra Builders reviews your lot, prepares a realistic construction budget, and builds the home, across San Antonio and the Texas Hill Country.",
          path: "/build-on-your-lot",
        })}
      />
    </main>
  );
}
