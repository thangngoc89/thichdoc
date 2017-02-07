import React, { PropTypes as p } from "react";
import d from "../../design";

const ButtonBlock = ({ action, SVGIcon }) => {
  return (
    <a
      href="#0"
      className="flex w-100 justify-center items-center pa2 ba b--red border-box f5 red hover-white hover-bg-red no-underline bg-animate"
    >
      <style jsx>
        {
          `
          a:hover > :global(svg), 
          a:focus > :global(svg) {
            fill: #fff;
          }
          `
        }
      </style>
      <SVGIcon className="w1" fill={d.colorPrimary} />
      <span className="pl1">{action}</span>
    </a>
  );
};

ButtonBlock.propsTypes = {
  action: p.string.isRequired,
  SVGIcon: p.object.isRequired,
};
export default ButtonBlock;
