import React from "react";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";

const Book = ({ i }) => (
  <article className="mh4 mh3-ns flex flex-column justify-end h-100">
    <a className="link">
      <img
        src={`/static/books/book${+i + 1}.jpg`}
        className="w-100 bg-light-silver dim bb bw3 b--red ma0 pa0"
      />
    </a>
    <div className="pa3 bg-white ">
      <h1 className="f3 mb2">Mimi W.</h1>
      <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
    </div>
  </article>
);

const Bookshelf = () => {
  const list = [ ...Array(12) ].map((_, i) => <Book i={i} />);
  return (
    <div className="w-100">
      <h2 className="f3 mv4">Sách khuyên đọc</h2>
      <GridFluidFourMax list={list} />
    </div>
  );
};

export default Bookshelf;
