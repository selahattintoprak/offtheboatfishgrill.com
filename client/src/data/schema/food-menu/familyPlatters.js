import { siteUrl } from "../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/family-platters",
  name: "Family Platters",
  description: "Great for sharing! Serves 3 - 4 For catering information, please contact us at (714) 544-1900",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:21:00",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Mixed Grill",
      description:
        "Three meat skewers; filet mignon, chicken & ground sirloin. Served with basmati rice, salad, hummus, tzatziki, grilled veggies & pita bread.",
      offers: {
        "@type": "Offer",
        price: "29.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Tablita",
      description:
        "Carnitas, chicken and filet mignon. Served with rice, beans, salad, tortillas, grilled veggies & pico de gallo.",
      offers: {
        "@type": "Offer",
        price: "32.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
    {
      "@type": "MenuItem",
      name: "Seafood Tablita",
      description:
        "Grilled shrimp, wild salmon and barramundi (Asian Seabass). Served with rice, beans, salad, tortillas, grilled veggies & pico de gallo.",
      offers: {
        "@type": "Offer",
        price: "35.95",
        priceCurrency: "USD",
      },
      // suitableForDiet: "http://schema.org/GlutenFreeDiet",
    },
  ],
};
