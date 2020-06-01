import { siteUrl } from "../constants";

const sides = [
  {
    "@type": "MenuItem",
    name: "Basmati Rice",
    description: "",
    offers: [
      {
        "@type": "Offer",
        price: "00.00",
        priceCurrency: "USD",
      },
    ],
    // image: "https://thisisarestaurant.com/starter_dishes.jpg",
    // suitableForDiet: "http://schema.org/GlutenFreeDiet",
  },
  {
    "@type": "MenuItem",
    name: "Salad",
    description: "",
    offers: [
      {
        "@type": "Offer",
        price: "00.00",
        priceCurrency: "USD",
      },
    ],
    // image: "https://thisisarestaurant.com/starter_dishes.jpg",
    // suitableForDiet: "http://schema.org/GlutenFreeDiet",
  },
  {
    "@type": "MenuItem",
    name: "Tortilla Chips",
    description: "",
    offers: [
      {
        "@type": "Offer",
        price: "00.00",
        priceCurrency: "USD",
      },
    ],
    // image: "https://thisisarestaurant.com/starter_dishes.jpg",
    // suitableForDiet: "http://schema.org/GlutenFreeDiet",
  },
];

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/pita-wraps",
  name: "Pita Wraps",
  description:
    "Small (serves 4-5), Large (Serves 8-10). Wrapped with mixed greens, onions, pickles, tomatoes & garlic sauce spread. Includes a choice of basmati rice, salad or tortilla chips.",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },

  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Chicken Kabob Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "110.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Falafel Wrap (V)",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "100.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Ground Sirloin Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "110.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Veggie-Feta Wrap (V)",
      description: "Zucchini, squash, onions, feta, tomatoes & roasted red pepper",
      offers: [
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "110.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Lamb Gyro Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "55.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "110.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Salmon Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "65.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "130.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Filet-Mignon Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "65.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "130.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Mahi Wrap",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "65.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "130.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: sides,
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
