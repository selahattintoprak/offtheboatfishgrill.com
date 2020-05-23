import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

import theme from "../src/theme";

import Router from "next/router";
import * as gtag from "../lib/gtag";

import SEO from "../next-seo.config";
import website from "../src/data/schema/website";
import webpage from "../src/data/schema/webpage";
import localBussinesData from "../src/data/schema/localBussinesData";
import postalAddress from "../src/data/schema/postalAddress";
import services from "../src/data/schema/services";
import logoImage from "../src/data/schema/logoImage";
import slideshowImage from "../src/data/schema/slideshowImage";
import pirmaryImage from "../src/data/schema/pirmaryImage";

import { StylesStyles as UIStyles } from "../ui-styles/styles";
import GlobalStyles from "../styles/global.scss";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
import { Person } from "schema-dts";
import { JsonLd } from "react-schemaorg";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <JsonLd
            item={[
              webpage,
              website,
              { ...localBussinesData },
              { ...postalAddress },
              ...services,
              logoImage,
              slideshowImage,
              pirmaryImage,
            ]}
          />
          {/* <LocalBusinessJsonLd {...localBussinesData} /> */}
          <Component {...pageProps} />
          <UIStyles />
          <style jsx global>
            {GlobalStyles}
          </style>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
