// app/about/page.js
//
// Written from Christian's own account. Every fact here came from him.
//
// TODO (Christian):
//   1. The hero photo is cropped from a picture Christian sent, to show him
//      and the framing only. /public/christian-hernandez-couple.jpg is the
//      original including his wife - swap it in only if she is happy to
//      appear on a commercial site.
//   2. Confirm the broker line below. You are a licensed Texas real estate
//      broker, which is unusual and useful for buyers evaluating land - but
//      builder-plus-broker has disclosure implications I am not qualified to
//      advise on. Check with your attorney before this goes live.

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from "../lib/business";
import "./about.css";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About Christian Hernandez",
  description:
    "Christian Hernandez founded Luxterra Builders in San Antonio. He worked unpaid for a year and a half to learn to build properly before taking on his first custom home. Here's the whole story.",
  openGraph: {
    title: "About Christian Hernandez | Luxterra Builders",
    description:
      "How a curiosity about how things get built turned into a San Antonio custom home builder.",
    url: "/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Hernandez",
  jobTitle: "Founder and Builder",
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/about`,
  telephone: "+12542902482",
  email: "info@luxterrabuilders.com",
  knowsAbout: [
    "Custom home construction",
    "Historic renovation",
    "ADU construction",
    "Multifamily construction",
    "Commercial build-outs",
    "Industrial build-outs",
  ],
};

export default function AboutPage() {
  return (
    <main className="about">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-kicker">About</p>
          <h1>The builder you&apos;ll actually be working with.</h1>
          <p className="about-lede">
            Luxterra Builders is Christian Hernandez. When you call the number on
            this site, that is who answers, and that is who runs your job. Here is
            how he got here, because you should know who you are hiring.
          </p>
        </div>
        <figure className="about-hero-photo">
          <Image
            src="/christian-hernandez.jpg"
            alt="Christian Hernandez, founder of Luxterra Builders, on site in front of a house under framing"
            width={430}
            height={1235}
            sizes="(max-width: 860px) 100vw, 340px"
            priority
          />
          <figcaption>Christian Hernandez, on site.</figcaption>
        </figure>
      </section>

      <section className="about-story">
        <h2>How it started</h2>
        <p>
          Christian grew up in Colombia and was the kind of child who stared at
          bridges. Not the view &mdash; the structure. How a thing that big stays
          up.
        </p>
        <p>
          At seventeen he was working in a restaurant in Columbia, South
          Carolina, where he became friends with a man who owned a construction
          company. The friend offered him a good deal on a house. Christian
          applied the moment he turned eighteen and was declined &mdash; no
          credit, no history, nothing to lend against. He told his roommate about
          it instead. His roommate was approved, and they moved in together.
        </p>
        <p>
          That could have been the end of it. Instead Christian kept turning up
          around the construction, watching how the house came together, and
          eventually asked his friend for work. He started on the electrical
          side, learning the trade from the inside.
        </p>

        <h2>Back to San Antonio, the long way round</h2>
        <p>
          Three or four months later he moved back to San Antonio, where his
          family is. He asked his mother whether she knew anyone in construction
          or real estate, and she introduced him to her agent.
        </p>
        <p>
          He had no idea what a real estate agent was. Colombia doesn&apos;t have
          them in the way the United States does. So he did what the agent told
          him to do, step by step, and came out the other side with a license.
        </p>
        <p>
          He spent the next four to five years at Keller Williams selling houses.
          That period matters more than it sounds. Selling houses teaches you
          what buyers actually notice, what they regret, and what they will pay
          for &mdash; and it let him save.
        </p>

        <h2>Learning to build, properly</h2>
        <p>
          In 2020 he built a duplex with friends. It went well, and it would have
          been easy to call himself a builder on the strength of it.
        </p>
        <p className="about-pullquote">
          Instead, he went to another builder he knew and asked to work for free
          for as long as it took to learn the job properly. That turned into a
          year and a half, and a lot of houses.
        </p>
        <p>
          In 2022 he built his first custom home. He earned his broker&apos;s
          license at twenty-four. Today he runs both a brokerage and a
          construction company &mdash; which is why, when someone asks him to look
          at a lot before they buy it, he can actually help.
        </p>
      </section>

      <section className="about-meaning">
        <div>
          <h2>What &ldquo;owner-level&rdquo; means</h2>
          <p>
            It is a phrase every builder uses, so here is the specific version:
            Christian manages every house as though he is the one who will live
            in it. Every detail, the whole way through &mdash; not a walkthrough
            at the end.
          </p>
          <p>
            Practically, that means the decisions that cost money get made the
            expensive way when the cheap way would not survive scrutiny. At{" "}
            <Link href="/projects/917-burnet">917 Burnet</Link>, the plan was to
            keep the existing electrical. What was under the house said otherwise,
            so all of it was replaced, panels included. That is what the phrase
            is supposed to mean.
          </p>
        </div>
        <div>
          <h2>The name</h2>
          <p>
            <strong>Lux</strong> for luxury. <strong>Terra</strong> for land. The
            aim is custom homes with real quality that are still standing, and
            still good, a long time from now.
          </p>
          <h2>What we build &mdash; and don&apos;t</h2>
          <p>
            Custom homes, ADUs and guest suites, duplexes and small multifamily,
            commercial build-outs, and industrial, warehouse and lab space.
          </p>
          <p>
            We don&apos;t take entry-level or spec-grade work. It is not a
            judgement about those houses; it is that our process &mdash;
            engineering the foundation properly, replacing what should be
            replaced, finishing to a standard you would want in your own home
            &mdash; does not fit that budget, and pretending otherwise helps
            nobody.
          </p>
          <p>
            We also don&apos;t take routine remodels &mdash; a kitchen refresh, a
            bathroom swap, a list of small jobs. We will take the right
            renovation: a house worth saving, taken far enough back that it comes
            out genuinely right.{" "}
            <Link href="/projects/917-burnet">917 Burnet</Link> is what the right
            one looks like. If you&apos;re not sure which yours is, ask &mdash;
            we&apos;ll tell you honestly, including when the answer is that you
            want a different contractor.
          </p>
        </div>
      </section>

      <section className="about-facts">
        <h2>The details</h2>
        <dl>
          <div><dt>Founded</dt><dd>Luxterra Builders, San Antonio</dd></div>
          <div><dt>First custom home</dt><dd>2022</dd></div>
          <div><dt>Insurance</dt><dd>$1,000,000 general liability</dd></div>
          <div><dt>Also</dt><dd>Licensed Texas real estate broker</dd></div>
          <div><dt>Service area</dt><dd>San Antonio and the Texas Hill Country</dd></div>
          <div><dt>Model home</dt><dd><Link href="/projects/917-burnet">917 Burnet Street</Link> &mdash; visits by appointment</dd></div>
        </dl>
      </section>

      <section className="about-cta">
        <h2>Come and see the work</h2>
        <p>
          The fastest way to judge a builder is to stand in something they
          finished. Our model home is open by appointment, and you will be shown
          around by the person who built it.
        </p>
        <div className="about-cta-actions">
          <Link href="/quote" className="about-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="about-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </section>

      <JsonLd data={personSchema} />
    </main>
  );
}
