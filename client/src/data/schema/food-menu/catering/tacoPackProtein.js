import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuItem",
  "@id": siteUrl + "/#/schema/menu-item-addon/taco-pack-protein",
  name: "Taco Pack Protein",
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
};
