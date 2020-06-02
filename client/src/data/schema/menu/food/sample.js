export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  name: "",
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
  ],
};
const nested = {
  "@type": "MenuSection",
  name: "",
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
      name: "",
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
      ],
    },
  ],
};
