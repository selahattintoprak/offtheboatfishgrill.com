import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/taco-tuesday",
  name: "Taco Tuesday",
  description: "Dine in only.",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:18:00",
    availabilityStarts: "T8:15:00",
  },
  temporalCoverage: "Tu 15:00-18:00",
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Single Tacos",
      description: "Excludes shrimp, filet mignon, and lobster.",
      offers: {
        "@type": "Offer",
        price: "2.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
