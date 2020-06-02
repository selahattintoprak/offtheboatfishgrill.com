import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/happy-hour",
  name: "Happy Hour",
  description: "3pm-6pm Dine in only.",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:15:00",
    availabilityStarts: "T8:18:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Beer",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "3.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Domestic",
          },
        },
        {
          "@type": "Offer",
          price: "3.50",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Import",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Tacos",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "5.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "2 Salmon",
          },
        },
        {
          "@type": "Offer",
          price: "5.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "2 Chicken",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Sliders",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "6.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "2 Ground Sirloin",
          },
        },
        {
          "@type": "Offer",
          price: "6.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "2 Chicken",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Margaritas",
      description: "",
      offers: {
        "@type": "Offer",
        price: "5.00",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
