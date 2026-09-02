// app/components/JsonLd.js
//
// Renders a JSON-LD block. Kept as one component so every structured-data
// script on the site is serialised the same way.

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
