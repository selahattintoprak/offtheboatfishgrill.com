import { siteUrl } from "../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/soft-tacos",
  name: "Soft Tacos",
  description:
    "Served on corn tortillas, lettuce (cabbage for fish items), jack cheese, pico de gallo & garlic sauce Combo includes 2 tacos, rice and beans. (Sub tortilla for lettuce 25¢)",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
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
          offers: [
            {
              "@type": "Offer",
              price: "2.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "7.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Battered Fish (COD)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "3.25",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "3.25",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Wild Salmon",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "3.50",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Barramundi",
          description: "Asian seabass w/Veracruzano",
          offers: [
            {
              "@type": "Offer",
              price: "3.50",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
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
              price: "4.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "12.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Battered Shrimp",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "4.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "12.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lobster",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "6.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "15.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
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
      name: "Meats",
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
          name: "Grilled Chicken",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "2.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Carnitas",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "3.25",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet Mignon",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "3.50",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "10.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
              },
            },
          ],
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lamb Gyro (w/ Tzatziki)",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "2.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
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
          name: "Vegie-Feta",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "2.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Single",
              },
            },
            {
              "@type": "Offer",
              price: "8.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Taco Plate",
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
