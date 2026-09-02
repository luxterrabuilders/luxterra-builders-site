// app/lib/schema.js
//
// Builders for the structured data on individual pages. The site-wide
// GeneralContractor entity lives in app/layout.js; everything here references
// it by @id so search engines and AI assistants read one business, not several.
//
// IMPORTANT: FAQ schema must be generated from the same array the page renders.
// Marking up questions that a visitor cannot see on the page violates Google's
// structured data policy and can get the whole site's rich results suppressed.

import { SITE_URL } from "./business";

const BUSINESS_ID = `${SITE_URL}/#business`;

export function faqPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function serviceSchema({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: "San Antonio",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
