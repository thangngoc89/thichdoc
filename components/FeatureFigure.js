import React from "react";

const Figure = ({ author }) => {
  return (
    <section className="flex-1 mb4 section bg-white">
      <style jsx>
        {
          `
          section {
            min-width: 100%;
            max-width: 250px;
          }
          
          @media (min-width: 30em) {
            section {
              min-width: 45%;
              flex: 1 1 45%;
            }
            
          }
          @media (min-width: 50em) {
            section {
              min-width: 30%;
              flex: 1 1 30%;            
            }
          }
          @media (min-width: 65em) {
            section {
              min-width: 22%;
              flex: 1 1 22%;            
            }
          }
          img {
            background: #e6eaea;
            height: auto;
          }
          `
        }
      </style>
      <div className="tc">
        <img
          src={`/static/authors/${(+author + 1).toString()}.jpg`}
          className="w-100"
          height="300px"
          width="300px"
          title="Author's photo"
        />
        <h1 className="f3 mb2">Mimi W.</h1>
        <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
      </div>
    </section>
  );
};

const FeatureFigure = () => {
  return (
    <div className="flex flex-wrap w-100 mt4 justify-between">
      {[ ...Array(12) ].map((_, i) => <Figure key={i} author={i} />)}
    </div>
  );
};

export default FeatureFigure;
