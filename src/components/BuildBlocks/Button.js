import React, { PropTypes as p } from "react";
import d from "../../design";
import cl from "classnames";

const Button = (
  {
    name,
    SVGIcon,
    block = false,
    size,
    bold = false,
    onButtonClick,
    className = ""
  }
) => {
  const aClassName = cl(
    "flex justify-center items-center pa2 ba b--red border-box f5 red hover-white hover-bg-red no-underline bg-animate pointer",
    {
      [className]: true,
      "w-100": block,
      w4: !block,
      h3: size === "big",
      h2: size === "med",
      "b bw1": bold
    }
  );
  return (
    <a onClick={onButtonClick} className={aClassName}>
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
      {SVGIcon && <SVGIcon className="w1" fill={d.colorPrimary} />}
      <span className="pl1">{name}</span>
    </a>
  );
};

Button.propsTypes = {
  action: p.string.isRequired,
  SVGIcon: p.object,
  size: p.string,
  block: p.bool,
  bold: p.bool,
  onButtonClick: p.func.isRequired
};

export default Button;
