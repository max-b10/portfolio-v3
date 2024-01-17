import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primeflex/primeflex.css";

import "../styles/_variables.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no,maximum-scale=1.0"
        />
        <title>Max Bungay</title>
        <meta
          name="description"
          content="Max Bungay's professional portfolio showcasing front end web development projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          revalidateIfStale: false,
          revalidateOnMount: true,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
