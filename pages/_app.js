import Head from "next/head";
import React from "react";
import '../styles/globals.css'


import '../styles/components/button.css'


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;