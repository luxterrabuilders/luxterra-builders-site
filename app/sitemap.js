// app/sitemap.js

const baseUrl = "https://luxterrabuilders-site.vercel.app";

export default function sitemap() {
  const routes = [
    "",
    "/services",
    "/projects",
    "/gallery",
    "/quote",
    "/contact",
    "/adu-builder-san-antonio",
    "/custom-home-builder-san-antonio",
    "/commercial-contractor-san-antonio",
    "/multifamily-contractor-san-antonio",
    "/projects/kings-modern-residence",
    "/projects/burnet-home",
    "/projects/industrial-lab",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
