export const metadata = {
  title: "Contact | Luxterra Builders",
  description:
    "Contact Luxterra Builders in San Antonio for residential, industrial, commercial, and multifamily construction projects.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <h1>Contact Luxterra Builders</h1>
        <p>
          Tell us about your project and we&apos;ll respond with next steps.
          We&apos;re based in San Antonio and serve the surrounding areas.
        </p>
      </section>

      <section className="page-two-column">
        <div className="page-card">
          <h2>Get in touch</h2>
          <p>
            Phone: <a href="tel:12542902482">(254) 290-2482</a>
            <br />
            Email:{" "}
            <a href="mailto:info@luxterrabuilders.com">
              info@luxterrabuilders.com
            </a>
          </p>
          <p>
            Business Hours:
            <br />
            Monday – Friday, 8:00am – 5:00pm
          </p>
          <p>
            Typical projects: custom homes, industrial buildings, commercial
            spaces, and multifamily developments.
          </p>
        </div>

        <form className="page-card form">
          <h2>Send a message</h2>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="Best number to reach you"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              required
            />
          </label>
          <button type="submit" disabled>
            Submit (email setup coming next)
          </button>
          <p className="muted">
            The button is disabled for now – we&apos;ll connect this form to
            your email next.
          </p>
        </form>
      </section>
    </main>
  );
}
