import React from "react";
import App from "../components/App";
import FeatureFigures from "../components/FeatureFigures";
import withData from "../lib/withData";

const HomePage = () => {
  return (
    <App title="Đọc sách thật phong cách">
      <style jsx>
        {
          `
        .hero {
          overflow: hidden;
          z-index: 0;
          position: relative;
          width: 100%;
          height: 25em;
          background-image:url(/static/images/book-bg.jpg);
        }

        .hero::after {
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='300' width='3000' fill='#F4F7F6' fill-opacity='1'%3E%3Cpolygon points='0,300 3000,300 3000,0'%3E%3C/polygon%3E%3C/svg%3E");
          background-position: center center;
          background-repeat: no-repeat;
          content: '';
          height: 150px;
          left: 0;
          position: absolute;
          right: 0;
          width: 100%;
          z-index: 1;
          bottom: 0;
        }
        @media (min-width: 30em) {
          .hero {
            height: 30em;
          }
        }
        @media (min-width: 100em) {
          .hero {
            height: 50em;
          }
          .hero::after {
            height: 300px;
          }
        }
      `
        }
      </style>
      <main>
        <section className="hero cover">
          <div
            className="flex flex-column items-center justify-center white tc h-100 w-100 bg-black-50 ph3 ph4-ns pb5"
          >
            <h1 className="bold">Đọc sách thật phong cách</h1>
            <p className="tracked">
              Khám phá tủ sách người nổi tiếng và tạo tủ sách của riêng bạn
            </p>
          </div>
        </section>
        <section className="mw8 center ph0-ns">
          <article className="pa3">
            <h1 className="ttu f4 link black">Tủ sách nổi bật</h1>
            <FeatureFigures />
          </article>
        </section>
      </main>
    </App>
  );
};

export default withData(HomePage);
