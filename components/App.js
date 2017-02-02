import Header from "./Header";
import Footer from "./Footer";
import d from "../design";
import Head from "next/head";

export default ({ children, title }) => (
  <main>
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        flex: 1;
        -ms-flex:1;
        -webkit-box-flex:1;
        -webkit-flex:1;
      }
      .flex-2 {
        flex: 2;
        -ms-flex:2;
        -webkit-box-flex:2;
        -webkit-flex:2;
      }
      .flex-3 {
        flex: 3;
        -ms-flex:3;
        -webkit-box-flex:3;
        -webkit-flex:3;
      }
      `
      }
    </style>
  </main>
);
