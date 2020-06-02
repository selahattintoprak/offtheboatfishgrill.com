import { siteUrl } from "../../constants";

const saladDressing = {
  "@context": "http://schema.org",
  "@type": "MenuItem",
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
  menuAddon: {
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
};

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/food/catering",
  name: "Catering Menu",
  description: "Bring unique variety to your next event. We cater small and large groups",
  //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Taco Party Platters",
      description:
        "Includes 2 tacos per person, chips & salsa, pinto beans and salad. Tacos served on corn tortillas with lettuce (cabbage for fish items), jack cheese and pico de gallo",
      //   image: "https://thisisarestaurant.com/starter_dishes.jpg",
      offers: {
        "@type": "Offer",
        availabilityEnds: "T8:21:00",
        availabilityStarts: "T8:11:00",
      },

      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Taco Pack",
          description: "",
          offers: [
            {
              "@type": "Offer",
              price: "10.25",
              priceCurrency: "USD",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                name: "Per Person",
              },
            },
          ],
          menuAddon: {
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
          // image: "https://thisisarestaurant.com/starter_dishes.jpg",
          // suitableForDiet: "http://schema.org/GlutenFreeDiet",
        },
      ],
    },
  ],
};
