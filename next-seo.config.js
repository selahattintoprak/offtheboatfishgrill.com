const siteUrl = "https://www.example.com";
const path = "";
const siteName = "";
const orgName = "";
const address = {
  streetAddress: "",
  addressLocality: "",
  addressRegion: "",
  addressCountry: "",
  postalCode: "",
};

export const LocalBussinesData = {
  type: "LocalBusiness",
  id: siteUrl,
  name: siteName,
  description: "",
  url: siteUrl,
  telephone: "+1760-452-6133",
  email: "info@qcskinclinic.com.au",
  address,
  geo: {
    latitude: "",
    longitude: "",
  },
  //image: [SITE_URL + "/favicon.png", SITE_URL + "/images/main-imag.jpg"],
  image: {
    "@type": "ImageObject",
    url: siteUrl + "/images/main-imag.jpg",
    width: "1000",
    height: "750",
  },
  review: [
    {
      "@type": "Review",
      author: "",
      datePublished: null,
      description: "",
      reviewRating: {
        "@type": "Rating",
        bestRating: 5,
        ratingValue: "5",
        worstRating: 1,
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    reviewCount: 5,
    ratingValue: "4.2",
  },
  priceRange: "$$",
  servesCuisine: "",
  areaServed: ["Carlsbad", "Camp Pendleton", "Oceanside", "Vista"],
  sameAs: [],
  hasMenu: "",
  hasMap: "https://goo.gl/maps/XwYwnzDodY3AfWg18",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-19:00"],
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
  ],
};

const website = {
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
const webpage = {
  "@type": "WebPage",
  "@id": siteUrl + "/#/schema/webpage", //"https://www.example.com/example-post/",
  url: siteUrl + path,
  name: "Example post name",
  description: "Example post description",
  keywords: "cats,dogs,cake",
  isPartOf: {
    "@id": siteUrl + "/#/schema/website",
  },
  inLanguage: "en-US",
  datePublished: Date.now(),
  dateModified: Date.now(),
  image: [
    {
      "@id": siteUrl + "/#/schema/image/logo",
    },
    {
      "@id": siteUrl + "/#/schema/image/slideshow",
    },
    {
      "@id": siteUrl + "/#/schema/image/primary",
    },
  ],
};
const logoImage = {
  "@type": "ImageObject",
  "@id": siteUrl + "/#/schema/image/logo",
  url: siteUrl + "/static/images/logo-light.png",
  caption: "Example caption",
  width: 120,
  height: 120,
};
const websiteImage = {
  "@type": "ImageObject",
  "@id": siteUrl + "/#/schema/image/primary",
  url: siteUrl + "/static/images/about-us.jpg",
  caption: "Example caption",
  width: 120,
  height: 120,
};
const slideshowImage = {
  "@type": "ImageObject",
  "@id": siteUrl + "/#/schema/image/slideshow",
  url: siteUrl + "/static/images/slideshow.jpg",
  caption: "Example caption",
  width: 120,
  height: 120,
};
const article = {
  "@type": "Article",
  "@id": siteUrl + "/example-post/#/schema/article",
  headline: "Example article headline",
  description: "Example article description",
  isPartOf: {
    "@id": siteUrl + "/example-post/",
  },
  mainEntityOfPage: {
    "@id": siteUrl + "/example-post/",
  },
  datePublished: "2019-07-10T08:08:40+00:00",
  dateModified: "2019-07-10T08:43:03+00:00",
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
const person = {
  "@type": "Person",
  "@id": siteUrl + "/#/schema/person",
  name: "Example person name",
  image: {
    "@id": siteUrl + "/#/schema/image/abc123",
  },
  sameAs: ["https://www.wikipedia.com/example-organization", "https://www.linkedin.com/company/1234"],
};
export const logoInfo = {
  logo: siteUrl + "/images/favicon.png",
  url: siteUrl,
};

export const socialSEO = {
  type: "Person",
  name: orgName,
  url: siteUrl,
  sameAs: [
    "http://www.facebook.com/",
    "http://instagram.com/",
    "http://www.linkedin.com/in/",
    "http://plus.google.com/",
  ],
};

export default {
  title: "Home",
  titleTemplate: siteName + " | %s",
  description: "My project desc",
  openGraph: {
    type: "Organization",
    locale: "en_IE",
    site_name: siteName,
    url: siteUrl,
    image: "",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  facebook: {
    appId: "",
  },
};
