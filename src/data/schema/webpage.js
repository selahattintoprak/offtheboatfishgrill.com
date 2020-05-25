import { siteUrl, path, siteName, metaDescription, keywords } from "./constants";
import { newDate } from "../../../lib/schema";

export default {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": siteUrl + "/#/schema/webpage", //"https://www.example.com/example-post/",
  url: siteUrl + path,
  name: siteName,
  description: metaDescription,
  keywords,
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
