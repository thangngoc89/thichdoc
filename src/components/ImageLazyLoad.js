import React from "react";
import LazyLoad from "react-lazyload";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const blankImg = "data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==";
const ImageLazyLoad = (
  { src, placeHolderSrc = blankImg, offset, ...props },
) => (
  <LazyLoad offset={200} placeholder={<img src={placeHolderSrc} {...props} />}>
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <img src={src} {...props} />
    </ReactCSSTransitionGroup>
  </LazyLoad>
);

export default ImageLazyLoad;
