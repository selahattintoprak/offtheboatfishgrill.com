export default {
  "@type": "MenuSection",
  name: "Catering Menu",
  description: "Bring unique variety to your next event. We cater small and large groups",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
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
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Ground Sirloin Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lamb Gyro",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Fish (fresh cod)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi-Mahi",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "35.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Wild Salmon",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "35.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Caramelized Pork (carnitas)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet-Mignon Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "95.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Sides (A la carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Basmati Rice",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "19.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "35.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Pinto Beans",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "19.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "35.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Fire Roasted Corn",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Veggies",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Sauteed Mushrooms",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Babaghanoush Sm (roasted eggplant dip)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Hummus Dip",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Tzatziki Dip",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Pita",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "6.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "11.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Taco Party Platters",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Grilled Meats & Seafood (A La Carte)",
      description: "Small (serves 4-5) Large (Serves 8-10)",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
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
  },
};
