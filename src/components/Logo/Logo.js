import React from "react";
import SVG from "./logo.svg";
const Logo = ({ scale = 1 }) => {
  const height = 70.555558 * (+scale);
  const width = 203.76446 * (+scale);
  return <SVG width={width} height={height} />;
};

export default Logo;
