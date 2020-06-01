import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/desserts",
  name: "Dessert",
  description: "Small (serves 4-5) Large (Serves 8-10)",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },

  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Banana Cream Pie",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "34.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "6 pce",
          },
        },
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "12 pce",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
