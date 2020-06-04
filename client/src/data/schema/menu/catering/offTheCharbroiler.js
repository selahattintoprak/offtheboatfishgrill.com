import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/catering/off-the-charbroiler",
  name: "Off the Charbroiler",
  description:
    "Small (serves 4-5), Large (Serves 8-10). Served family style! Includes pita, basmati rice, salad, veggies and tzatziki",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          price: "59.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "109.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Ground Sirloin Kabob",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "109.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Fish (Fresh COD)",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "109.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
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
          price: "69.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "119.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
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
          price: "69.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "119.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Caramelized Pork (Carnitas)",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "109.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
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
          price: "79.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
        {
          "@type": "Offer",
          price: "159.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Large",
          },
        },
      ],
      menuAddon: { "@id": siteUrl + "/#/schema/menu-item-addon/off-the-charbroiler-sides" },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
