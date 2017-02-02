import React from "react";
import App from "../components/App";

const HomePage = () => {
  return (
    <App title="Trang chủ">
      <style jsx>
        {
          `
        article {
          background-image: url(/static/bg.png);
          background-repeat: no-repeat;
          height: 25em;
        }

        @media (min-width: 30em) {
          article {
            height: 30em;
          }
        }
      `
        }
      </style>
      <article
        className="cover flex flex-column items-center justify-center white tc"
      >
        <h1 className="bold">Người nổi tiếng đọc gì?</h1>
        <p className="tracked">
          Khám phá tủ sách người nổi tiếng và tạo tủ sách của riêng bạn
        </p>
      </article>
    </App>
  );
};

export default HomePage;
