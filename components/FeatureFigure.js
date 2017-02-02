import React from "react";

const Figure = () => {
  return (
    <section className="flex-1 mb4 mr0 mr4-ns section">
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
      <article className="bg-white pa2 pa3-ns mv2 ba bb-black-80">
        <div className="tc">
          <img
            src="https://source.unsplash.com/random/400x400/"
            className="br-100 h5-l w5-l h4 w4 dib"
            title="Photo of a kitty staring at you"
          />
          <h1 className="f3 mb2">Mimi W.</h1>
          <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
        </div>
      </article>
    </section>
  );
};

const FeatureFigure = () => {
  return (
    <div className="flex flex-wrap w-100 mt4">
      {[ ...Array(12) ].map((_, i) => <Figure key={i} />)}
    </div>
  );
};

export default FeatureFigure;
