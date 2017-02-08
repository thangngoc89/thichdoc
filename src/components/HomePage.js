import React from "react";
import App from "../components/App";
import FeatureFigures from "../components/FeatureFigures";
import withData from "../lib/withData";

const HomePage = () => {
  return (
    <App title="Trang chủ">
      <style jsx>
        {
          `
        .cover {
          background-image: url(/static/images/book-bg.jpg);
          background-repeat: no-repeat;
          height: 25em;
        }

        @media (min-width: 30em) {
          .cover {
            height: 30em;
          }
        }
      `
        }
      </style>
      <main>
        <section className="cover">
          <article
            className="flex flex-column items-center justify-center white tc bg-black-80 h-100 w-100"
          >
            <h1 className="bold">Đọc sách thật phong cách</h1>
            <p className="tracked">
              Khám phá tủ sách người nổi tiếng và tạo tủ sách của riêng bạn
            </p>
          </article>
        </section>
        <section className="mw9 center pv4 ph3 ph4-ns">
          <article>
            <h1 className="ttu f4 link black">Tủ sách nổi bật</h1>
            <FeatureFigures />
          </article>
        </section>
      </main>
    </App>
  );
};

export default withData(HomePage);
