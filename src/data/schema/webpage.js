import { siteUrl, path } from "./constants";
import { newDate } from "../../../lib/schema";

export default {
  "@context": "https://schema.org",
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
  datePublished: newDate(),
  dateModified: newDate(),
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
