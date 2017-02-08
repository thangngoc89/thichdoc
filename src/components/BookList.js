import React from "react";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";
import CardBookVertical from "./CardBookVertical";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";

const BookList = ({ recommendBooks }) => {
  const list = recommendBooks.map((recommendBook, i) => (
    <CardBookVertical key={i} data={recommendBook.book} />
  ));
  return (
    <div className="w-100">
      <h2 className="f3 mv4">Sách khuyên đọc</h2>
      <GridFluidFourMax list={list} />
    </div>
  );
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
