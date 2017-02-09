import React from "react";
import SVG from "./logo.svg";
const Logo = ({ scale = 1 }) => {
  const height = 193.6 * (+scale);
  const width = 218.5 * (+scale);
  return <SVG width={width} height={height} />;
};

export default Logo;
