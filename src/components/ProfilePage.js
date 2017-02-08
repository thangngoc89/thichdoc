import React, { PropTypes as p } from "react";

import App from "./App";
import PlusIcon from "../icons/plus.svg";
import Card from "./BuildBlocks/Card";
import Button from "./BuildBlocks/Button";
import BookShelf from "./Bookshelf";
import data from "../data.json";

const Cover = () => (
  <div>
    <img
      className="w-100 h4 h5-ns bg-gray shadow-4"
      src="/static/images/abstract2.jpg"
    />
  </div>
);
const UserInfo = ({ avatar, job, name, recommendationsCount }) => (
  <Card className="flex flex-column items-center tc">
    <figure>
      <img
        className="br-100 pa1 mb2 bg-white h4 w4 nt5 shadow-1"
        src={avatar}
      />
    </figure>
    <h1 className="f3 ma0">{name}</h1>
    <p className="f5 red tracked mv0">{job}</p>
    <div className="bottom-block mw5 w-100">
      <style jsx>
        {
          `
          .bottom-block {
            margin-top: auto;
          }
        `
        }
      </style>
      <span className="f6 light-silver db mv3 tc">
        {/*500 người theo dõi |*/}
        {recommendationsCount} sách
      </span>
      <Button name="Theo dõi" SVGIcon={PlusIcon} />
    </div>
  </Card>
);

const Bio = ({ content }) => (
  <Card>
    <h2 className="f5">Tiểu sử</h2>
    <p className="lh-copy i">
      {content}
    </p>
  </Card>
);
Bio.propTypes = {
  content: p.string.isRequired
};

const ProfilePage = ({ user }) => {
  return (
    <App title={user.name}>
      <main className="mw9 center pa3 pa4-ns mt5">
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
            <UserInfo
              name={user.name}
              job={user.job}
              avatar={user.avatar}
              recommendationsCount={user.books.length}
            />
          </div>
          <div className="flex-l items-stretch-l two pl4-l">
            <Bio content={user.bio} />
          </div>
        </div>
        <BookShelf books={user.books} />
      </main>
    </App>
  );
};

export default class WidthDataProfilePage extends React.Component {
  static getInitialProps({ query: { username } }) {
    const user = data.find(u => u.username === username);
    return { user };
  }

  render() {
    const user = this.props.user;

    if (typeof user === "undefined") {
      return (
        <App title="404">
          <main
            className="flex items-center justify-center w-100 vh-100 center"
          >
            <h1 className="f1">Liên kết không tồn tại</h1>
          </main>
        </App>
      );
    }
    return <ProfilePage user={this.props.user} />;
  }
}
