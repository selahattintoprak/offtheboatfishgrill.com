import { siteUrl } from "../constants";
export default {
  "@context": "http://schema.org",
  "@type": "Menu",
  "@id": siteUrl + "/#/schema/menu",
  name: "Menu",
  description: "All Menus",
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
        { "@id": siteUrl + "/#/schema/menu-section/appetizers" },
        { "@id": siteUrl + "/#/schema/menu-section/baha-bowls" },
       
        { "@id": siteUrl + "/#/schema/menu-section/desserts" },
        { "@id": siteUrl + "/#/schema/menu-section/family-platters" },
        { "@id": siteUrl + "/#/schema/menu-section/happy-hour" },
        { "@id": siteUrl + "/#/schema/menu-section/kids-menu" },
        { "@id": siteUrl + "/#/schema/menu-section/mediterranean-apps" },
        { "@id": siteUrl + "/#/schema/menu-section/off-the-charbroiler-plates" },
        { "@id": siteUrl + "/#/schema/menu-section/pita-wraps" },
        { "@id": siteUrl + "/#/schema/menu-section/proteins-a-la-carte" },
        { "@id": siteUrl + "/#/schema/menu-section/salads" },
        { "@id": siteUrl + "/#/schema/menu-section/sides" },
        { "@id": siteUrl + "/#/schema/menu-section/single-sliders" },
        { "@id": siteUrl + "/#/schema/menu-section/soft-tacos" },
        { "@id": siteUrl + "/#/schema/menu-section/soups" },
        {
          "@id": siteUrl + "/#/schema/menu-section/taco-tuesday",
        },
        { "@id": siteUrl + "/#/schema/menu-section/weekly-specials" },
      ],
    },
  ],
  inLanguage: "English",
};
