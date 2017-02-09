import React, { PropTypes as p } from "react";

const Card = ({ wrapperTag = "section", className = "", children }) =>
  React.createElement(
    wrapperTag,
    { className: "w-100 mv3 bg-white pa3 " + className },
    children
  );

Card.propTypes = { className: p.string, children: p.node };

export default Card;
