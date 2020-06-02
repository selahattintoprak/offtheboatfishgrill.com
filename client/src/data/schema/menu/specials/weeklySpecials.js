import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "Menu",
  "@id": siteUrl + "/#/schema/menu/weekly-specials",
  name: "Weekly Specials",
  description: "",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:18:00",
    availabilityStarts: "T8:15:00",
  },
  temporalCoverage: "Mo,Tu,Wd,Th,Fri 11:00-21:00",
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Spicy Poke Bowl",
      description: "Rice, cabbage, avocado, spicy tartar, ponzu and pico de gallo",
      offers: [
        {
          "@type": "Offer",
          name: "Salmon",
          price: "9.95",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Ahi",
          price: "9.95",
          priceCurrency: "USD",
        },
      ],
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Chicken Salad & Soup",
      description: "Chicken Kabob Salad with choice of lentil or cajun fish tortilla soup.",
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
      name: "Spicy BBQ Pulled Pork",
      description: "Served with rice, salad and beans.",
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
      name: "Chicken Kabob Wrap w/salad or soup",
      description: "Chicken pita wrap with a choice of salad or soup.",
      offers: {
        "@type": "Offer",
        price: "9.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
