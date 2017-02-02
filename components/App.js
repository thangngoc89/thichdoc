import Header from "./Header";
import d from "../design";
import Head from "next/head";

export default ({ children, title }) => (
  <main>
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/static/css/tachyons.min.css" />
      <title>{title} | Thích đọc</title>
    </Head>
    <Header />
    {children}
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
      }
      .flex-2 {
        flex: 2;
      }
      .flex-3 {
        flex: 3;
      }
      @media (min-width: 30em) {
        .flex-3-ns {
          flex: 3;
        }
      }
      .flex-4 {
        flex: 3;
      }
      `
      }
    </style>
  </main>
);
