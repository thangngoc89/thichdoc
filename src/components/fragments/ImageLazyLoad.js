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
    ...props,
    className,
    base64 = false
  }
) => (
  <LazyLoad
    offset={200}
    placeholder={
      (
        <img
          src={base64 ? base64Img(thumbnail) : thumbnail}
          className={className}
          height={height}
          {...props}
        />
      )
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
