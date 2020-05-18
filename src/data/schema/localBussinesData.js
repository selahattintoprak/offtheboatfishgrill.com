import { siteUrl, siteName, address } from "./constants";

export default {
  type: "LocalBusiness",
  id: siteUrl,
  name: siteName,
  description: "",
  url: siteUrl,
  telephone: "+1760-452-6133",
  email: "info@qcskinclinic.com.au",
  address: { "@id": siteUrl + "/#/schema/address" },
  geo: {
    latitude: "",
    longitude: "",
  },
  //image: [SITE_URL + "/favicon.png", SITE_URL + "/images/main-imag.jpg"],
  image: {
    "@type": "ImageObject",
    url: siteUrl + "/images/main-imag.jpg",
    width: "1000",
    height: "750",
  },
  review: [
    {
      "@type": "Review",
      author: "",
      datePublished: null,
      description: "",
      reviewRating: {
        "@type": "Rating",
        bestRating: 5,
        ratingValue: "5",
        worstRating: 1,
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    reviewCount: 5,
    ratingValue: "4.2",
  },
  priceRange: "$$",
  servesCuisine: "",
  areaServed: ["Carlsbad", "Camp Pendleton", "Oceanside", "Vista"],
  sameAs: [],
  hasMenu: "",
  hasMap: "https://goo.gl/maps/XwYwnzDodY3AfWg18",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-19:00"],
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
  ],
};
