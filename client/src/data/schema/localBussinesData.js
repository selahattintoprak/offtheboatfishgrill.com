import { siteUrl, siteName, address, telephone, email, sameAs } from "./constants";
import { newDate } from "../../../lib/schema";

export default {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: siteName,
  description: "",
  url: siteUrl,
  telephone,
  email,
  address: {
    "@id": siteUrl + "/#/schema/address",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.4929479",
    longitude: "-117.149325",
  },
  //image: [siteUrl + "/favicon.png", siteUrl + "/static/images/main-image.jpg"],
  image: {
    "@id": siteUrl + "/#/schema/image/primary",
  },
  review: [
    {
      "@type": "Review",
      author: "Selahattin Toprak",
      datePublished: newDate(),
      description: "Best iPhone repair, iPad repair, Samsung Galaxy repair and computer repair.",
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
    reviewCount: 1,
    ratingValue: "5",
  },
  priceRange: "$$",
  servesCuisine: "",
  areaServed: ["Carlsbad", "Camp Pendleton", "Oceanside", "Vista"],
  sameAs,
  hasMap: "https://goo.gl/maps/XwYwnzDodY3AfWg18",
  //openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-19:00"],
  OpeningHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
  ],
};
