import React, { PropTypes as p } from "react";

const GridFluidFiveMax = ({ list }) => {
  return (
    <ul className="flex flex-wrap w-100 ma0 pa0 justify-between">
      {list.map((element, i) => (
        <li key={i} className="db flex-1 mb4">
          {element}
        </li>
      ))}
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
          @media (min-width: 40em) {
            li {
              min-width: 30%;
              flex: 1 1 30%;            
            }
          }
          @media (min-width: 55em) {
            li {
              min-width: 22%;
              flex: 1 1 22%;            
            }
          }
          @media (min-width: 70em) {
            li {
              min-width: 17%;
              flex: 1 1 17%;            
            }
          }
          `
        }
      </style>
    </ul>
  );
};

GridFluidFiveMax.propTypes = { list: p.arrayOf(p.element) };

export default GridFluidFiveMax;
