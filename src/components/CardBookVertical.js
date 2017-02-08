import React from "react";
import cl from "classnames";
import { default as affiliateUrl } from "../helpers/affiliate-url.js";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";

const CardBookVertical = ({ data: { author, cover, name } }) => (
  <article className="mh4 mh3-ns flex flex-column justify-end h-100">
    <a href="" target="_blank" className="link">
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
    <div className="flex flex-column justify-center pa3 bg-white h4 shadow-4">
      <h1
        className={cl("mb2", {
          f3: name.length < 12,
          f4: name.length >= 12,
          f5: name.length >= 20
        })}
      >{name}</h1>
      <h2 className="f5 fw4 gray mt0">{author}</h2>
    </div>
  </article>
);

CardBookVertical.fragments = {
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

CardBookVertical.propTypes = {
  data: propType(CardBookVertical.fragments.book).isRequired
};
export default CardBookVertical;
