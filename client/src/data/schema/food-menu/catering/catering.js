import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "MenuSection",
  "@id": siteUrl + "/#/schema/menu-section/catering",
  name: "Catering Menu",
  description: "Bring unique variety to your next event. We cater small and large groups",
  // image: "https://thisisarestaurant.com/starter_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    { "@id": siteUrl + "/#/schema/menu-section/appetizers" },
    { "@id": siteUrl + "/#/schema/menu-section/desserts" },
    { "@id": siteUrl + "/#/schema/menu-section/grilled-meats-seafood" },
    { "@id": siteUrl + "/#/schema/menu-section/off-the-charbroiler" },
    { "@id": siteUrl + "/#/schema/menu-section/pita-wraps" },
    { "@id": siteUrl + "/#/schema/menu-section/salads" },
    { "@id": siteUrl + "/#/schema/menu-section/sides" },
    { "@id": siteUrl + "/#/schema/menu-section/taco-party-platters" },
  ],
};
