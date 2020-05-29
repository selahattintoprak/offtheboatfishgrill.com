export default {
  "@context": "http://schema.org",
  "@type": "Restaurant",
  url: "http://www.somerestaurant.com",
  name: "Some Restaurant",
  description:
    "This is the Some Restaurant located on 345 Spear St. San Francisco, 94105 CA. It serves Indian-Mexican fusion cuisine",
  servesCuisine: ["Indian-Mexican Fusion"],
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Tacos",
      description: "Tacos inspired by India cuisine.",
      image: ["https://somerestaurant.com/some_tacos.jpg", "https://somerestaurant.com/more_tacos.jpg"],
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:22:00",
        availabilityStarts: "T8:22:00",
      },
      hasMenuItem: {
        "@type": "MenuItem",
        name: "Aloo Gobi Taco",
        description:
          "Mexico City-style street corn tortilla taco filled with a flavorful mixture of mildly south Indian spiced cauliflower, potato, tomato, onions and bell peppers.",
        offers: {
          "@type": "Offer",
          price: "3.50",
          priceCurrency: "USD",
        },
        nutrition: {
          "@type": "NutritionInformation",
          calories: "170 calories",
          fatContent: "3 grams",
          fiberContent: "2 grams",
          proteinContent: "4 grams",
        },
        suitableForDiet: "http://schema.org/GlutenFreeDiet",
      },
    },
    inLanguage: "English",
  },
};
