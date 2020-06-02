import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/catering/appetizers",
  name: "Appetizers",
  description: "Serves 8-10",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },

  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Chips, Salsa and Guacamole",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "49.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Shrimp Ceviche & Ahi Poke",
      description: "Topped with avocado and served with tostadas",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Mediterranean Dip Platter",
      description: "Hummus & cucumber yogurt (tzatziki) served with grilled pita and cucumbers",
      offers: [
        {
          "@type": "Offer",
          price: "39.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Mediterranean Combo Platter",
      description: "Hummus, tzatziki, babaghanoush (fire roasted eggplant dip) and falafel. Served with grilled pita",
      offers: [
        {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
