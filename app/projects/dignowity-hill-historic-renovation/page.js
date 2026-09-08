// app/projects/dignowity-hill-historic-renovation/page.js
//
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import { PHONE_DISPLAY, PHONE_HREF } from "../../lib/business";
import "./dignowity.css";

export const metadata = {
  alternates: { canonical: "/projects/dignowity-hill-historic-renovation" },
  title: "Dignowity Hill Historic Renovation",
  description:
    "A 1902 San Antonio home in a historic district, fully renovated in six months: new foundation piers, all-new electrical and plumbing, restored windows.",
  openGraph: {
    title: "Dignowity Hill Historic Renovation | Luxterra Builders",
    description:
      "A historic San Antonio home taken back to the studs and rebuilt, minutes from downtown. Now Luxterra's model home.",
    url: "/projects/dignowity-hill-historic-renovation",
    images: [{ url: "/dignowity-front-elevation-twilight.jpg", width: 2000, height: 1342, alt: "Dignowity Hill historic renovation at twilight" }],
  },
};

const PHOTOS = [
  { src: "/dignowity-front-elevation-twilight.jpg", alt: "Dignowity Hill historic home renovation at twilight, San Antonio", w: 2000, h: 1342, group: "Exterior" },
  { src: "/dignowity-front-porch-detail.jpg", alt: "Restored front porch with arched openings and original leaded-glass door, Dignowity Hill, San Antonio", w: 1350, h: 1333, group: "Exterior" },
  { src: "/dignowity-porch-twilight.jpg", alt: "Wraparound porch seating at the Dignowity Hill house in the evening", w: 2000, h: 1342, group: "Exterior" },
  { src: "/dignowity-living-room.jpg", alt: "Open living room with built-in media wall at the Dignowity Hill house", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/dignowity-living-dining-open-plan.jpg", alt: "Open plan living and dining area with chandelier at the Dignowity Hill house", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/dignowity-dining-kitchen.jpg", alt: "Dining area looking through to the kitchen at the Dignowity Hill house", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/dignowity-kitchen-island.jpg", alt: "Kitchen with waterfall granite island and custom cabinetry at the Dignowity Hill house", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/dignowity-granite-detail.jpg", alt: "Close view of the waterfall granite island in the Dignowity Hill house kitchen", w: 2000, h: 1332, group: "Living and kitchen" },
  { src: "/dignowity-kitchen-sink-range.jpg", alt: "Kitchen island with farmhouse sink and range at the Dignowity Hill house", w: 2000, h: 1333, group: "Living and kitchen" },
  { src: "/dignowity-primary-bedroom.jpg", alt: "Primary bedroom at the Dignowity Hill house with natural light", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/dignowity-bedroom-pool-view.jpg", alt: "Bedroom overlooking the pool at the Dignowity Hill house", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/dignowity-primary-bath-stone.jpg", alt: "Primary bathroom with blue stone tile at the Dignowity Hill house", w: 2000, h: 1332, group: "Bedrooms and baths" },
  { src: "/dignowity-walk-in-shower.jpg", alt: "Walk-in shower with blue stone tile and brass fixtures at the Dignowity Hill house", w: 2000, h: 1332, group: "Bedrooms and baths" },
  { src: "/dignowity-double-vanity.jpg", alt: "Double vanity with granite countertop at the Dignowity Hill house", w: 2000, h: 1333, group: "Bedrooms and baths" },
  { src: "/dignowity-pool-twilight.jpg", alt: "Pool and rock waterfall lit at twilight at the Dignowity Hill house", w: 2000, h: 1342, group: "Outdoor" },
  { src: "/dignowity-pool-waterfall.jpg", alt: "Rock waterfall feature on the pool at the Dignowity Hill house", w: 2000, h: 1333, group: "Outdoor" },
  { src: "/dignowity-back-deck-twilight.jpg", alt: "Back deck and outdoor dining at the Dignowity Hill house in the evening", w: 2000, h: 1342, group: "Outdoor" },
];

const GROUPS = ["Exterior", "Living and kitchen", "Bedrooms and baths", "Outdoor"];

