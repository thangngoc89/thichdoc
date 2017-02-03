import React from "react";
import App from "../components/App";
import FeatureFigure from "../components/FeatureFigure";

const HomePage = () => {
  return (
    <App title="Trang chủ">
      <style jsx>
        {
          `
        article {
          background-image: url(/static/images/book-bg.jpg);
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
      <article className="cover">
        <div
          className="flex flex-column items-center justify-center white tc bg-black-80 h-100 w-100"
        >
          <h1 className="bold">Đọc sách thật phong cách</h1>
          <p className="tracked">
            Khám phá tủ sách người nổi tiếng và tạo tủ sách của riêng bạn
          </p>
        </div>
      </article>
      <main className="mw9 center pv4 ph3 ph4-ns">
        <div>
          <h1 className="ttu f4 link black">Tủ sách nổi bật</h1>
          <FeatureFigure />
        </div>
      </main>
    </App>
  );
};

export default HomePage;
