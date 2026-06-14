// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Luxterra Builders",
  url: "https://luxterra-builders-site-fe1k-luxterrabuilders-projects.vercel.app",
  logo: "https://luxterra-builders-site-fe1k-luxterrabuilders-projects.vercel.app/luxterra-logo.png",
  image:
    "https://luxterra-builders-site-fe1k-luxterrabuilders-projects.vercel.app/luxterra-logo.png",
  telephone: "+12542902482",
  priceRange: "$$",
  description:
    "Luxterra Builders is a San Antonio design-build contractor specializing in custom homes, ADUs, multifamily projects, commercial spaces, and industrial build-outs.",
  areaServed: [
    {
      "@type": "City",
      name: "San Antonio",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "City",
      name: "Boerne",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "City",
      name: "New Braunfels",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "City",
      name: "Helotes",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "City",
      name: "Bulverde",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Home Construction",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "ADU Construction",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mother-in-Law Suite Construction",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Build-Outs",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Industrial Build-Outs",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Multifamily Construction",
      },
    },
  ],
};

export const metadata = {
  title: {
    default: "Luxterra Builders | San Antonio Design–Build Contractor",
    template: "%s | Luxterra Builders",
  },
  description:
    "Luxterra Builders delivers custom homes, commercial spaces, and multifamily projects in San Antonio with clear budgets, realistic schedules, and owner-level thinking.",
  metadataBase: new URL("https://luxterrabuilders-site.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://luxterrabuilders-site.vercel.app",
    title: "Luxterra Builders | San Antonio Design–Build Contractor",
    description:
      "Custom homes, commercial, and multifamily projects built like long-term assets with clear budgets and weekly communication.",
    siteName: "Luxterra Builders",
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
  <Navbar />
  {children}

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
