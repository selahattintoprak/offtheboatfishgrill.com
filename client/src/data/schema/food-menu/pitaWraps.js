export default {
  "@type": "MenuSection",
  name: "Pita Wraps",
  description:
    "Wrapped with greens, tomatoes, pickes, onions & garlic sauce. Lettuce wrap add 95¢ (Add seasoned fries or salad for $1.95)",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
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
            name: "Grilled Fish (COD)",
            description: "",
            offers: {
              "@type": "Offer",
              price: "",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Battered Fish (COD)",
            description: "",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Grilled Mahi",
            description: "",
            offers: {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Wild Salmon",
            description: "",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Grilled Barramundi",
            description: "Asian seabass topped with Veracruzano sauce",
            offers: {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Grilled Shrimp",
            description: "",
            offers: {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Battered Shrimp",
            description: "",
            offers: {
              "@type": "Offer",
              price: "10.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Meats",
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
            name: "Chicken Kabob",
            description: "",
            offers: {
              "@type": "Offer",
              price: "6.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Lamb Gyro",
            description: "",
            offers: {
              "@type": "Offer",
              price: "7.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Ground Sirloin",
            description: "",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Carnitas",
            description: "Caramelized pork",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Filet Mignon",
            description: "",
            offers: {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Vegetarian",
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
            name: "Falafel",
            description: "",
            offers: {
              "@type": "Offer",
              price: "6.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Veggie-Feta",
            description: "",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: "Fried Cauliflower",
            description: "",
            offers: {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
            },
            // suitableForDiet: "http://schema.org/GlutenFreeDiet",
          },
        ],
      },
    ],
  },
};
