import React from "react";
import App from "./App";
import Page404 from "./fragments/Page404";
import PageLoading from "./fragments/PageLoading";

import withData from "../lib/withData";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const BookDetailPage = ({ data: { name } }) => {
  return (
    <App title="book details">
      <main className="mw8 center ph3">
        <header className="h3 flex items-center gray">Breadcumbs</header>
        <section>
          <h1>{name}</h1>
        </section>
      </main>
    </App>
  );
};

const BookDetailPageOr404 = (
  { data: { book, loading }, url: { push, query } }
) => {
  if (loading) {
    return <PageLoading />;
  }
  if (typeof book === "null") {
    return <Page404 />;
  }
  if (query.slug !== book.slug && process.browser) {
    push(`/book?id=${book.id}&slug=${book.slug}`, `/b/${book.id}/${book.slug}`);
  }
  return <BookDetailPage data={book} />;
};

const BookDetailsPageQuery = gql`
  query BookDetailsPageQuery($id: String!) {
    book: Book(id: $id) {
      id
      slug
      name
      cover {
        url
      }
    }
  }
`;

export default withData(
  graphql(BookDetailsPageQuery, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        id
      }
    })
  })(BookDetailPageOr404)
);
