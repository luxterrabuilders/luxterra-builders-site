// app/projects/917-burnet/page.js
//
// TODO (Christian): I wrote only what the photographs and the address
// actually show. These would make the page much stronger, and I won't
// invent any of them:
//   1. Square footage, and the year the house was originally built.
//   2. How long the renovation took, start to finish.
//   3. What the house threw at you once you opened it up - foundation,
//      framing, knob-and-tube, whatever it was. The problems you solved are
//      the most persuasive part of a renovation story and nobody else can
//      write them.
//   4. Whether the property sits in a designated historic district, and
//      whether that meant a design review. Do not claim this until checked.
//   5. Confirm how visits work before we publish times - the page currently
//      says "by appointment", which also matches the Google listing.

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import { PHONE_DISPLAY, PHONE_HREF } from "../../lib/business";
import "./burnet-917.css";

export const metadata = {
  alternates: { canonical: "/projects/917-burnet" },
  title: "917 Burnet Street \u2013 Historic Renovation, Custom Pool & Spa",
  description:
    "A full historic renovation at 917 Burnet Street in San Antonio: restored exterior, open-plan interior, waterfall granite kitchen, stone baths, and a pool with a rock waterfall. Luxterra's model home.",
  openGraph: {
    title: "917 Burnet Street \u2013 Historic Renovation, Custom Pool & Spa | Luxterra Builders",
    description:
      "A historic San Antonio home taken back to the studs and rebuilt, minutes from downtown. Now Luxterra's model home.",
    url: "/projects/917-burnet",
    images: [{ url: "/917-burnet-front-elevation-twilight.jpg", width: 2000, height: 1342, alt: "917 Burnet Street at twilight" }],
  },
};

