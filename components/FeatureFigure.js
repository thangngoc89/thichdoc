import React from "react";

const Figure = ({ author }) => {
  return (
    <section className="flex-1 mb4 mr0 mr4-ns section bg-white ">
      <style jsx>
        {
          `
          .section {
            min-width: 100%;
          }
          
          @media (min-width: 30em) {
            .section {
              min-width: 45%;
              flex: 1 1 45%;
            }
            .section:nth-child(even) {
              margin-right: 0;
            }
          }
          @media (min-width: 60em) {
            .section {
              min-width: 30%;
              flex: 1 1 30%;            
            }
            .section:nth-child(even) {
              margin-right: 2rem;
            }
            .section:nth-child(3n) {
              margin-right: 0;
            }
          }
          `
        }
      </style>
      <div className="tc">
        <img
          src={`/static/authors/${(+author + 1).toString()}.jpg`}
          className="w-100"
          height="200px"
          width="200px"
          style={{ height: "auto" }}
          title="Photo of a dog staring at you"
        />
        <h1 className="f3 mb2">Mimi W.</h1>
        <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
      </div>
    </section>
  );
};

const FeatureFigure = () => {
  return (
    <div className="flex flex-wrap w-100 mt4">
      {[ ...Array(12) ].map((_, i) => <Figure key={i} author={i} />)}
    </div>
  );
};

export default FeatureFigure;
