// app/robots.js

const baseUrl = "https://www.luxterrabuilders.com";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
