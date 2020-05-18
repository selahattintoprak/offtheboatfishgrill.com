import { siteUrl, address } from "./constants";

export default {
  "@type": "PostalAddress",
  "@id": siteUrl + "/#/schema/address/abc123",
  ...address,
};
