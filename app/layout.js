// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        <GoogleAnalytics gaId="G-0E499Z2FVH" />
      </body>
    </html>
  );
}
