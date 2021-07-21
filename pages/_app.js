/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';
import ThemeSwitch from '../src/components/commons/Menu/ThemeSwitch';
import WebsiteGlobalProvider from '../src/components/wrappers/WebsitePage/provider';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps, serverThemeCookie }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/instagram.min.css" />
      </Head>
      <WebsiteGlobalProvider serverThemeCookie={serverThemeCookie}>
        <Component {...pageProps} />
      </WebsiteGlobalProvider>
    </>
  );
}
