import { siteUrl, siteName, address, telephone, email, sameAs } from "./constants";

export default {
  "@type": "Organization",
  "@id": siteUrl + "/#/schema/organization",
  url: siteUrl,
  name: siteName,
  telephone,
  email,
  logo: {
    "@id": siteUrl + "/#/schema/image/logo",
  },
  image: {
    "@id": siteUrl + "/#/schema/image/primary",
  },
  sameAs,
};