const PHOTOS = [
  { src: "/917-burnet-front-elevation-twilight.jpg", alt: "917 Burnet Street historic home renovation at twilight, San Antonio", w: 2000, h: 1342, group: "Exterior" },
  { src: "/917-burnet-front-elevation-day.jpg", alt: "Front elevation of the restored 917 Burnet Street home in San Antonio", w: 2000, h: 1125, group: "Exterior" },
  { src: "/917-burnet-front-porch-detail.jpg", alt: "Restored front porch and original 917 house number at 917 Burnet Street", w: 2000, h: 1333, group: "Exterior" },
  { src: "/917-burnet-porch-twilight.jpg", alt: "Wraparound porch seating at 917 Burnet Street in the evening", w: 2000, h: 1342, group: "Exterior" },
  { src: "/917-burnet-living-room.jpg", alt: "Open living room with built-in media wall at 917 Burnet Street", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/917-burnet-living-dining-open-plan.jpg", alt: "Open plan living and dining area with chandelier at 917 Burnet Street", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/917-burnet-dining-kitchen.jpg", alt: "Dining area looking through to the kitchen at 917 Burnet Street", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/917-burnet-kitchen-island.jpg", alt: "Kitchen with waterfall granite island and custom cabinetry at 917 Burnet Street", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/917-burnet-granite-detail.jpg", alt: "Close view of the waterfall granite island in the 917 Burnet Street kitchen", w: 2000, h: 1332, group: "Living and kitchen" },
  { src: "/917-burnet-kitchen-sink-range.jpg", alt: "Kitchen island with farmhouse sink and range at 917 Burnet Street", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/917-burnet-primary-bedroom.jpg", alt: "Primary bedroom at 917 Burnet Street with natural light", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/917-burnet-bedroom-pool-view.jpg", alt: "Bedroom overlooking the pool at 917 Burnet Street", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/917-burnet-primary-bath-stone.jpg", alt: "Primary bathroom with blue stone tile at 917 Burnet Street", w: 2000, h: 1332, group: "Bedrooms and baths" },
  { src: "/917-burnet-walk-in-shower.jpg", alt: "Walk-in shower with blue stone tile and brass fixtures at 917 Burnet Street", w: 2000, h: 1332, group: "Bedrooms and baths" },
  { src: "/917-burnet-double-vanity.jpg", alt: "Double vanity with granite countertop at 917 Burnet Street", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/917-burnet-pool-twilight.jpg", alt: "Pool and rock waterfall lit at twilight at 917 Burnet Street", w: 2000, h: 1342, group: "Outdoor" },
  { src: "/917-burnet-pool-waterfall.jpg", alt: "Rock waterfall feature on the pool at 917 Burnet Street", w: 2000, h: 1333, group: "Outdoor" },
  { src: "/917-burnet-back-deck-twilight.jpg", alt: "Back deck and outdoor dining at 917 Burnet Street in the evening", w: 2000, h: 1342, group: "Outdoor" },
  { src: "/917-burnet-aerial-downtown.jpg", alt: "Aerial view of 917 Burnet Street with the downtown San Antonio skyline", w: 2000, h: 1125, group: "Outdoor" },
];

const GROUPS = ["Exterior", "Living and kitchen", "Bedrooms and baths", "Outdoor"];

export default function Burnet917Page() {
  return (
    <main className="b917">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "917 Burnet Street", href: "/projects/917-burnet" },
        ]}
      />

      <section className="b917-hero">
        <p className="b917-kicker">Historic full renovation &middot; Custom pool &amp; spa &middot; Model home</p>
        <h1>917 Burnet Street</h1>
        <p className="b917-lede">
          A 1902 home taken back to the studs and rebuilt over six months &mdash;
          the porch, the proportions and the street presence kept, everything
          behind them new. 1,976 square feet, minutes from downtown, and the
          house we use to show people what our work actually looks like in
          person.
        </p>
        <dl className="b917-facts">
          <div><dt>Location</dt><dd>917 Burnet Street, San Antonio</dd></div>
          <div><dt>Originally built</dt><dd>1902</dd></div>
          <div><dt>Size</dt><dd>1,976 sq ft</dd></div>
          <div><dt>Scope</dt><dd>Full historic renovation</dd></div>
          <div><dt>Build time</dt><dd>Six months</dd></div>
          <div><dt>Outdoor</dt><dd>Custom-built pool, spa and rock waterfall</dd></div>
          <div><dt>Status</dt><dd>Complete &mdash; Luxterra model home</dd></div>
        </dl>
      </section>

      <figure className="b917-hero-image">
        <Image
          src="/917-burnet-front-elevation-twilight.jpg"
          alt="917 Burnet Street historic home renovation at twilight, San Antonio"
          width={2000}
          height={1342}
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority
        />
      </figure>

      <section className="b917-story">
        <div>
          <h2>Keeping the house, replacing everything else</h2>
          <p>
            A house built in 1902 has details a new build can&apos;t easily
            reproduce &mdash; the depth of the porch, the window rhythm, the way
            the roof meets the street. Those were worth keeping. Everything
            behind them, over six months, was replaced.
          </p>
          <p>
            Inside, the plan opens up the way people actually live now &mdash;
            kitchen, dining and living reading as one room, with a waterfall
            granite island as the centre of it. The bathrooms are finished in
            full-height stone. The systems behind the walls are new.
          </p>
        </div>
        <div>
          <h2>Why it&apos;s our model home</h2>
          <p>
            Finish quality is the hardest thing to judge from photographs. Tile
            layout, how a cabinet run meets a wall, whether a mitred stone edge
            lines up &mdash; you have to stand in the room. So rather than ask
            you to take our word for it, we kept this house to show.
          </p>
          <p>
            If you&apos;re planning a build or a major renovation, you can walk
            it by appointment and see the level of finish in person before you
            commit to anything.
          </p>
          <p>
            The pool, spa and rock waterfall in the back yard are ours too
            &mdash; designed and built as part of the same project rather than
            subcontracted out afterwards, which is why the deck, the coping and
            the house all line up the way they do.
          </p>
          <p className="b917-story-cta">
            <Link href="/quote">Arrange a visit &rarr;</Link>
          </p>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section className="b917-gallery" key={group}>
          <h2>{group}</h2>
          <div className="b917-grid">
            {PHOTOS.filter((p) => p.group === group).map((photo) => (
              <figure key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 520px"
                />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="b917-cta">
        <h2>Planning a renovation or a custom build?</h2>
        <p>
          Come and see this one first. It is a great deal easier to describe what
          you want when you are standing in a finished example of it.
        </p>
        <div className="b917-cta-actions">
          <Link href="/quote" className="b917-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="b917-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
        <p className="b917-back"><Link href="/projects">&larr; All projects</Link></p>
      </section>
    </main>
  );
}
