import React from "react";
import { AppProps } from "next/app";
import { PageProviderWrapper } from "../contexts/pageProvider";
import "../styles/index.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProviderWrapper>
      <Component {...pageProps} />;
    </PageProviderWrapper>
  );
}

export default MyApp;
