import { siteUrl } from "../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/off-the-charbroiler-plates",
  name: "Off The Charbroiler - Plates",
  description: "Served on basmati rice with veggies & salad. (Sub rice for organic cauliflower rice 75¢)",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:21:00",
  },
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Fish (Topped with Pico De Gallo)",
      description: "",
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:21:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Fish & Chips (COD)",
          description: "Battered cod & seasoned fries (or salad)",
          offers: {
            "@type": "Offer",
            price: "9.95",
            priceCurrency: "USD",
          },
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Fish (COD)",
          description: "",
          offers: {
            "@type": "Offer",
            price: "10.95",
            priceCurrency: "USD",
          },
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Battered Fish (COD)",
          description: "",
          offers: {
            "@type": "Offer",
            price: "11.95",
            priceCurrency: "USD",
          },
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Mahi-Mahi",
          description: "",
          offers: {
            "@type": "Offer",
            price: "11.95",
            priceCurrency: "USD",
          },
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Wild Salmon",
          description: "",
          offers: {
            "@type": "Offer",
            price: "12.95",
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
            price: "12.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Seared Ahi",
          description: "",
          offers: {
            "@type": "Offer",
            price: "13.95",
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
            price: "14.95",
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
            price: "15.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Lobster Puerto Nuevo",
          description: "",
          offers: {
            "@type": "Offer",
            price: "M/P",
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
        availabilityStarts: "T8:21:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Ground Sirloin Kabob",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "9.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "1 Skewer",
              },
            },
            {
              "@type": "Offer",
              price: "12.95",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "2 Skewer",
              },
            },
          ],
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Chicken Kabob",
          description: "",
          offers: {
            "@type": "Offer",
            price: "11.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Filet Mignon Kabob",
          description: "",
          offers: {
            "@type": "Offer",
            price: "14.95",
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
            price: "13.95",
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
            price: "12.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Surf N' Turf",
          description: "Filet mignon and shrimp",
          offers: {
            "@type": "Offer",
            price: "22.95",
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
        availabilityStarts: "T8:21:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Falafel",
          description: "",
          offers: {
            "@type": "Offer",
            price: "11.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Vegie-Feta",
          description: "",
          offers: {
            "@type": "Offer",
            price: "12.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
  ],
};
