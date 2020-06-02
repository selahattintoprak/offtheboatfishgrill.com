import { siteUrl } from "../../constants";
export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/baha-bowls",
  name: "Baja Bowls",
  description:
    "Served with basmati rice, lettuce (cabbage for fish items), jack cheese, pinto beans & pico de gallo. (Sub rice for organic cauliflower rice 75¢ / Add avocado or guac 95¢)",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:21:00",
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
        availabilityStarts: "T8:21:00",
      },
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Grilled Fish (COD)",
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
          name: "Battered Fish (COD)",
          description: "Ensenada style",
          offers: {
            "@type": "Offer",
            price: "9.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
        {
          "@type": "MenuItem",
          name: "Grilled Salmon",
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
          name: "Grilled Mahi-Mahi",
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
            price: "12.95",
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
            price: "13.95",
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
          name: "Chicken Kabob",
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
          name: "Lamb Gyro",
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
          name: "Carnitas (Carmelized Pork)",
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
          name: "Filet Mignon",
          description: "",
          offers: {
            "@type": "Offer",
            price: "11.95",
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
            price: "7.95",
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
            price: "9.95",
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
            price: "9.95",
            priceCurrency: "USD",
          },
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
  ],
};
