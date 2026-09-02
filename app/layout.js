// app/layout.js

import "./globals.css";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import MobileActionBar from "./components/MobileActionBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  SITE_URL,
  GOOGLE_BUSINESS_PROFILE_URL,
  SERVICE_AREAS,
  SERVICES,
} from "./lib/business";


// TODO (Christian): if you're willing to publish a street address, add it to
// `address` and add a `geo` block. Both strengthen local ranking.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: "Luxterra Builders",
  url: SITE_URL,
  logo: `${SITE_URL}/luxterra-logo.png`,
  image: `${SITE_URL}/luxterra-logo.png`,
  telephone: "+12542902482",
  email: "info@luxterrabuilders.com",
  priceRange: "$$",
  // Ties this website to the Google Business Profile as one entity. The CID
  // is derived from the profile's own review link, so it is stable.
  sameAs: [GOOGLE_BUSINESS_PROFILE_URL],
  hasMap: GOOGLE_BUSINESS_PROFILE_URL,
  description:
    "Luxterra Builders is a San Antonio design-build contractor specializing in custom homes, ADUs, multifamily projects, commercial spaces, and industrial build-outs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Christian Hernandez",
  },
  areaServed: SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
  })),
  makesOffer: SERVICES.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service },
  })),
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxterra Builders | San Antonio Design–Build Contractor",
    template: "%s | Luxterra Builders",
  },
  description:
    "Luxterra Builders delivers custom homes, commercial spaces, and multifamily projects in San Antonio with clear budgets, realistic schedules, and owner-level thinking.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Luxterra Builders | San Antonio Design–Build Contractor",
    description:
      "Custom homes, commercial, and multifamily projects built like long-term assets with clear budgets and weekly communication.",
    siteName: "Luxterra Builders",
    locale: "en_US",
    images: [
      {
        url: "/luxterra-logo.png",
        width: 1200,
        height: 630,
        alt: "Luxterra Builders logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxterra Builders | San Antonio Design–Build Contractor",
    description:
      "Custom homes, commercial, and multifamily projects in San Antonio built with owner-level thinking.",
    images: ["/luxterra-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-body">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <Navbar />

        <div id="main-content">{children}</div>

        <SiteFooter />
        <MobileActionBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <GoogleAnalytics gaId="G-0E499Z2FVH" />
      </body>
    </html>
  );
}
