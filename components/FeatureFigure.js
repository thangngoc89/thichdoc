import React from "react";
import LazyLoad from "react-lazyload";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const ImgPlaceHolder = () => {
  return (
    <img
      src="/static/images/nophoto.png"
      className="w-100 bg-light-silver"
      title="Placeholder"
    />
  );
};

const Figure = ({ author }) => {
  return (
    <li className="db flex-1 mb4 bg-white">
      <style jsx>
        {
          `
          li {
            min-width: 100%;
            max-width: 250px;
          }
          
          @media (min-width: 30em) {
            li {
              min-width: 45%;
              flex: 1 1 45%;
            }
            
          }
          @media (min-width: 50em) {
            li {
              min-width: 30%;
              flex: 1 1 30%;            
            }
          }
          @media (min-width: 65em) {
            li {
              min-width: 22%;
              flex: 1 1 22%;            
            }
          }
          .fade-appear {
            opacity: 0.01;
          }
          .fade-appear.fade-appear-active {
            opacity: 1;
            transition: opacity .5s ease-in;
          }
          `
        }
      </style>
      <div className="tc">
        <LazyLoad offset={200} placeholder={<ImgPlaceHolder />}>
          <ReactCSSTransitionGroup
            key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            <img src={`/static/authors/${+author + 1}.jpg`} className="w-100" />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <h1 className="f3 mb2">Mimi W.</h1>
        <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
      </div>
    </li>
  );
};

const FeaturedFigure = () => {
  return (
    <ul className="flex flex-wrap w-100 mt4 ph0 justify-between">
      {[ ...Array(12) ].map((_, i) => <Figure key={i} author={i} />)}
    </ul>
  );
};

export default FeaturedFigure;
