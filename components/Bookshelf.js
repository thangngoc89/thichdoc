import React from "react";
import cl from "classnames";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";
import { default as affiliateUrl } from "../helpers/affiliate-url";

const Book = ({ author, cover, name, link }) => (
  <article className="mh4 mh3-ns flex flex-column justify-end h-100">
    <a href={affiliateUrl(link)} target="_blank" className="link">
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
      <h1 className={cl("mb2", {
          f3: name.length < 12,
          f4: name.length >= 12,
          f5: name.length >= 20
        })}>{name}</h1>
      <h2 className="f5 fw4 gray mt0">{author}</h2>
    </div>
  </article>
);

const Bookshelf = ({ books }) => {
  const list = books.map((b, i) => (
    <Book key={i} name={b.name} author={b.author} cover={b.img} link={b.link} />
  ));
  return (
    <div className="w-100">
      <h2 className="f3 mv4">Sách khuyên đọc</h2>
      <GridFluidFourMax list={list} />
    </div>
  );
};

export default Bookshelf;
