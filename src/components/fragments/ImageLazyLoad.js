import React from "react";
import LazyLoad from "react-lazyload";

const base64Img = str => "data:image/gif;base64," + str;
const blankImg = "data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==";
const ImageLazyLoad = (
  {
    src,
    thumbnail = blankImg,
    offset,
    height,
    className,
    base64 = false,
    ...props
  }
) => {
  let thumbImg;
  if (thumbnail === blankImg) {
    thumbImg = blankImg;
  } else if (base64) {
    thumbImg = base64Img(thumbnail);
  } else {
    thumImg = thumbnail;
  }
  return (
    <LazyLoad
      offset={200}
      placeholder={
        <img src={thumbImg} className={className} height={height} {...props} />
      }
      height={height}
      once
    >
      <img src={src} className={className} height={height} {...props} />
    </LazyLoad>
  );
};

export default ImageLazyLoad;
