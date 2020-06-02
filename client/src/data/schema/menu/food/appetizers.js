import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/appetizers",
  name: "Appetizers",
  description: "Appetizers and such",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:21:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Chips & Salsa",
      description: "",
      offers: {
        "@type": "Offer",
        price: "3.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Chips & Guac(6 oz)",
      description: "",
      offers: {
        "@type": "Offer",
        price: "6.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Shrimp Ceviche",
      description: "On tostada",
      offers: {
        "@type": "Offer",
        price: "4.25",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Ahi Poke",
      description: "On tostada",
      offers: {
        "@type": "Offer",
        price: "4.25",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Fried Calamari",
      description: "",
      offers: {
        "@type": "Offer",
        price: "6.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Soft Shell Crab",
      description: "",
      offers: {
        "@type": "Offer",
        price: "6.95",
        priceCurrency: "USD",
      },
      // image: "https://thisisarestaurant.com/starter_dishes.jpg",
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
