// app/lib/business.js
//
// Single source of truth for Luxterra's business facts. Anything that appears
// in more than one place - the phone number, the Google profile, the service
// areas - lives here so the site can never contradict itself. Consistent
// name/phone/website across every mention is also what local search and AI
// assistants use to decide two mentions are the same business.

export const SITE_URL = "https://www.luxterrabuilders.com";

export const BUSINESS_NAME = "Luxterra Builders";
export const PHONE_DISPLAY = "(254) 290-2482";
export const PHONE_HREF = "tel:+12542902482";
export const EMAIL = "info@luxterrabuilders.com";
export const HOURS_DISPLAY = "Monday – Friday, 8:00am – 5:00pm";

// Google Business Profile. The CID permanently identifies the listing; it is
// derived from the profile's own review link, so it won't rot the way a
// search-results URL would.
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://maps.google.com/?cid=1436495679538126253";
export const GOOGLE_REVIEW_URL = "https://g.page/r/Ca3dQKw1de8TEBM/review";

// TODO (Christian): update these two when the review count moves. They are
// displayed on the homepage, so they need to stay true. Checked 2 Sep 2026.
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 13;

// Verbatim excerpts from public Google reviews. Each one stops at the end of a
// complete sentence - never paraphrased, never extended. The link to the full
// profile is what makes them verifiable, which is the whole point.
export const REVIEWS = [
  {
    quote:
      "We absolutely love our home built by Luxterra Builders. The design is beautiful, modern, and thoughtfully done down to the smallest details.",
    name: "Stephanie",
    role: "Custom home client",
  },
  {
    quote:
      "We had a very positive experience with Luxterra Builders. Christian was dependable, professional, and kept us informed throughout the project. He was easy to reach, answered our questions, and made sure the details were handled correctly.",
    name: "Angie Russ",
    role: "Custom home client",
  },
  {
    quote:
      "We had a great experience working with Luxterra Builders as a landscaping partner. Christian and his team were professional, organized, and easy to coordinate with throughout the project.",
    name: "Omar Malagon",
    role: "Landscaping partner",
  },
];

export const SERVICE_AREAS = [
  "San Antonio",
  "Boerne",
  "New Braunfels",
  "Bulverde",
  "Spring Branch",
  "Canyon Lake",
  "La Vernia",
  "Schertz",
  "Cibolo",
  "Helotes",
];

export const SERVICES = [
  "Custom Home Construction",
  "Build on Your Lot Construction",
  "ADU Construction",
  "Mother-in-Law Suite Construction",
  "Home Additions and Major Renovations",
  "Duplex and Small Multifamily Construction",
  "Commercial Build-Outs",
  "Industrial and Warehouse Build-Outs",
  "Laboratory and Flex Space Build-Outs",
];
