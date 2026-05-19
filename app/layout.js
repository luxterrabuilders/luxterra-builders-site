// app/layout.js

export const metadata = {
  title: {
    default: "Luxterra Builders | San Antonio Design–Build Contractor",
    template: "%s | Luxterra Builders",
  },
  description:
    "Luxterra Builders delivers custom homes, commercial spaces, and multifamily projects in San Antonio with clear budgets, tight schedules, and owner-level thinking.",
  metadataBase: new URL("https://luxterrabuilders-site.vercel.app"), // change to your custom domain when ready
  openGraph: {
    type: "website",
    url: "https://luxterrabuilders-site.vercel.app",
    title: "Luxterra Builders | San Antonio Design–Build Contractor",
    description:
      "Custom homes, commercial, and multifamily projects built like long-term assets with clear budgets and weekly communication.",
    siteName: "Luxterra Builders",
    images: [
      {
        url: "/luxterra-logo01.png", // or a hero image if you prefer
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
    images: ["/luxterra-logo01.png"],
  },
};