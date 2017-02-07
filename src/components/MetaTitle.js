import React, { PropTypes as p } from "react";
import Head from "next/head";

const MetaTitle = ({ title }) => {
  if (typeof title === "undefined") {
    return <Head><title>Thích đọc | Đọc sách thật phong cách</title></Head>;
  }
  return <Head><title>{title} | Thích đọc</title></Head>;
};

MetaTitle.propTypes = {
  title: p.string
};

export default MetaTitle;
