import React from "react";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";
import CardBookVertical from "./CardBookVertical";
import chunk from "../helpers/chunk";

const BookList = ({ recommendBooks }) => {
  const list = recommendBooks.map((recommendBook, i) => (
    <CardBookVertical key={i} data={recommendBook.book} />
  ));
  return (
    <div>
      <style jsx>
        {
          `
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .column {
          flex-basis: 100%;
        }

        .book-cover {
          flex: 0 0 8rem;
        }

        @media screen and (min-width: 60em) {
          .column {
            flex: 0 0 calc(50% - 1rem);
          }
        }
        `
        }
      </style>
      {chunk(recommendBooks, 2).map(row => (
        <section className="row">
          {row.map((node, i) => (
            <article
              className="column mt5 pa3 shadow-4 bg-white flex flex-column"
            >
              <div className="flex-1">
                <img
                  className="w4 shadow-5 nt5 mr3 mb1"
                  style={{ float: "left" }}
                  width="8rem"
                  height="auto"
                  src={node.book.cover}
                  title={node.book.name}
                  alt={node.book.name}
                />
                <h3 className="fs-normal mv0">
                  {node.book.name}
                </h3>
                <p className="mt1 gray f5 lh-copy pb2 bb bw2 b--light-red">
                  bởi <span className="i">{node.book.author}</span>
                </p>
                <p className="gray tj f4">
                  Tác phẩm kinh dị trinh thám khiến người xem phải ngộp thở theo dõi và ám ảnh nhiều ngày sau khi đọc. Sự kết hợp của giải phẫu học, kiến thức trinh sát hình sự và công nghệ vi tính. Bảo đảm rằng bất kỳ ai là người đam mê trinh thám sẽ tìm đọc và mê mẫn dòng sách này của Quỷ Cổ Nữ. Sau khi đọc xong tác phẩm này, hình ảnh người đàn bà ngồi chải tóc trong ánh trăng bạc sẽ là thứ nhiều người phải hoảng loạn lúc nhớ về.



                  {i % 2 === 0 &&
                    "ác phẩm này, hình ảnh người đàn bà ngồi chải tóc trong ánh trăng bạc sẽ là thứ nhiều người phải hoảng loạn lúc nhớ về."}
                </p>
              </div>
              <div className="w-100 bt b--light-gray pt3 pb2">
                a, b, c cũng nhận xét cho sách này
              </div>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
};

BookList.fragments = {
  recommendBooks: (
    gql`
    fragment FragmentBookListRecommendBooks on RecommendBooks {
      content
      book {
        ...FragmentBookBook
      }
    }
    ${CardBookVertical.fragments.book}
  `
  )
};

export default BookList;
