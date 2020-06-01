import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/sides",
  name: "Sides (A la carte)",
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
      name: "Basmati Rice",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "19.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Pinto Beans",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "19.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Fire Roasted Corn",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "25.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Veggies",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "25.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Sauteed Mushrooms",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "25.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Babaghanoush Sm (roasted eggplant dip)",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "29.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Hummus Dip",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "25.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Tzatziki Dip",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "25.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Pita",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "6.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "11.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
