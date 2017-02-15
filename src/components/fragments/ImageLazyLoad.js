import React from "react";
import LazyLoad from "react-lazyload";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <img src={src} className={className} height={height} {...props} />
      </ReactCSSTransitionGroup>
    </LazyLoad>
  );
};

export default ImageLazyLoad;
