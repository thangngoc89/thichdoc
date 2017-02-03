import React from "react";
import App from "./App";
import PlusIcon from "../icons/plus.svg";
import d from "../design";

const Cover = () => (
  <div>
    <img className="w-100 h4" src="/static/images/abstract2.jpg" />
  </div>
);
const UserInfo = () => (
  <div className="w-100 tc mv3 pb2 bg-white">
    <img
      className="br-100 pa1 mb2 bg-white h4 w4 nt5"
      src="/static/authors/1.jpg"
    />
    <div className="pa2">
      <h1 className="f3 ma0">Nguyễn Quang Lập</h1>
      <span className="f6 light-silver db mv3">
        500 người theo dõi | 20 sách
      </span>
      <a
        href="#0"
        className="with-plus-icon flex w-100 justify-center items-center pa2 ba b--red border-box f5 red hover-white hover-bg-red no-underline bg-animate"
      >
        <style jsx>
          {
            `
          .with-plus-icon:hover > :global(svg), 
          .with-plus-icon:focus > :global(svg) {
            fill: #fff;
          }
          `
          }
        </style>
        <PlusIcon className="w1" fill={d.colorPrimary} />
        <span className="pl1">Theo dõi</span>
      </a>
    </div>
  </div>
);
const ProfilePage = () => {
  return (
    <App>
      <main className="mw9 center pa3 pa4-ns mt5">
        <Cover />
        <UserInfo />
      </main>
    </App>
  );
};

export default ProfilePage;
