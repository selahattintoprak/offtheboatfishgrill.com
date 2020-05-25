import { siteUrl, siteName, address } from "./constants";
import areaServed from "./areaServed";
export default [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": siteUrl + "/#/schema/service/iphone-repair",
    name: "iPhone Repair Services",
    serviceType: "Electronics Repair",
    provider: {
      "@id": siteUrl + "/#/schema/organization",
    },
    description:
      "We are the #1 Trusted iPhone screen repair, battery replacement and camera replacement shop near you. When it comes to iPhone repair, join the thousands of other satisfied customers who rely on us for expert iPhone repair.",
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "iPhone Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "iPhone Screen Repair",
        },
        {
          "@type": "Offer",
          name: " iPhone Battery Replacement",
        },
        {
          "@type": "Offer",
          name: " iPhone Camera Replacement",
        },
      ],
    },
    image: [
      {
        "@id": siteUrl + "/#/schema/image/primary",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": siteUrl + "/#/schema/service/ipad-repair",
    name: "iPad Repair Services",
    serviceType: "Electronics Repair",
    provider: {
      "@id": siteUrl + "/#/schema/organization",
    },
    description:
      "iPad repair is what iSquad Repair does best. We have fixed thousands of iPads since our business inception, and continue to provide oustanding service to our customers. We fix it all. Be it a broken LCD or cracked screen, battery replacement, home button repair, or microphone replacement, you can rest assured the job will get done affordably and quickly. Bring your iPad to us for repair at one of our 6 locations.",
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "iPad Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "iPad Screen Repair",
        },
        {
          "@type": "Offer",
          name: "iPad Battery Replacement",
        },
        {
          "@type": "Offer",
          name: "iPad Camera Replacement",
        },
      ],
    },
    image: [
      {
        "@id": siteUrl + "/#/schema/image/primary",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": siteUrl + "/#/schema/service/samsung-phoner-repair",
    name: "Samsung Phone Repair Services",
    serviceType: "Electronics Repair",
    provider: {
      "@id": siteUrl + "/#/schema/organization",
    },
    description:
      "We specialize in Samsung Galaxy phone repair. Need a screen replacement? We can have your phone fixed in 30 minutes or less while you wait. We also repair the camera, charging port and we do battery replacement. All of our services come with a lifetime warranty and you don\u2019t pay until you are 100% satisfied with the results. Bring it to iSquad Repair to get the job done right. We have 5 locations throughout San Diego.",
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Samsung Phone Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Samsung Phone Screen Repair",
        },
        {
          "@type": "Offer",
          name: "Samsung Phone Battery Replacement",
        },
        {
          "@type": "Offer",
          name: "Samsung Phone Camera Replacement",
        },
      ],
    },
    image: [
      {
        "@id": siteUrl + "/#/schema/image/primary",
      },
    ],
  },
];
