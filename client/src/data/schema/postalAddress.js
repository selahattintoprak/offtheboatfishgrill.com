import { siteUrl, address, addressTustin, addressPlacentia } from "./constants";

export default [
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    "@id": siteUrl + "/#/schema/address/tustin",
    ...addressTustin,
  },
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    "@id": siteUrl + "/#/schema/address/placentia",
    ...addressPlacentia,
  },
];
