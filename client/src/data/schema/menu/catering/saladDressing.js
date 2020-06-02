import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuItem",
  "@id": siteUrl + "/#/schema/menu-item-addon/salad-dressing",
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
