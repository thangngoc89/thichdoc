import Header from "./Header";
import Footer from "./Footer";
import d from "../design";
import Head from "next/head";

const App = ({ children, title }) => (
  <div>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.6.2/css/tachyons.min.css"
      />
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

export default App;
