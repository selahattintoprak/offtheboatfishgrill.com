import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/grilled-meats-seafood",
  name: "Grilled Meats & Seafood (A La Carte)",
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
      name: "Chicken Kabob",
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
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Ground Sirloin Kabob",
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
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Lamb Gyro",
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
      name: "Grilled Fish (fresh cod)",
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
      name: "Grilled Mahi-Mahi",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "65.00",
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
      name: "Grilled Wild Salmon",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "65.00",
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
      name: "Caramelized Pork (carnitas)",
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
      name: "Filet-Mignon Kabob",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "95.00",
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
