import { siteUrl, siteName, address, telephone, email, sameAs } from "./constants";
import { newDate } from "../../../lib/schema";

export default {
  "@context": "https://schema.org",
  "@type": "Restaurant",
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
    latitude: "33.7593785",
    longitude: "-117.8276426",
  },
  //image: [siteUrl + "/favicon.png", siteUrl + "/static/images/main-image.jpg"],
  image: {
    "@id": siteUrl + "/#/schema/image/primary",
  },
  logo: {
    "@id": siteUrl + "/#/schema/image/logo",
  },
  review: [
    {
      "@type": "Review",
      author: "Selahattin Toprak",
      datePublished: newDate(),
      description:
        "Best Fish Tacos, Fish and chips, Gyro, Kabob, Kebab, Lentil Soup, Lobster, Off The Boat Fish Grill, Orange County, Restaurant, Seafood and Taco to be found in Tustin",
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
  hasMenu: siteUrl + "/#/schema/menu",
  servesCuisine: ["Seafood", "Middle Eastern", "Mediterranean"],
  areaServed: ["Tustin"],
  sameAs,
  hasMap: "https://goo.gl/maps/QS9qdGRdkJi9isPm9",
  //openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-19:00"],
  OpeningHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
};
