import { siteName, siteUrl, metaDescription } from "./src/data/schema/constants";
export default {
  title: siteName,
  titleTemplate: siteName + " | %s",
  description: metaDescription,
  openGraph: {
    type: "Organization",
    locale: "en_IE",
    site_name: siteName,
    url: siteUrl,
    image: siteUrl + "/static/images/primary.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  /* twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  facebook: {
    appId: "",
  }, */
};
