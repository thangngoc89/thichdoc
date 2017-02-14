import React from "react";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";
import CardBookVertical from "./CardBookVertical";
import chunk from "../helpers/chunk";
import { RouteBook } from "./fragments/Route";

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
      {chunk(recommendBooks, 2).map((row, i) => (
        <section className="row" key={i}>
          {row.map((node, j) => (
            <article
              key={j}
              className="column mt5 pa3 shadow-4 bg-white flex flex-column"
            >
              <div className="flex-auto">
                <RouteBook id={node.book.id} slug={node.book.slug}>
                  <a className="link black">
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
                  </a>
                </RouteBook>
                <p className="mt1 gray f5 lh-copy pb2 bb bw2 b--light-red">
                  bởi <span className="i">{node.book.author}</span>
                </p>
                {node.content &&
                  <p className="gray tj f4 fw3">
                    {node.content}
                  </p>}
                {!node.content &&
                  <p className="gray tj f5 fw3" style={{ minHeight: "5rem" }}>
                    (chưa cập nhật nhận xét)
                  </p>}
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
        id
        slug
        author
        cover
        name
      }
    }
  `
  )
};

BookList.propTypes = {
  recommendBooks: propType(BookList.fragments).isRequired
};

export default BookList;
