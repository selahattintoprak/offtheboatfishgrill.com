export default {
  "@type": "MenuSection",
  name: "Single Sliders",
  description: "",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Fish",
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
          name: "Salmon",
          description: "Capers, onions & F.O.B sauce",
          offers: {
            "@type": "Offer",
            price: "3.25",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Mahi",
          description: "Capers, onions & F.O.B sauce",
          offers: {
            "@type": "Offer",
            price: "3.25",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Barramundi",
          description: "With Veracruzano & F.O.B sauce",
          offers: {
            "@type": "Offer",
            price: "3.25",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Ground Sirloin",
          description: "Pickles, onions, tomatoes & garlic sauce",
          offers: {
            "@type": "Offer",
            price: "2.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Carnitas",
          description: "Pickles, onions, tomatoes & garlic sauce",
          offers: {
            "@type": "Offer",
            price: "2.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lamb Gyro",
          description: "Pickles, onions, tomatoes & garlic sauce",
          offers: {
            "@type": "Offer",
            price: "2.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
  ],
};
