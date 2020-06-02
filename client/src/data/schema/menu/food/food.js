import { siteUrl } from "../../constants";

export default {
  "@context": "http://schema.org",
  "@type": "Menu",
  "@id": siteUrl + "/#/schema/menu",
  name: "Menu",
  description: "All Menus",
  // image: "https://thisisarestaurant.com/dinner_dishes.jpg",
  offers: {
    "@type": "Offer",
    availabilityEnds: "T8:21:00",
    availabilityStarts: "T8:11:00",
  },
  hasMenuSection: [
    { "@id": siteUrl + "/#/schema/menu-section/food/appetizers" },
    { "@id": siteUrl + "/#/schema/menu-section/food/baha-bowls" },
    { "@id": siteUrl + "/#/schema/menu-section/food/desserts" },
    { "@id": siteUrl + "/#/schema/menu-section/food/family-platters" },
    { "@id": siteUrl + "/#/schema/menu-section/food/happy-hour" },
    { "@id": siteUrl + "/#/schema/menu-section/food/kids-menu" },
    { "@id": siteUrl + "/#/schema/menu-section/food/mediterranean-apps" },
    { "@id": siteUrl + "/#/schema/menu-section/food/off-the-charbroiler-plates" },
    { "@id": siteUrl + "/#/schema/menu-section/food/pita-wraps" },
    { "@id": siteUrl + "/#/schema/menu-section/food/proteins-a-la-carte" },
    { "@id": siteUrl + "/#/schema/menu-section/food/salads" },
    { "@id": siteUrl + "/#/schema/menu-section/food/sides" },
    { "@id": siteUrl + "/#/schema/menu-section/food/single-sliders" },
    { "@id": siteUrl + "/#/schema/menu-section/food/soft-tacos" },
    { "@id": siteUrl + "/#/schema/menu-section/food/soups" },
  ],
  inLanguage: "English",
};
