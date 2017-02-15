import React from "react";
import LazyLoad from "react-lazyload";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const blankImg = "data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==";
const ImageLazyLoad = (
  { src, thumbnail = blankImg, offset, height, ...props, className }
) => (
  <LazyLoad
    offset={200}
    placeholder={
      <img src={thumbnail} className={className} height={height} {...props} />
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

export default ImageLazyLoad;
