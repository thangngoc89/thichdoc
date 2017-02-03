import React from "react";
import LazyLoad from "react-lazyload";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const ImageLazyLoad = (
  { src, placeHolderSrc = "/static/images/nophoto.png", offset, ...props },
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
