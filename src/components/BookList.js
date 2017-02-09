import React from "react";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";
import CardBookVertical from "./CardBookVertical";
import GridFluidThreeMax from "./BuildBlocks/GridFluidThreeMax";

const BookList = ({ recommendBooks }) => {
  const list = recommendBooks.map((recommendBook, i) => (
    <CardBookVertical key={i} data={recommendBook.book} />
  ));
  return <GridFluidThreeMax list={list} />;
};

BookList.fragments = {
  recommendBooks: (
    gql`
    fragment FragmentBookListRecommendBooks on RecommendBooks {
      content
      book {
        ...FragmentBookBook
      }
    }
    ${CardBookVertical.fragments.book}
  `
  )
};

export default BookList;
