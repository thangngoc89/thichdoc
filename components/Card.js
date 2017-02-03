import React, { PropTypes as p } from "react";

const Card = ({ className = "", children }) => {
  return (
    <div className={"w-100 mv3 bg-white pa3 " + className}>
      {children}
    </div>
  );
};

Card.propTypes = { className: p.string, children: p.node };
export default Card;
