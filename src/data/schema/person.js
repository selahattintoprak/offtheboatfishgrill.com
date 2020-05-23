import { siteUrl } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": siteUrl + "/#/schema/person",
  name: "Example person name",
  image: {
    "@id": siteUrl + "/#/schema/image/abc123",
  },
  sameAs: ["https://www.wikipedia.com/example-organization", "https://www.linkedin.com/company/1234"],
};
