import React, { PropTypes as p } from "react";
import App from "./App";
import Card from "./BuildBlocks/Card";
import Button from "./BuildBlocks/Button";
import BookList from "./BookList";
import data from "../data.json";
import UserInfo from "./UserInfo";

import withData from "../lib/withData";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Cover = () => (
  <div>
    <img
      className="w-100 h4 h5-ns bg-gray shadow-4"
      src="/static/images/abstract2.jpg"
    />
  </div>
);

const CardBio = ({ content }) => (
  <Card>
    <h2 className="f5">Tiểu sử</h2>
    <p className="lh-copy i">
      {content}
    </p>
  </Card>
);
CardBio.propTypes = {
  content: p.string.isRequired
};

const ProfilePage = ({ user }) => {
  return (
    <App title={user.name}>
      <main className="mw8 center">
        <UserInfo
          name={user.name}
          job={user.job}
          avatar={user.avatar}
          recommendBooksCount={user.recommendBooks.length}
          bio={user.bio}
        />
        <section className="w-100">
          <article>
            <h2 className="f3 mv4 ph3">Sách khuyên đọc</h2>
            <BookList recommendBooks={user.recommendBooks} />
          </article>
        </section>
      </main>
    </App>
  );
};

const ProfilePageOr404 = ({ data: { user, loading } }) => {
  if (typeof user === "null") {
    return (
      <App title="404">
        <main className="flex items-center justify-center w-100 vh-100 center">
          <h1 className="f1">Liên kết không tồn tại</h1>
        </main>
      </App>
    );
  }
  if (loading) {
    return (
      <App title="404">
        <main className="flex items-center justify-center w-100 vh-100 center">
          Loading...
        </main>
      </App>
    );
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
      avatar
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
