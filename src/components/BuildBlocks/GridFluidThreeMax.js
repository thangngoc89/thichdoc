import React, { PropTypes as p } from "react";

const GridFluidFourMax = ({ list }) => {
  // Fix the grid
  const numberOfElementNeeded = list.length % 3;
  const newList = numberOfElementNeeded === 0
    ? list
    : [...list, ...Array(numberOfElementNeeded).map(() => undefined)];

  return (
    <ul className="flex flex-wrap w-100 ma0 pa0 justify-between list">
      {newList.map((element, i) => {
        if (element !== undefined) {
          return (
            <li key={i} className="db flex-1 mb4">
              {element}
            </li>
          );
        }
        return <li key={i} />;
      })}
      <style jsx>
        {
          `
          li {
            min-width: 100%;
            max-width: 250px;
          }
          
          @media (min-width: 30em) {
            li {
              min-width: calc(50% - 4rem);
              flex: 1 1 calc(50% - 4rem);
            }
            
          }
          @media (min-width: 60em) {
            li {
              min-width: calc(33.33% - 3rem);
              flex: 1 1 calc(33.33% - 3rem);            
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
