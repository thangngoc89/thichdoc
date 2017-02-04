import React from "react";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";

const Book = () => <div>some book</div>;

const Bookshelf = () => {
  const list = [ ...Array(12) ].map((_, i) => <Book />);
  return <GridFluidFourMax list={list} />;
};

export default Bookshelf;
