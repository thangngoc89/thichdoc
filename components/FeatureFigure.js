import React, { PropTypes as p } from "react";
import GridFluidFourMax from "./BuildBlocks/GridFluidFourMax";
import Figure from "./Figure";
import data from "../data/data.json";

const FeaturedFigure = () => {
  const list = data.map((user, i) => (
    <Figure key={i} avatar={user.avatar} name={user.name} job={user.job} />
  ));
  return (
    <div className="mt4">
      <GridFluidFourMax list={list} />
    </div>
  );
};

export default FeaturedFigure;
