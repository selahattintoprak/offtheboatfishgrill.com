import { siteName, siteUrl } from "./constants";
export default {
  "@context": "http://schema.org",
  "@id": siteUrl + "/#/schema/menu",
  "@type": "Restaurant",
  url: siteUrl,
  name: siteName,
  image: {
    "@id": siteUrl + "/#/schema/image/primary",
  },
  description: "This is an example restaurant that serves Seafood, Middle Eastern, Mediterranean",
  servesCuisine: ["Seafood", "Middle Eastern", "Mediterranean"],
  hasMenu: {
    "@type": "Menu",
    /*  name: "Dine-In Menu",
    description: "Menu for in-restaurant dining only.", */
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Menu",
        description: "All Menu Items",
        image: "https://thisisarestaurant.com/dinner_dishes.jpg",
        offers: {
          "@type": "Offer",
          availabilityEnds: "T8:21:00",
          availabilityStarts: "T8:11:00",
        },
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "Starters",
            description: "Appetizers and such",
            image: "https://thisisarestaurant.com/starter_dishes.jpg",
            offers: {
              "@type": "Offer",
              availabilityEnds: "T8:21:00",
              availabilityStarts: "T8:11:00",
            },
            hasMenuItem: {
              "@type": "MenuItem",
              name: "Potato Skins",
              description: "Small serving of stuffed potato skins.",
              offers: {
                "@type": "Offer",
                price: "7.49",
                priceCurrency: "USD",
              },
              suitableForDiet: "http://schema.org/GlutenFreeDiet",
            },
          },
          {
            "@type": "MenuSection",
            name: "Soups & Salads",
            description: "Salads and a few choices of soup",
            image: "https://thisisarestaurant.com/soup_and_salad_dishes.jpg",
            offers: {
              "@type": "Offer",
              availabilityEnds: "T8:21:00",
              availabilityStarts: "T8:11:00",
            },
            hasMenuItem: {
              "@type": "MenuItem",
              name: "Pea Soup",
              description: "Creamy pea soup topped with melted cheese and sourdough croutons.",
              offers: {
                "@type": "Offer",
                price: "3.49",
                priceCurrency: "USD",
              },
            },
          },
        ],
      },
    ],
  },
};
