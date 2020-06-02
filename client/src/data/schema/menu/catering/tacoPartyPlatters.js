import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/catering/taco-party-platters",
  name: "Taco Party Platters",
  description:
    "Includes 2 tacos per person, chips & salsa, pinto beans and salad. Tacos served on corn tortillas with lettuce (cabbage for fish items), jack cheese and pico de gallo",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Taco Pack",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "10.25",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Per Person",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      menuAddon: [
        { "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing" },
        { "@id": siteUrl + "/#/schema/menu-item-addon/taco-pack-protein" },
      ],
    },
    {
      "@type": "MenuItem",
      name: "Fiesta Taco Pack",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "13.95",
          priceCurrency: "USD",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            name: "Per Person",
          },
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      menuAddon: [{ "@id": siteUrl + "/#/schema/menu-item-addon/taco-pack-protein" }],
    },
  ],
};
