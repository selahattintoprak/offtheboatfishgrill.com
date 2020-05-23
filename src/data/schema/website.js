import { siteUrl, siteName } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteUrl + "/#/schema/website",
  url: siteUrl,
  name: siteName,
  description: "",
  potentialAction: {
    "@type": "SearchAction",
    target: siteUrl + "?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@id": siteUrl + "/#/schema/organization",
  },
};
