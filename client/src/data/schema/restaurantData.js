import {
  siteUrl,
  siteName,
  telephoneTustin,
  telephonePlacentia,
  emailTustin,
  emailPlacentia,
  sameAsTustin,
  sameAsPlacentia,
  metaDescriptionTustin,
  metaDescriptionPlacentia,
} from "./constants";
import { newDate } from "../../../lib/schema";

const common = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  priceRange: "$$",
  hasMenu: siteUrl + "/#/schema/menu",
  servesCuisine: ["Seafood", "Middle Eastern", "Mediterranean"],
  //openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-19:00"],
  OpeningHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "21:00",
    },
  ],
};
const tustin = {
  ...common,
  "@id": siteUrl + "/#/schema/restaurant/tustin",
  name: siteName + " Tustin",
  description: metaDescriptionTustin,
  url: siteUrl,
  telephone: telephoneTustin,
  email: emailTustin,
  address: {
    "@id": siteUrl + "/#/schema/address/tustin",
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
  sameAs: sameAsTustin,
  hasMap: "https://goo.gl/maps/QS9qdGRdkJi9isPm9",
  areaServed: ["Tustin"],
  hasMenu: [
    { "@id": siteUrl + "/#/schema/menu" },
    { "@id": siteUrl + "/#/schema/menu/catering" },
    { "@id": siteUrl + "/#/schema/menu/weekly-specials" },
    { "@id": siteUrl + "/#/schema/menu/taco-tuesday" },
  ],
};

const placentia = {
  ...common,
  "@id": siteUrl + "/#/schema/restaurant/placentia",
  name: siteName + " Placentia",
  description: metaDescriptionPlacentia,
  url: siteUrl,
  telephone: telephonePlacentia,
  email: emailPlacentia,
  address: {
    "@id": siteUrl + "/#/schema/address/placentia",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.885910",
    longitude: "-117.863310",
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
  sameAs: sameAsPlacentia,
  hasMap: "https://goo.gl/maps/QS9qdGRdkJi9isPm9",
  areaServed: ["Placentia"],
  hasMenu: [
    { "@id": siteUrl + "/#/schema/menu" },
    { "@id": siteUrl + "/#/schema/menu/catering" },
    { "@id": siteUrl + "/#/schema/menu/weekly-specials" },
    { "@id": siteUrl + "/#/schema/menu/taco-tuesday" },
  ],
};
export default [tustin, placentia];
