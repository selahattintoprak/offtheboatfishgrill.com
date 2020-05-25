import { siteUrl, address } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "PostalAddress",
  "@id": siteUrl + "/#/schema/address/abc123",
  ...address,
};
