import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/mediterranean-apps",
  name: "Mediterranean Apps",
  description: "",
  // image: "https://thisisarestaurant.com/dinner_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [{
    "@type": "MenuSection",
    name: "Vegetarian",
    description: "",
    // image: "https://thisisarestaurant.com/starter_dishes.jpg",
    offers: {
      "@type": "Offer",
      availabilityEnds: "T8:21:00",
      availabilityStarts: "T8:11:00",
    },
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Garlic Sauce & Pita",
        description: "",
        offers: {
          "@type": "Offer",
          price: "3.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Hummus & Pita",
        description: "",
        offers: {
          "@type": "Offer",
          price: "5.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Spicy Hummus & Pita",
        description: "",
        offers: {
          "@type": "Offer",
          price: "6.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Tzatziki & Pita",
        description: "Greek yogurt, cucumber, garlic, olive oil",
        offers: {
          "@type": "Offer",
          price: "5.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Fried Cauliflower",
        description: "Lightly fried, served with tzatziki & pita",
        offers: {
          "@type": "Offer",
          price: "6.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Dolma (5pc)",
        description: "With hummus, tzatziki & pita",
        offers: {
          "@type": "Offer",
          price: "7.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Baba Ghanoush",
        description: "Roasted eggplant dip, garlic, olive oil & pita",
        offers: {
          "@type": "Offer",
          price: "6.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Flafel Combo",
        description: "3 falafels with pita, tzatziki & hummus",
        offers: {
          "@type": "Offer",
          price: "7.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Combo Platter",
        description: "Perfect for sharing! A combination of all of our veggie apps, served with 2 pitas",
        offers: {
          "@type": "Offer",
          price: "10.95",
          priceCurrency: "USD",
        },
        // image: "https://thisisarestaurant.com/starter_dishes.jpg",
        // suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
    ],
  },]
};
