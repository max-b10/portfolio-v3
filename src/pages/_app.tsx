import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css

import "primeflex/primeflex.css";

import "../styles/_variables.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Head from "next/head";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
        <link rel="icon" href="/images/MB.png" />
      </Head>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          revalidateIfStale: false,
          revalidateOnMount: true,
        }}
      />
      <main className={raleway.className}>
        <Component className={raleway.className} {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
