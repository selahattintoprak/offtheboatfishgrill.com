import { siteUrl, path } from "./constants";

export default {
  "@type": "WebPage",
  "@id": siteUrl + "/#/schema/webpage", //"https://www.example.com/example-post/",
  url: siteUrl + path,
  name: "Example post name",
  description: "Example post description",
  keywords: "cats,dogs,cake",
  isPartOf: {
    "@id": siteUrl + "/#/schema/website",
  },
  inLanguage: "en-US",
  datePublished: Date.now(),
  dateModified: Date.now(),
  image: [
    {
      "@id": siteUrl + "/#/schema/image/logo",
    },
    {
      "@id": siteUrl + "/#/schema/image/slideshow",
    },
    {
      "@id": siteUrl + "/#/schema/image/primary",
    },
  ],
};
