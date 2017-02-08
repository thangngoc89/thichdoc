import React from "react";
import Card from "./BuildBlocks/Card";
import Button from "./BuildBlocks/Button";
import PlusIcon from "../icons/plus.svg";

const CardUserInfo = ({ avatar, job, name, recommendBooks }) => (
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
        {recommendBooks.length.toString()} sách
      </span>
      <Button name="Theo dõi" SVGIcon={PlusIcon} block />
    </div>
  </Card>
);

export default CardUserInfo;
