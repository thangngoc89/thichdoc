import React from "react";
import ImageLazyLoad from "./ImageLazyLoad";
import Link from "next/link";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";

const Figure = ({ author }) => {
  return (
    <div className="tc bg-white">
      <Link href="/profile">
        <a className="link">
          <ImageLazyLoad
            offset={200}
            src={`/static/authors/${+author + 1}.jpg`}
            className="w-100 bg-light-silver dim"
          />
        </a>
      </Link>
      <h1 className="f3 mb2">Mimi W.</h1>
      <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
    </div>
  );
};

const FeaturedFigure = () => {
  const list = [ ...Array(12) ].map((_, i) => <Figure author={i} />);
  return (
    <div className="mt4">
      <GridFluidFourMax list={list} />
    </div>
  );
};

export default FeaturedFigure;
