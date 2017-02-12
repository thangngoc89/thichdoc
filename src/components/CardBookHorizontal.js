import React from "react";
import { default as affiliateUrl } from "../helpers/affiliate-url.js";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";

const CardBookVertical = (author, cover, name, text) => (
  <article className="mh4 mh3-ns flex justify-end h-100">
    <div>
      <a href="#foo" target="_blank" className="link">
        <img
          src={cover}
          className="w-100 bg-light-silver dim bb bw3 b--red ma0 pa0"
        />
      </a>
    </div>
    <div className="flex flex-column justify-center pa3 bg-white h4 shadow-4">
      <h1 className="mb2 f5">{name}</h1>
      <h2 className="f5 fw4 gray mt0">{author}</h2>
    </div>
  </article>
);

CardBookVertical.propTypes = {
  // data: propType(CardBookVertical.fragments.book).isRequired
};
export default CardBookVertical;
