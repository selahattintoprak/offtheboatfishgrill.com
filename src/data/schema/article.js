import { siteUrl } from "./constants";
import content from "../content";
import { strip, newDate } from "../../../lib/schema";

export default {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": siteUrl + "/#/schema/article",
  headline: "Example article headline",
  description: "Example article description",
  articleBody: strip(content),
  keywords: "",
  isPartOf: {
    "@id": siteUrl + "/#/schema/webpage",
  },
  mainEntityOfPage: {
    "@id": siteUrl + "/#/schema/webpage",
  },
  datePublished: newDate(),
  dateModified: newDate(),
  commentCount: 6,
  articleSection: "Cats,Dogs,Recipes",
  author: {
    "@id": siteUrl + "/#/schema/organization",
  },
  publisher: {
    "@id": siteUrl + "/#/schema/organization",
  },
  image: [
    {
      "@id": siteUrl + "/#/schema/image/slideshow",
    },
    {
      "@id": siteUrl + "/#/schema/image/primary",
    },
  ],
  video: [],
};