export default function DignowityHillPage() {
  return (
    <main className="dhr">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Dignowity Hill Renovation", href: "/projects/dignowity-hill-historic-renovation" },
        ]}
      />

      <section className="dhr-hero">
        <p className="dhr-kicker">Historic full renovation &middot; Custom pool &amp; spa &middot; Model home</p>
        <h1>Dignowity Hill Historic Renovation</h1>
        <p className="dhr-lede">
          A 1902 home taken back to the studs and rebuilt over six months &mdash;
          the porch, the proportions and the street presence kept, everything
          behind them new. 1,976 square feet, minutes from downtown, and the
          house we use to show people what our work actually looks like in
          person.
        </p>
        <dl className="dhr-facts">
          <div><dt>Location</dt><dd>Dignowity Hill, San Antonio</dd></div>
          <div><dt>Originally built</dt><dd>1902</dd></div>
          <div><dt>Size</dt><dd>1,976 sq ft</dd></div>
          <div><dt>Scope</dt><dd>Full historic renovation</dd></div>
          <div><dt>Build time</dt><dd>Six months</dd></div>
          <div><dt>Outdoor</dt><dd>Custom-built pool, spa and rock waterfall</dd></div>
          <div><dt>Historic district</dt><dd>Design review approved</dd></div>
          <div><dt>Status</dt><dd>Complete &mdash; Luxterra model home</dd></div>
        </dl>
      </section>

      <figure className="dhr-hero-image">
        <Image
          src="/dignowity-front-elevation-twilight.jpg"
          alt="Dignowity Hill historic home renovation at twilight, San Antonio"
          width={2000}
          height={1342}
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority
        />
      </figure>

      <section className="dhr-story">
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
          <p className="dhr-story-cta">
            <Link href="/quote">Arrange a visit &rarr;</Link>
          </p>
        </div>
      </section>


      <section className="dhr-found">
        <div className="dhr-found-inner">
          <h2>What we found when we opened it up</h2>
          <p className="dhr-found-lede">
            A house built in 1902 doesn&apos;t tell you everything up front. This
            is what was behind the walls at the Dignowity Hill house, and what we did about it.
            None of it shows in the photographs, and it is most of where the six
            months went.
          </p>

          <dl className="dhr-found-list">
            <div>
              <dt>The foundation needed more support than it had</dt>
              <dd>
                We brought in an engineer rather than guess. The report called for
                additional piers, so we added them before anything else went back
                in. Structure first, always &mdash; everything you see in these
                photos is sitting on that decision.
              </dd>
            </div>

            <div>
              <dt>We planned to keep the electrical. We couldn&apos;t.</dt>
              <dd>
                The intention was to reuse the existing service. Then we got
                underneath the house and saw how many cables had been run below it
                over the decades. Reusing that wasn&apos;t something we were willing
                to defend to an owner, so we replaced all of it &mdash; wiring and
                panels included. It cost more than the plan allowed. It was still
                the only answer.
              </dd>
            </div>

            <div>
              <dt>All the plumbing was replaced and inspected</dt>
              <dd>
                One hundred percent of it, not the accessible runs. In a house this
                age, patching supply lines just moves the failure somewhere you
                can&apos;t reach later.
              </dd>
            </div>

            <div>
              <dt>Nothing in the house was square</dt>
              <dd>
                A century of settling means no wall is plumb and no floor is level.
                That is a real problem when you are setting cabinets and
                full-height stone tile, where a sixteenth of an inch compounds
                across a run. We worked it through with the framers, the tile
                installers and the cabinet installer so the finished work reads
                straight even where the structure underneath it isn&apos;t. The
                kitchen and bathroom photos are the evidence.
              </dd>
            </div>

            <div>
              <dt>The original windows were restored, not replaced</dt>
              <dd>
                The property is in a designated historic district, so the
                renovation went through design review and the windows were
                restored. It was also the right call: the window rhythm is a large
                part of why the house still reads as a 1902 home from the street.
              </dd>
            </div>
          </dl>

          <p className="dhr-found-close">
            If you are weighing up an older house, this is the honest shape of it.
            Some of what you find will cost more than the plan allowed. What
            matters is whether your builder tells you early, prices it properly,
            and doesn&apos;t quietly take the cheaper way out where nobody would
            ever look.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section className="dhr-gallery" key={group}>
          <h2>{group}</h2>
          <div className="dhr-grid">
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

      <section className="dhr-cta">
        <h2>Planning a renovation or a custom build?</h2>
        <p>
          Come and see this one first. It is a great deal easier to describe what
          you want when you are standing in a finished example of it.
        </p>
        <div className="dhr-cta-actions">
          <Link href="/quote" className="dhr-btn-primary">Request a free consultation</Link>
          <a href={PHONE_HREF} className="dhr-btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
        <p className="dhr-back"><Link href="/projects">&larr; All projects</Link></p>
      </section>
    </main>
  );
}
