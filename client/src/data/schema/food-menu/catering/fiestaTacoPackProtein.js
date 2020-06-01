import { siteUrl } from "../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuItem",
  "@id": siteUrl + "/#/schema/menu-item-addon/taco-pack-protein",
  name: "Fiesta Taco Pack Protein",
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