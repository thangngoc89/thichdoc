import React from "react";
import App from "./App";
import PlusIcon from "../icons/plus.svg";
import Card from "./Card";
import d from "../design";

const Cover = () => (
  <div>
    <img className="w-100 h4" src="/static/images/abstract2.jpg" />
  </div>
);
const UserInfo = () => (
  <Card className="tc">
    <img
      className="br-100 pa1 mb2 bg-white h4 w4 nt5"
      src="/static/authors/1.jpg"
    />
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
  </Card>
);
const Bio = () => (
  <Card>
    "Nguyễn Quang Lập (thường được yêu mến gọi là Bọ Lập) là một nhà văn, nhà viết kịch, nhà biên kịch điện ảnh của Việt Nam. “Đời cát”, “Thung lũng hoang vắng” đem về cho ông giải thưởng Nhà biên kịch xuất sắc nhất. Trong vai trò nhà văn, Nguyễn Quang Lập nổi tiếng với lối văn khẩu ngữ, giọng điệu tưng tửng rất riêng. Các tác phẩm tiêu biểu: Tình Cát, Bạn Văn, Ký Ức vụn, Những mảnh đời đen trắng, Người thổi kèn Trom – pet… Sau một cơn tai biến, Bọ Lập chỉ còn cử động được một chân và một tay. Dù vậy, với một tay còn lại, ông vẫn cần mẫn lọc tin, đều đặn giới thiệu trên facebook cá nhân và sáng tác.
  </Card>
);

const BookShelf = () => (
  <Card className="vh-75 w-100 bg-red">
    lorem ipsum
  </Card>
);

const ProfilePage = () => {
  return (
    <App>
      <main className="mw9 center pa3 pa4-ns mt5">
        <Cover />
        <UserInfo />
        <Bio />
        <BookShelf />
      </main>
    </App>
  );
};

export default ProfilePage;
