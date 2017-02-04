import React, { PropTypes as p } from "react";

const GridFluidFourMax = ({ list }) => {
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
    </ul>
  );
};

GridFluidFourMax.propTypes = { list: p.arrayOf(p.element) };

export default GridFluidFourMax;
