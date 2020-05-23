import { siteUrl } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": siteUrl + "/#/schema/article",
  headline: "Example article headline",
  description: "Example article description",
  articleBody: "",
  keywords: "",
  isPartOf: {
    "@id": siteUrl + "/#/schema/webpage",
  },
  mainEntityOfPage: {
    "@id": siteUrl + "/#/schema/webpage",
  },
  datePublished: Date.now(),
  dateModified: Date.now(),
  commentCount: 6,
  articleSection: "Cats,Dogs,Recipes",
  author: {
    "@id": siteUrl + "/#/schema/person",
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
