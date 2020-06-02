import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/catering/salads",
  name: "Salads",
  description: "Serves 8-10. Salads inlcude mixed greens, tomatoes, cucumbers, red onions & fire roasted corn",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Greek Salad (V)",
      description: "Includes Kalamata olives and feta cheese",
      offers: [
        {
          "@type": "Offer",
          price: "39.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],

      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Chicken Kabob Salad",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Salmon Salad",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "89.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Mahi Salad",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "85.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Veggie-Feta Salad (V)",
      description: "Includes zucchini, squash, onions, tomatoes, feta and roasted red pepper.",
      offers: [
        {
          "@type": "Offer",
          price: "75.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Seared Ahi Salad",
      description: "Make it cajun (on request).",
      offers: [
        {
          "@type": "Offer",
          price: "99.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Grilled Shrimp Salad",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "99.00",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Small",
          },
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Filet-Mignon Salad",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "99.00",
          priceCurrency: "USD",
        },
      ],
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" }],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
