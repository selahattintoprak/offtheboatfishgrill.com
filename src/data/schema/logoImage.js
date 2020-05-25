import { siteUrl, siteName } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": siteUrl + "/#/schema/image/logo",
  url: siteUrl + "/static/images/logo-light.png",
  caption: siteName,
  width: 120,
  height: 120,
};
