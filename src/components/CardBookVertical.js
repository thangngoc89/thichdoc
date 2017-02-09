import React from "react";
import cl from "classnames";
import { default as affiliateUrl } from "../helpers/affiliate-url.js";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";

const CardBookHorizontal = ({ data: { author, cover, name } }) => (
  <article className="flex flex-column justify-end h-100">
    <a href="#foo" target="_blank" className="link">
      <style jsx>
        {
          `
          img {
            max-height: 25em;
          }
          `
        }
      </style>
      <img
        src={cover}
        className="w-100 bg-light-silver dim bb bw3 b--red ma0 pa0"
      />
    </a>
    <div className="flex flex-column justify-center pa3 bg-white h4">
      <h1 className="mb2 f5">{name}</h1>
      <h2 className="f5 fw4 gray mt0">{author}</h2>
    </div>
  </article>
);

CardBookHorizontal.fragments = {
  book: (
    gql`
    fragment FragmentBookBook on Book {
      id
      author
      cover
      name
    }
  `
  )
};

CardBookHorizontal.propTypes = {
  data: propType(CardBookHorizontal.fragments.book).isRequired
};
export default CardBookHorizontal;
