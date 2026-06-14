// app/robots.js

const baseUrl = "https://luxterra-builders-site-fe1k-luxterrabuilders-projects.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
