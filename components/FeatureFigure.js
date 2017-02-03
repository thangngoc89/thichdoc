import React from "react";
import ImageLazyLoad from "./ImageLazyLoad";
import Link from "next/link";

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
          `
        }
      </style>
      <div className="tc">
        <Link href="/profile">
          <a className="link">
            <ImageLazyLoad
              offset={200}
              src={`/static/authors/${+author + 1}.jpg`}
              className="w-100 bg-light-silver"
            />
          </a>
        </Link>
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
