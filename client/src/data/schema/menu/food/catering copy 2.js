import { siteUrl } from "../../constants";

const saladDressing = {
  "@context": "http://schema.org",
  "@type": "MenuItem",
  name: "Salad Dressing",
  description: "",
  offers: [
    {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
  ],
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
  menuAddon: [
    {
      "@type": "MenuItem",
      name: "House Balsamic",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "00.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Lemon Oregano",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "00.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Soy Ginger",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "00.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Classic Caesar",
      description: "",
      offers: [
        {
          "@type": "Offer",
          price: "00.00",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/catering",
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
          //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Taco Party Platters",
      description:
        "Includes 2 tacos per person, chips & salsa, pinto beans and salad. Tacos served on corn tortillas with lettuce (cabbage for fish items), jack cheese and pico de gallo",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      menuAddon: [saladDressing],
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
            {
              "@type": "MenuItem",
              name: "Protein",
              description: "",
              offers: [
                {
                  "@type": "Offer",
                  price: "0.00",
                  priceCurrency: "USD",
                },
              ],
              // image: "https://thisisarestaurant.com/starter_dishes.jpg",
              // suitableForDiet: "http://schema.org/GlutenFreeDiet",
              menuAddon: [
                {
                  "@type": "MenuItem",
                  name: "Grilled Chicken",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Grilled Fish (COD)",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Caramelized Pork (Carnitas)",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Veggie-Feta",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
              ],
            },
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
          menuAddon: [
            {
              "@type": "MenuItem",
              name: "Protein",
              description: "",
              offers: [
                {
                  "@type": "Offer",
                  price: "0.00",
                  priceCurrency: "USD",
                },
              ],
              // image: "https://thisisarestaurant.com/starter_dishes.jpg",
              // suitableForDiet: "http://schema.org/GlutenFreeDiet",
              menuAddon: [
                {
                  "@type": "MenuItem",
                  name: "Filet-Mignon",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Grilled Salmon",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Grilled Shrimp",
                  description: "",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "00.00",
                      priceCurrency: "USD",
                    },
                  ],
                  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  // suitableForDiet: "http://schema.org/GlutenFreeDiet",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Off the Charbroiler",
      description:
        "Small (serves 4-5), Large (Serves 8-10). Served family style! Includes pita, basmati rice, salad, veggies and tzatziki",
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      menuAddon: [
        {
          "@type": "MenuItem",
          name: "Pita",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Basmati Rice",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Vegies",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Tzatziki",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Chicken Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "59.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "109.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Ground Sirloin Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "59.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "109.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Fish (Fresh COD)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "59.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "109.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi-Mahi",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "69.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "119.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Wild Salmon",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "69.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "119.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Caramelized Pork (Carnitas)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "59.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "109.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet-Mignon Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "79.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "159.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Pita Wraps",
      description:
        "Small (serves 4-5), Large (Serves 8-10). Wrapped with mixed greens, onions, pickles, tomatoes & garlic sauce spread. Includes a choice of basmati rice, salad or tortilla chips.",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      menuAddon: [
        {
          "@type": "MenuItem",
          name: "Basmati Rice",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Tortilla Chips",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "00.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Chicken Kabob Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "110.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Falafel Wrap (V)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "100.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Ground Sirloin Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "110.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Veggie-Feta Wrap (V)",
          description: "Zucchini, squash, onions, feta, tomatoes & roasted red pepper",
          offers: [
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "110.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lamb Gyro Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "55.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "110.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Salmon Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "130.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet-Mignon Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "130.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi Wrap",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
            {
              "@type": "Offer",
              price: "130.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Large",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
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
          description:
            "Hummus, tzatziki, babaghanoush (fire roasted eggplant dip) and falafel. Served with grilled pita",
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
    },
    {
      "@type": "MenuSection",
      name: "Salads",
      description: "Serves 8-10. Salads inlcude mixed greens, tomatoes, cucumbers, red onions & fire roasted corn",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },
      menuAddon: [saladDressing],
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Greek Salad (V)",
          description: "Includes Kalamata olives and feta cheese",
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
          name: "Chicken Kabob Salad",
          description: "",
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
          name: "Grilled Salmon Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "89.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "85.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Veggie-Feta Salad (V)",
          description: "Includes zucchini, squash, onions, tomatoes, feta and roasted red pepper.",
          offers: [
            {
              "@type": "Offer",
              price: "75.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Seared Ahi Salad",
          description: "Make it cajun (on request).",
          offers: [
            {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Shrimp Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Small",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet-Mignon Salad",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "USD",
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Dessert",
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
          name: "Banana Cream Pie",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "34.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "6 pce",
              },
            },
            {
              "@type": "Offer",
              price: "59.00",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "12 pce",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
  ],
};
