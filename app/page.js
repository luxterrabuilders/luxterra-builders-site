// app/page.js
import "./home.css";
import Image from "next/image";
import {
  REVIEWS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_BUSINESS_PROFILE_URL,
} from "./lib/business";

export const metadata = {
  alternates: { canonical: "/" },
  // Next.js only applies the layout's title template to CHILD segments, and
  // the homepage shares the root segment with the layout - so this title has
  // to carry the brand itself or the homepage ships without it.
  title: "San Antonio Design–Build Contractor | Luxterra Builders",
  description:
    "Custom homes, commercial, and multifamily projects in San Antonio with clear budgets, realistic schedules, and weekly communication.",
};

export default function HomePage() {
  return (
    <main className="home">
      {/* HERO */}
<section className="hero">
  <div className="hero-grid">
    {/* LEFT – TEXT */}
    <div className="hero-text">
      <p className="hero-kicker">San Antonio • Design–Build Contractor</p>

      <h1 className="hero-title">
        Building custom homes and investment properties with owner-level thinking.
      </h1>

      <p className="hero-sub">
        Custom homes, ADUs, and small multifamily projects delivered with clear budgets,
        realistic schedules, and weekly communication—so you don&apos;t have to babysit
        the build.
      </p>

      <div className="hero-ctas">
        <a href="/quote" className="hero-cta hero-cta-primary">
          Get a Free Quote
        </a>
        <a href="/services" className="hero-cta hero-cta-secondary">
          View Services
        </a>
      </div>

      <div className="hero-metrics">
        <div className="hero-metric">
          <span className="hero-metric-label">Experience</span>
          <span className="hero-metric-value">5+ years</span>
        </div>
        <div className="hero-metric">
          <span className="hero-metric-label">Project types</span>
          <span className="hero-metric-value">
            Custom homes, ADUs, small multifamily, industrial
          </span>
        </div>
        <div className="hero-metric">
          <span className="hero-metric-label">Service area</span>
          <span className="hero-metric-value">San Antonio &amp; nearby cities</span>
        </div>
      </div>
    </div>

    {/* RIGHT – LOGO / VISUAL (keep using your existing styles) */}
    <div className="hero-visual">
      <div className="hero-logo-card">
        <Image
          src="/luxterra-logo.png"
          alt="Luxterra Builders logo"
          width={2132}
          height={1547}
          sizes="(max-width: 900px) 100vw, 50vw"
          className="hero-logo-image"
          priority
        />
      </div>
    </div>
  </div>
</section>

      {/* SERVICES PREVIEW */}
{/* HOME – SERVICES STRIP */}
<section id="services" className="home-services">
  <div className="home-services-inner">
    <header className="home-services-header">
      <p className="lp-section-label">Services</p>
      <h2 className="lp-section-title">From dirt to done.</h2>
      <p className="lp-section-sub">
        Luxterra manages the entire build—planning, budgeting, scheduling,
        permits, and final punch list—so you can focus on your life and
        business instead of chasing trades.
      </p>
    </header>

    <div className="home-services-grid">
      {/* Custom Homes */}
      <article className="home-services-card">
        <div className="home-services-media">
          <Image
            src="/custom-home-services-01.jpg"
            alt="Custom home exterior built by Luxterra Builders"
            width={750}
            height={750}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <h3 className="home-services-card-title">Custom Homes</h3>
        <p className="home-services-card-text">
          High-end residential builds with modern architecture, efficient
          floor plans, and smart detailing that holds value over time.
        </p>
        <ul className="home-services-card-list">
          <li>Ground-up custom homes and additions</li>
          <li>ADUs and mother-in-law suites</li>
          <li>Architect &amp; structural engineer coordination</li>
          <li>Exterior &amp; interior finish guidance</li>
        </ul>
      </article>

      {/* Commercial & Industrial */}
      <article className="home-services-card">
        <div className="home-services-media">
          <Image
            src="/industrial-services-01.png"
            alt="Industrial or lab build-out by Luxterra Builders"
            width={2500}
            height={1666}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <h3 className="home-services-card-title">Commercial &amp; Industrial</h3>
        <p className="home-services-card-text">
          Offices, warehouses, labs, and tenant build-outs planned around
          safety, clear circulation, and future expansion.
        </p>
        <ul className="home-services-card-list">
          <li>Industrial &amp; flex space build-outs</li>
          <li>Retail and office interiors</li>
          <li>Lab and specialized use spaces</li>
          <li>Code compliance, inspections, and city coordination</li>
        </ul>
      </article>

      {/* Multifamily & ADUs */}
      <article className="home-services-card">
        <div className="home-services-media">
          <Image
            src="/multifamily-services-01.png"
            alt="Multifamily or ADU project by Luxterra Builders"
            width={1600}
            height={1066}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <h3 className="home-services-card-title">Multifamily &amp; ADUs</h3>
        <p className="home-services-card-text">
          Investment-focused projects that balance aesthetics, construction
          cost, and long-term rental performance.
        </p>
        <ul className="home-services-card-list">
          <li>Duplexes &amp; small multifamily buildings</li>
          <li>ADUs and mother-in-law suites</li>
          <li>Additions &amp; structural changes</li>
          <li>Layout changes for rental efficiency</li>
        </ul>
      </article>
    </div>
  </div>
</section>


         {/* FEATURED PROJECTS */}
      <section className="lp-featured" id="projects">
        <p className="lp-section-label">Featured Projects</p>
        <h2 className="lp-section-title">Recent Luxterra builds.</h2>
        <p className="lp-section-sub">
          A quick look at the kind of detail and craftsmanship we bring to
          every project.
        </p>

        <div className="lp-project-grid">
          {/* Project 1 – 917 Burnet Street */}
          <article className="lp-project-card">
            <div className="lp-project-image-wrap">
              <Image
                src="/917-burnet-front-elevation-twilight.jpg"
                alt="917 Burnet Street historic home renovation at twilight, San Antonio"
                width={2000}
                height={1342}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="lp-project-body">
              <p className="lp-project-tag">Historic Renovation + Custom Pool &amp; Spa</p>
              <h3>917 Burnet Street</h3>
              <p className="lp-project-text">
                A historic San Antonio home taken back to the studs and rebuilt,
                with a custom-built pool, spa and rock waterfall in the yard.
                Minutes from downtown, and now our model home.
              </p>
              <p className="lp-project-meta">
                Full historic renovation • Custom pool &amp; spa • Model home
              </p>
              <a href="/projects/917-burnet" className="lp-project-link">
                View project →
              </a>
            </div>
          </article>

          {/* Project 2 – Kings Modern Residence */}
          <article className="lp-project-card">
            <div className="lp-project-image-wrap">
              <Image
                src="/kings-01.jpg"
                alt="Kings Modern Residence exterior"
                width={1600}
                height={1066}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="lp-project-body">
              <p className="lp-project-tag">Custom Home + ADU</p>
              <h3>Kings Modern Residence</h3>
              <p className="lp-project-text">
                Modern custom home in San Antonio with a dedicated ADU /
                mother-in-law suite and a pool with SPA designed for
                multigenerational living and long-term flexibility.
              </p>
              <p className="lp-project-meta">
                Custom home + ADU • Full rebuild
              </p>
              <a
                href="/projects/kings-modern-residence"
                className="lp-project-link"
              >
                View project →
              </a>
            </div>
          </article>

          {/* Project 2 – Burnet Rooftop Residence */}
          <article className="lp-project-card">
            <div className="lp-project-image-wrap">
              <Image
                src="/burnet-01.jpg"
                alt="Burnet rooftop custom home"
                width={1600}
                height={2000}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="lp-project-body">
              <p className="lp-project-tag">Custom Home</p>
              <h3>Burnet Rooftop Residence</h3>
              <p className="lp-project-text">
                Design-driven custom home with a rooftop deck, indoor–outdoor
                living, and modern elevations tailored for the site.
              </p>
              <p className="lp-project-meta">
                New construction • Rooftop deck • San Antonio, Texas
              </p>
              <a href="/projects/burnet-home" className="lp-project-link">
                View project →
              </a>
            </div>
          </article>

          {/* Project 3 – Advanced Industrial Lab */}
          <article className="lp-project-card">
            <div className="lp-project-image-wrap">
              <Image
                src="/industrial-01.jpg"
                alt="Advanced industrial lab interior"
                width={2000}
                height={1500}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="lp-project-body">
              <p className="lp-project-tag">Industrial</p>
              <h3>Advanced Industrial Lab</h3>
              <p className="lp-project-text">
                High-performance industrial lab with durable finishes,
                organized circulation, and equipment-ready infrastructure.
              </p>
              <p className="lp-project-meta">
                Lab &amp; flex space • Tenant build-out
              </p>
              <a
                href="/projects/industrial-lab"
                className="lp-project-link"
              >
                View project →
              </a>
            </div>
          </article>
        </div>
      </section>


     {/* WHY BUILD WITH LUXTERRA */}
<section className="lp-why">
  <div className="lp-why-copy">
    <p className="lp-section-label">Why build with Luxterra</p>
    <h2 className="lp-section-title">A builder that thinks like an owner.</h2>
    <p className="lp-why-intro">
      Every project is treated like a long-term asset, not a quick flip. We plan, budget,
      and build as if we were keeping the property ourselves.
    </p>
    <ul className="lp-why-list">
      <li>
        Turn-key process from early planning and permits to final punch list.
      </li>
      <li>
        Clear budgets up front, documented change orders, and no surprise costs.
      </li>
      <li>
        Weekly updates so you always know what&apos;s happening on site.
      </li>
      <li>
        Licensed, insured, and working with vetted trades on every job.
      </li>
    </ul>
  </div>

  <div className="lp-why-stats">
    <div className="lp-why-card">
      <span className="lp-why-label">Completed builds</span>
      <span className="lp-why-value">12+</span>
      <p>
        Custom homes, ADUs, remodels, and industrial projects around San Antonio.
      </p>
    </div>
    <div className="lp-why-card">
      <span className="lp-why-label">Experience</span>
      <span className="lp-why-value">5+ yrs</span>
      <p>
        Hands-on leadership across residential and light commercial construction.
      </p>
    </div>
    <div className="lp-why-card">
      <span className="lp-why-label">Client focus</span>
      <span className="lp-why-value">1:1</span>
      <p>
        You work directly with the builder—no getting lost in a big corporate pipeline.
      </p>
    </div>
  </div>
</section>
<section className="home-testimonials">
  <div className="home-testimonials-inner">
    <div className="home-testimonials-header">
      <p className="lp-section-label">Verified Google Reviews</p>
      <h2>Trusted by homeowners, investors, and trade partners.</h2>
      <p>
        Every quote below is from a public review on our Google Business
        Profile, where you can read it in full alongside the rest.
      </p>
    </div>

    <div className="home-testimonials-grid">
      {REVIEWS.map((review) => (
        <article className="home-testimonial-card" key={review.name}>
          <p>&ldquo;{review.quote}&rdquo;</p>
          <span>{review.name}</span>
          <span className="home-testimonial-role">{review.role}</span>
        </article>
      ))}
    </div>

    <p className="home-reviews-cta">
      <strong>
        {GOOGLE_RATING} out of 5 from {GOOGLE_REVIEW_COUNT} reviews on Google.
      </strong>{" "}
      <a
        href={GOOGLE_BUSINESS_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read them all on our Google profile
      </a>
    </p>
  </div>
</section>
<section className="home-trust-seo">
  <div className="home-trust-seo-inner">
    <div className="home-trust-seo-header">
      <p className="lp-section-label">Built for San Antonio & the Hill Country</p>
      <h2>Construction services backed by real project experience.</h2>
      <p>
        Luxterra Builders helps homeowners, investors, and business owners plan
        and build custom homes, ADUs, multifamily projects, commercial spaces,
        and industrial build-outs across San Antonio and surrounding areas.
      </p>
    </div>

    <div className="home-trust-seo-grid">
      <a href="/custom-home-builder-san-antonio" className="home-trust-seo-card">
        <span>01</span>
        <h3>Custom Homes</h3>
        <p>Ground-up custom homes, additions, and design-build coordination.</p>
      </a>

      <a href="/adu-builder-san-antonio" className="home-trust-seo-card">
        <span>02</span>
        <h3>ADUs & Guest Suites</h3>
        <p>Mother-in-law suites, garage conversions, and backyard guest houses.</p>
      </a>

      <a href="/commercial-contractor-san-antonio" className="home-trust-seo-card">
        <span>03</span>
        <h3>Commercial Build-Outs</h3>
        <p>Tenant improvements, offices, retail spaces, and business interiors.</p>
      </a>

      <a href="/industrial-build-outs-san-antonio" className="home-trust-seo-card">
        <span>04</span>
        <h3>Industrial Build-Outs</h3>
        <p>Lab spaces, warehouses, flex spaces, and specialized build-outs.</p>
      </a>

      <a href="/multifamily-contractor-san-antonio" className="home-trust-seo-card">
        <span>05</span>
        <h3>Multifamily Projects</h3>
        <p>Duplexes, small multifamily projects, ADUs, and investment properties.</p>
      </a>

      <a href="/areas-we-serve" className="home-trust-seo-card">
        <span>06</span>
        <h3>Areas We Serve</h3>
        <p>San Antonio, Boerne, New Braunfels, Bulverde, Spring Branch, Canyon Lake, La Vernia, and the Hill Country.</p>
      </a>
    </div>
  </div>
</section> 

{/* FINAL CTA */}
<section className="lp-final-cta">
  <div className="lp-final-inner">
    <div className="lp-final-copy">
      <h2>Ready to talk about your project?</h2>
      <p>
        Share your plans, budget, or even just a rough idea. We&apos;ll help you
        understand what&apos;s realistic, what it will take to build it, and how to
        phase the work if needed.
      </p>
    </div>
    <div className="lp-final-actions">
      <a href="/quote" className="lp-btn lp-btn-primary">
        Request a Free Consultation
      </a>
      <a href="tel:+12542902482" className="lp-phone">
        Call (254) 290-2482
      </a>
    </div>
  </div>
</section>

     
    </main>
  );
}
