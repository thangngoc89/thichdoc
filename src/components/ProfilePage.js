import React, { PropTypes as p } from "react";
import App from "./App";
import Card from "./BuildBlocks/Card";
import Button from "./BuildBlocks/Button";
import BookList from "./BookList";
import UserInfo from "./UserInfo";

import Page404 from "./fragments/Page404";
import PageLoading from "./fragments/PageLoading";

import withData from "../lib/withData";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const ProfilePage = ({ user }) => {
  return (
    <App title={user.name}>
      <main>
        <UserInfo
          name={user.name}
          job={user.job}
          avatar={user.avatar}
          recommendBooksCount={user.recommendBooks.length}
          bio={user.bio}
        />
        <section className="mw8 center w-100 ph3 pt3 pb5">
          <article>
            <h2 className="f3 mv4">Sách yêu thích</h2>
            <BookList recommendBooks={user.recommendBooks} />
          </article>
        </section>
      </main>
    </App>
  );
};

const ProfilePageOr404 = ({ data: { user, loading } }) => {
  if (loading) {
    return <PageLoading />;
  }
  if (typeof user === "null") {
    return <Page404 />;
  }
  return <ProfilePage user={user} />;
};

const ProfilePageQuery = gql`
  query ProfilePage($username: String!) {
    user: User(username: $username) {
      id
      username
      bio
      name
      job
      avatar {
        url
        thumb
      }
      recommendBooks {
        ...FragmentBookListRecommendBooks
      }
    }
  }
  ${BookList.fragments.recommendBooks}
`;

export default withData(
  graphql(ProfilePageQuery, {
    options: ({ url: { query: { username } } }) => ({
      variables: {
        username
      }
    })
  })(ProfilePageOr404)
);
