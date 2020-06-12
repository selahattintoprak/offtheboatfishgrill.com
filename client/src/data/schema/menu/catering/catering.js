import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "Menu",
  "@id": siteUrl + "/#/schema/menu/catering",
  name: "Catering",
  description: "Bring unique variety to your next event. We cater small and large groups",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    { "@id": siteUrl + "/#/schema/menu-section/catering/appetizers" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/desserts" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/grilled-meats-seafood" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/off-the-charbroiler" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/pita-wraps" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/salads" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/sides" },
    { "@id": siteUrl + "/#/schema/menu-section/catering/taco-party-platters" },
  ],
};
