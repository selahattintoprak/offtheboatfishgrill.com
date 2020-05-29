export default {
  "@type": "MenuSection",
  name: "Desserts",
  description: "",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Banana Banoffi",
      description: "",
      offers: {
        "@type": "Offer",
        price: "5.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Baklava (3pc)",
      description: "",
      offers: {
        "@type": "Offer",
        price: "4.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
