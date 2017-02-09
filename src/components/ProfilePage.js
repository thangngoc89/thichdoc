import React, { PropTypes as p } from "react";
import App from "./App";
import Card from "./BuildBlocks/Card";
import Button from "./BuildBlocks/Button";
import BookList from "./BookList";
import data from "../data.json";
import CardUserInfo from "./CardUserInfo";

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
      <main className="mw8 center pv3 ph3 ph0-ns mt5">
        {/*<Cover />*/}
        <style jsx>
          {
            `
          @media (min-width: 30em) {
            .two {
              flex: 1;
            }
          }
         `
          }
        </style>
        <div className="flex-l mv-100">
          <div className="flex-l items-stretch-l w5-l">
            <CardUserInfo
              name={user.name}
              job={user.job}
              avatar={user.avatar}
              recommendBooks={user.recommendBooks}
            />
          </div>
          <div className="flex-l items-stretch-l two pl4-l">
            <CardBio content={user.bio} />
          </div>
        </div>
        <BookList recommendBooks={user.recommendBooks} />
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
