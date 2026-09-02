// app/sitemap.js
//
// One entry per real page, no duplicates.
//
// `lastModified` is an explicit date per route rather than `new Date()`.
// Stamping build time on every URL tells Google the whole site changed
// every deploy, which makes the signal worthless. Update the date on a
// route when you meaningfully change that page's content.

const baseUrl = "https://www.luxterrabuilders.com";

const routes = [
  { path: "", lastModified: "2026-08-29", priority: 1.0, changeFrequency: "monthly" },

  // Core service pages
  { path: "/services", lastModified: "2026-06-21", priority: 0.9, changeFrequency: "monthly" },
  { path: "/custom-home-builder-san-antonio", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/adu-builder-san-antonio", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/multifamily-contractor-san-antonio", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/commercial-contractor-san-antonio", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industrial-build-outs-san-antonio", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },

  // Location
  { path: "/areas-we-serve", lastModified: "2026-08-29", priority: 0.8, changeFrequency: "monthly" },

  // Proof
  { path: "/projects", lastModified: "2026-06-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects/kings-modern-residence", lastModified: "2026-06-21", priority: 0.7, changeFrequency: "yearly" },
  { path: "/projects/burnet-home", lastModified: "2026-06-21", priority: 0.7, changeFrequency: "yearly" },
  { path: "/projects/industrial-lab", lastModified: "2026-06-21", priority: 0.7, changeFrequency: "yearly" },
  { path: "/gallery", lastModified: "2026-06-21", priority: 0.5, changeFrequency: "monthly" },

  // Conversion
  { path: "/quote", lastModified: "2026-08-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", lastModified: "2026-08-29", priority: 0.8, changeFrequency: "monthly" },

  // Legal
  { path: "/privacy-policy", lastModified: "2026-08-29", priority: 0.2, changeFrequency: "yearly" },

  // NOTE: /thank-you is deliberately excluded. It's noindex - a confirmation
  // page has no business appearing in search results.
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(`${route.lastModified}T12:00:00Z`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
