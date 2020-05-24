import Head from "next/head";
import { siteUrl, siteName } from "../src/data/schema/constants";

export const newDate = () => {
  var dateobj = new Date();
  return dateobj.toISOString();
};
export function strip(html) {
  const one = html.replace(/<\/?[^>]+(>|$)/gm, "");
  const two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
  const three = two.replace(/(\r\n|\n|\r)/gm, "");
  return three;
}

const Schema = ({ post }) => {
  const {
    title,
    blurb,
    featuredImage,
    date,
    modified,
    slug,
    commentCount,
    author,
    ratingCount,
    ratingAverage,
    citations,
  } = post;
  const published = new Date(date);
  const copyrightYear = published.getFullYear();

  let mediaDetails, sourceUrl;

  if (featuredImage) {
    sourceUrl = featuredImage.sourceUrl;
  }

  const citationsList = citations.map((citation, i) => {
    return `{ "@type": "CreativeWork", "citation": ${JSON.stringify(citation)} }${
      i === citations.length - 1 ? "" : ","
    }\n`;
  });
  const citationsText = citationsList.join("");

  const org = `{ "@id": "${siteUrl}/#organization", "type": "Organization", "name":"${siteTitle}", "logo": {
    "@type": "ImageObject",
    "name": "${siteName} Logo",
    "width": "230",
    "height": "67",
    "url": "${siteUrl}/images/logo.png"
} }`;

  return (
    <Head>
      <script type="application/ld+json">{`
    {
      "@context":"https://schema.org/",
      "@type":"Article",
      "name":"${title}",
      ${
        ratingAverage > 4
          ? `"aggregateRating": {
        "@type":"AggregateRating",
        "ratingValue":${ratingAverage},
        "reviewCount":${ratingCount}
      },`
          : ""
      }
      "about": "${blurb}",
      "author": { "@type": "Person", "@id": "${siteUrl}/author/${author.slug}", "name": "${author.name}" },
      ${
        citationsText.length
          ? `"citation": [
        ${citationsText}
      ],`
          : ""
      }
      "commentCount": ${commentCount},
      "copyrightHolder": { "@id": "${siteUrl}/#organization" },
      "copyrightYear": ${copyrightYear},
      "datePublished": "${date}",
      "dateModified": "${modified}",
      "description": "${blurb}",
      "discussionUrl": "${siteUrl}/articles/${slug}#comments",
      "editor": { "@id": "${siteUrl}/author/${author.slug}#author" },
      "headline": "${title}",
      ${sourceUrl ? `"image": "${sourceUrl}",` : ""}
      "inLanguage": "English",
      "mainEntityOfPage": "${siteUrl}/articles/${slug}",
      "publisher": { "@id": "${siteUrl}/#organization" },
      "sourceOrganization": ${org},
      "url": "${siteUrl}/articles/${slug}"
    }
    `}</script>
    </Head>
  );
};

export default Schema;
