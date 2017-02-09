import Header from "./Header";
import Footer from "./Footer";
import d from "../design";
import Head from "next/head";

export default ({ children, title }) => (
  <div>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/static/css/tachyons.min.ai.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#f14f4a"
      />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Thích đọc" />
      <meta name="application-name" content="Thích đọc" />
      <meta
        name="msapplication-config"
        content="/static/favicons/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <title>{title} | Thích đọc</title>
    </Head>
    <Header />
    {children}
    <Footer />
    <style jsx global>
      {
        `
      * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
      body {
        margin: 0;
        padding: 0;
        background: ${d.colorSilver}
      }
      .flex-1 {
        flex: 1 1 auto;
        -ms-flex:1 1 1 auto;
        -webkit-box-flex:1 1 autp;
        -webkit-flex:1 1 auto;
      }
      .flex-2 {
        flex: 2 2 auto;
        -ms-flex:2 2 auto;
        -webkit-box-flex:2 2 auto;
        -webkit-flex:2 2 auto;
      }
      .flex-3 {
        flex: 3 3 auto;
        -ms-flex:3 3 auto;
        -webkit-box-flex:3 3 auto;
        -webkit-flex:3 3 auto;
      }
      @media (min-width: 30em) {
        .flex-1-ns {
          flex: 1 1 auto;
          -ms-flex:1 1 1 auto;
          -webkit-box-flex:1 1 autp;
          -webkit-flex:1 1 auto;
        }
        .flex-2-ns {
          flex: 2 2 auto;
          -ms-flex:2 2 auto;
          -webkit-box-flex:2 2 auto;
          -webkit-flex:2 2 auto;
        }
        .flex-3-ns {
          flex: 3 3 auto;
          -ms-flex:3 3 auto;
          -webkit-box-flex:3 3 auto;
          -webkit-flex:3 3 auto;
        }
      }
      .fade-appear {
        opacity: 0.01;
      }
      .fade-appear.fade-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in;
      }
      `
      }
    </style>
  </div>
);
