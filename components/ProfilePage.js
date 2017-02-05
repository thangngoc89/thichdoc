import React from "react";
import App from "./App";
import PlusIcon from "../icons/plus.svg";
import Card from "./BuildBlocks/Card";
import ButtonBlock from "./BuildBlocks/ButtonBlock";
import BookShelf from "./Bookshelf";

const Cover = () => (
  <div>
    <img
      className="w-100 h4 h5-ns bg-gray shadow-4"
      src="/static/images/abstract2.jpg"
    />
  </div>
);
const UserInfo = () => (
  <Card className="flex flex-column items-center">
    <figure>
      <img
        className="br-100 pa1 mb2 bg-white h4 w4 nt5 shadow-5"
        src="/static/authors/1.jpg"
      />
    </figure>
    <h1 className="f3 ma0">Nguyễn Quang Lập</h1>
    <p className="f5 red tracked mv0">Nhà văn</p>
    <div className="bottom-block">
      <style jsx>
        {
          `
          .bottom-block {
            margin-top: auto;
          }
        `
        }
      </style>
      <span className="f6 light-silver db mv3">
        500 người theo dõi | 20 sách
      </span>
      <ButtonBlock action="Theo dõi" SVGIcon={PlusIcon} />
    </div>
  </Card>
);

const Bio = () => (
  <Card>
    <h2 className="f5">Tiểu sử</h2>
    <p className="lh-copy i">
      "Nguyễn Quang Lập (thường được yêu mến gọi là Bọ Lập) là một nhà văn, nhà viết kịch, nhà biên kịch điện ảnh của Việt Nam. “Đời cát”, “Thung lũng hoang vắng” đem về cho ông giải thưởng Nhà biên kịch xuất sắc nhất. Trong vai trò nhà văn, Nguyễn Quang Lập nổi tiếng với lối văn khẩu ngữ, giọng điệu tưng tửng rất riêng. Các tác phẩm tiêu biểu: Tình Cát, Bạn Văn, Ký Ức vụn, Những mảnh đời đen trắng, Người thổi kèn Trom – pet… Sau một cơn tai biến, Bọ Lập chỉ còn cử động được một chân và một tay. Dù vậy, với một tay còn lại, ông vẫn cần mẫn lọc tin, đều đặn giới thiệu trên facebook cá nhân và sáng tác.
    </p>
  </Card>
);

const ProfilePage = () => {
  return (
    <App>
      <main className="mw9 center pa3 pa4-ns mt5">
        <Cover />
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
            <UserInfo />
          </div>
          <div className="flex-l items-stretch-l two pl4-l">
            <Bio />
          </div>
        </div>
        <BookShelf />
      </main>
    </App>
  );
};

export default ProfilePage;
