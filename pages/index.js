import React from "react";
import App from "../components/App";

const HomePage = () => {
  return (
    <App>
      <style jsx>
        {
          `
        article {
          background-image: url(/static/bg.png);
          background-repeat: no-repeat;
          height: 25em;
        }
      `
        }
      </style>
      <article className="cover" />
    </App>
  );
};

export default HomePage;
