import React from "react";
import "../styles/globals.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

let theme = createTheme({
  typography: {
      fontFamily: [
          'Poppins'
      ].join(','),
      h1: {
          fontWeight: 800,
          fontSize: 64,
      },
      h2: {
          fontWeight: 800,
          fontSize: 48,
      },
      h3: {
          fontWeight: 700,
          fontSize: 28,
      },
      h4: {
        fontWeight: 500,
        fontSize: 24,
      },
      h5_bold: {
          fontWeight: 500,
          fontSize: 18,
      },
      h5: {
          fontWeight: 400,
          fontSize: 18,
      }
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Header />
        <main>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </main>
        <Footer />
      </React.Fragment>
    </ApolloProvider>
  );
}

export default MyApp;
