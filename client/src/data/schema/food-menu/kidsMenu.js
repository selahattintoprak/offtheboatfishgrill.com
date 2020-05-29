export default {
  "@type": "MenuSection",
  name: "Kids Menu",
  description: "(Under 12 yrs) Pick any protein a la carte with 1 side: Fries, rice, veggies or pita",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:21:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Mini Burger",
      description: "Ground sirloin or chicken, with fries",
      offers: {
        "@type": "Offer",
        price: "4.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Pita Quesadilla",
      description: "",
      offers: {
        "@type": "Offer",
        price: "5.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
