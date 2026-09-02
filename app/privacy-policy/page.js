// app/privacy-policy/page.js
//
// Plain-language privacy policy. Written to describe what this website
// actually does, not boilerplate.
//
// TODO (Christian):
//   1. Add a business mailing address below if you're willing to publish one.
//      A physical address also strengthens local SEO. Search for ADDRESS_TODO.
//   2. Have this reviewed by your attorney before you rely on it. I've
//      described the site's real behaviour accurately, but I'm not a lawyer
//      and this is not legal advice.
//   3. Update the "Last updated" date whenever the form fields or the
//      services listed under "Who else handles your information" change.

import Link from "next/link";
import "./legal.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Luxterra Builders collects, uses, and protects the information you share through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "August 29, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <p className="legal-kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated {LAST_UPDATED}</p>

        <p className="legal-lede">
          This page explains what information Luxterra Builders collects through
          luxterrabuilders.com, why we collect it, and what we do with it. If
          anything here is unclear, email{" "}
          <a href="mailto:info@luxterrabuilders.com">info@luxterrabuilders.com</a>{" "}
          and we&apos;ll explain it.
        </p>

        <h2>What we collect</h2>
        <p>
          When you fill in a form on this site, we collect what you type into it:
          your name, email address, phone number, the project address or area,
          the type of project, and your description of the work. On the
          consultation form we also ask about lot ownership, budget range,
          timeline, financing status, whether you have plans, how you prefer to
          be contacted, and how you heard about us.
        </p>
        <p>
          You choose what to share. Only name, email, phone, project type, and a
          project description are required &mdash; everything else is optional and
          exists so we can give you a more useful answer.
        </p>
        <p>
          Separately, our analytics tool records standard website measurements:
          which pages were viewed, roughly where in the world the visit came
          from, what kind of device was used, and which site referred you. This
          is not tied to your name.
        </p>

        <h2>Why we collect it</h2>
        <p>
          To respond to your inquiry, to prepare a realistic budget and schedule
          discussion, and to keep a record of the projects people ask us about.
          We use the analytics data to understand which pages are useful and
          where the website is failing people.
        </p>
        <p>
          We do not sell your information. We do not share it with advertisers.
          We do not add you to a marketing list because you asked a question
          about a build.
        </p>

        <h2>Who else handles your information</h2>
        <p>
          Running a website means a few other companies process data on our
          behalf. Each of them has its own privacy terms:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> hosts this website and processes the requests
            your browser makes to it.
          </li>
          <li>
            <strong>Resend</strong> delivers the email that carries your form
            submission to our inbox, and the confirmation email back to you.
          </li>
          <li>
            <strong>Formspree</strong> is used as a backup delivery route so that
            a form submission is never lost if our primary email service is
            unavailable.
          </li>
          <li>
            <strong>Google Analytics</strong> provides the website measurement
            described above.
          </li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          Google Analytics sets cookies in your browser to recognise repeat
          visits. You can block or delete these through your browser settings,
          or install Google&apos;s opt-out browser add-on, and the site will work
          normally without them. We do not use advertising or retargeting
          cookies on this site.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Inquiry emails stay in our business email account as part of our normal
          records. If you&apos;d like us to delete your inquiry and contact details,
          email{" "}
          <a href="mailto:info@luxterrabuilders.com">info@luxterrabuilders.com</a>{" "}
          and we&apos;ll remove them.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us what information we hold about you, ask us to correct
          it, or ask us to delete it. Email{" "}
          <a href="mailto:info@luxterrabuilders.com">info@luxterrabuilders.com</a>{" "}
          or call <a href="tel:+12542902482">(254) 290-2482</a>. Texas residents
          may have additional rights under the Texas Data Privacy and Security
          Act; contact us and we&apos;ll help you exercise them.
        </p>

        <h2>Children</h2>
        <p>
          This site is aimed at property owners, investors, and business owners.
          It is not directed at children, and we do not knowingly collect
          information from anyone under 13.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change what we collect or who processes it, we&apos;ll update this
          page and the date at the top.
        </p>

        <h2>Contact</h2>
        <p>
          Luxterra Builders
          <br />
          {/* ADDRESS_TODO: add a mailing address here once Christian confirms one. */}
          San Antonio, Texas
          <br />
          <a href="tel:+12542902482">(254) 290-2482</a>
          <br />
          <a href="mailto:info@luxterrabuilders.com">info@luxterrabuilders.com</a>
        </p>

        <p className="legal-back">
          <Link href="/">Back to home</Link>
        </p>
      </div>
    </main>
  );
}
