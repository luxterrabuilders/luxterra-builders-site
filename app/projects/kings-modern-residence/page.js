// app/projects/kings-modern-residence/page.js
//
// Rebuilt 8 Sep 2026. The previous version never imported its stylesheet, so
// it rendered with no layout at all - text flush to the left edge, labels
// running into their values, images breaking out of the viewport.
//
// Everything written here is described from the photographs themselves. The
// two dwellings really are finished in different palettes: the main house is
// light oak, white and brass; the ADU is navy, dark tile and brass. That
// contrast is the story of the project, so the galleries are grouped to show it.
//
// All figures confirmed by Christian on 8 Sep 2026:
//   - Main house 1,358 sqft, 3 bed / 2 full bath. ADU 433 sqft, 1 bed / 1 full
//     bath. Completed 2024.
//   - The pool was existing: it was fully renovated and the spa was added.
//     Outdoor living was in Luxterra's scope as well. The page says "renovated"
//     rather than "built" for exactly that reason.
//   - Both units operate as short-term rentals today.
//
// Do not add revenue, occupancy or nightly-rate claims to this page. He has not
// given those numbers and they would need to be substantiated.

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema } from "../../lib/schema";
import { PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "../../lib/business";
import "./kings.css";

export const metadata = {
  alternates: { canonical: "/projects/kings-modern-residence" },
  title: "Kings Modern Residence: Custom Home + ADU",
  description:
    "A 1,358 sq ft custom home and a fully independent 433 sq ft ADU on one San Antonio lot, completed 2024. Both units run as short-term rentals. Built by Luxterra Builders.",
  openGraph: {
    title: "Kings Modern Residence | Luxterra Builders",
    description:
      "Custom home and a fully independent ADU on a single San Antonio lot, built ground-up by Luxterra Builders.",
    url: "/projects/kings-modern-residence",
    images: [{ url: "/kings-01.jpg" }],
  },
};

const FACTS = [
  ["Project type", "Custom home + detached ADU"],
  ["Completed", "2024"],
  ["Main house", "1,358 sq ft \u00b7 3 bed / 2 bath"],
  ["ADU", "433 sq ft \u00b7 1 bed / 1 bath"],
  ["Location", "San Antonio, Texas"],
  ["Scope", "Ground-up build, pool renovation and new spa, outdoor living, interior finishes"],
];

const GALLERIES = [
  {
    title: "The main house",
    blurb:
      "Board-and-batten outside, light oak and white inside, with brass carried through the kitchen, the bar and the bathrooms.",
    shots: [
      ["/kings-02.jpg", "Covered front porch with dark stained columns and a black entry door, Kings Modern Residence, San Antonio"],
      ["/kings-05.jpg", "Open living room with a linear fireplace, mounted television and coffered ceiling detail"],
      ["/kings-06.jpg", "Dining area open to the living room, with a linear glass pendant over the table"],
      ["/kings-07.jpg", "Main kitchen with white cabinetry, brass hardware and a patterned dark tile backsplash"],
      ["/kings-18.jpg", "Brass farmhouse sink set against the dark patterned backsplash in the main kitchen"],
      ["/kings-09.jpg", "Detail of the textured glass and brass linear pendant above the dining table"],
      ["/kings-19.jpg", "Built-in coffee bar in navy cabinetry with brass pulls and open shelving"],
      ["/kings-14.jpg", "Guest bedroom with two windows, a ceiling fan and light oak flooring"],
      ["/kings-15.jpg", "Bedroom with a built-in desk run and concealed LED lighting"],
      ["/kings-17.jpg", "Full bathroom with a double vanity, white cabinetry and brass fixtures"],
      ["/kings-16.jpg", "Black marble shower surround with a recessed niche"],
      ["/kings-20.jpg", "Full-size washer and dryer set into a finished laundry closet"],
    ],
  },
  {
    title: "The ADU",
    blurb:
      "A genuinely separate home rather than a converted room: its own kitchen, its own full bath, its own entry - and a completely different palette of navy, dark tile and brass.",
    shots: [
      ["/kings-32.jpg", "ADU sleeping area opening directly onto its own kitchen, San Antonio accessory dwelling unit"],
      ["/kings-29.jpg", "ADU kitchen with white cabinetry, stainless range and a navy accent wall"],
      ["/kings-31.jpg", "ADU bedroom with navy walls and built-in shelving"],
      ["/kings-30.jpg", "Farmhouse sink and pull-out storage in the ADU kitchen"],
      ["/kings-34.jpg", "ADU bathroom with a dark tiled shower and a backlit mirror"],
      ["/kings-35.jpg", "ADU vanity with a vessel basin, stone counter and backlit mirror"],
    ],
  },
  {
    title: "Pool and outdoor living",
    blurb:
      "The pool was already here. We renovated it completely and added the spa, then built the outdoor living around it - a covered patio under the mature oak, an outdoor kitchen, and lighting that makes the space work after dark.",
    shots: [
      ["/kings-22.jpg", "Pool running the length of the lot beneath a mature oak, with the house lit at dusk"],
      ["/kings-21.jpg", "Pool and spa with the main house and ADU lit at twilight"],
      ["/kings-27.jpg", "Covered patio strung with festoon lighting looking across the pool at dusk"],
      ["/kings-28.jpg", "Wide view of the pool, patio and mature oak between the two buildings"],
      ["/kings-25.jpg", "Outdoor dining table set for six beside the pool"],
      ["/kings-03.jpg", "Covered side porch looking out toward the street at dusk"],
    ],
  },
];

export default function KingsModernResidencePage() {
  return (
    <main className="kings">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Kings Modern Residence", href: "/projects/kings-modern-residence" },
        ]}
      />

      <section className="kings-hero">
        <p className="kings-kicker">Custom home &middot; Detached ADU &middot; Completed 2024</p>
        <h1>Kings Modern Residence</h1>
        <p className="kings-lede">
          Two complete homes on one San Antonio lot, finished in 2024. A 1,358
          square foot custom house at the front, a fully independent 433 square
          foot ADU behind it, and a renovated pool and spa between the two. Both
          units operate as short-term rentals today &mdash; which is the clearest
          argument we can make for building a second dwelling properly.
        </p>
        <dl className="kings-facts">
          {FACTS.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <figure className="kings-hero-image">
        <Image
          src="/kings-01.jpg"
          alt="Front elevation of Kings Modern Residence at twilight, a board-and-batten custom home in San Antonio"
          width={1600}
          height={1066}
          sizes="100vw"
          priority
        />
      </figure>

      <section className="kings-story">
        <div>
          <h2>Two homes, deliberately not matching</h2>
          <p>
            The main house is light: white oak floors, white cabinetry, brass
            fixtures, a dark patterned backsplash as the one strong note. The
            ADU is the opposite &mdash; navy walls, dark tile, backlit mirrors.
          </p>
          <p>
            That was the point. When a second unit is finished as a slightly
            cheaper copy of the main house, it reads like an afterthought and it
            is valued like one. Giving it its own character makes it feel like
            somewhere you would choose to live rather than somewhere you were
            put.
          </p>
        </div>
        <div>
          <h2>433 square feet that earns its own living</h2>
          <p>
            The ADU is one bedroom and one full bathroom in 433 square feet, with
            its own kitchen and its own entrance. Both it and the main house are
            listed as short-term rentals today, which is the part worth paying
            attention to: the second dwelling is not storage and it is not a
            spare room. It is a second income.
          </p>
          <p>
            That only works because it was built as a real home. A detached unit
            with a proper kitchen, a full bath and its own door can take a tenant,
            a guest or family without anyone walking through anyone else&apos;s
            living room. The cost difference between that and a glorified guest
            room is smaller than most people expect. The difference in what it is
            worth afterwards is not.
          </p>
          <p className="kings-story-cta">
            <Link href="/adu-builder-san-antonio">More on building an ADU in San Antonio &rarr;</Link>
          </p>
        </div>
      </section>

      {GALLERIES.map((g) => (
        <section className="kings-gallery" key={g.title}>
          <h2>{g.title}</h2>
          <p className="kings-gallery-blurb">{g.blurb}</p>
          <div className="kings-grid">
            {g.shots.map(([src, alt]) => (
              <figure key={src}>
                <Image src={src} alt={alt} width={1600} height={1066} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="kings-cta">
        <h2>Thinking about a custom home, an ADU, or both?</h2>
        <p>
          Tell us about the lot. If it will take a second dwelling, that is worth
          knowing before you design the first one &mdash; it changes where the
          house sits, where the utilities run and where the driveway goes. It is
          far cheaper to plan for an ADU than to retrofit one.
        </p>
        <div className="kings-cta-actions">
          <Link href="/quote" className="kings-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="kings-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
        <p className="kings-back"><Link href="/projects">&larr; All projects</Link></p>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Kings Modern Residence",
          description:
            "A ground-up custom home with a fully independent detached ADU on a single San Antonio lot, built by Luxterra Builders.",
          url: `${SITE_URL}/projects/kings-modern-residence`,
          image: `${SITE_URL}/kings-01.jpg`,
          creator: { "@id": `${SITE_URL}/#business` },
        }}
      />
    </main>
  );
}
