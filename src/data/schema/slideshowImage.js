import { siteUrl, siteName } from "./constants";

export default {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": siteUrl + "/#/schema/image/slideshow",
  url: siteUrl + "/static/images/slideshow.jpg",
  caption: siteName,
  width: 120,
  height: 120,
};
