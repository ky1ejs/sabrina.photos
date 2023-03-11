import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Page } from "../components/Page";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
