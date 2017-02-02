import React from "react";

const Figure = () => {
  return (
    <section className="flex-1 pa1">
      <style jsx>
        {
          `
        section {
          min-width: 100%;
        }
        @media (min-width: 30em) {
          section {
            min-width: 50%;
          }
        }
        @media (min-width: 60em) {
          section {
            min-width: 33.33%;
          }
        }
        `
        }
      </style>
      <article className="bg-white br3 pa2 pa3-ns mv2 ba b--black-10">
        <div className="tc">
          <img
            src="https://source.unsplash.com/random/400x400/"
            className="br-100 h5-l w5-l h4 w4 dib ba b--black-05"
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
    <div className="flex flex-wrap w-100">
      {[ ...Array(12) ].map((_, i) => <Figure />)}
    </div>
  );
};

export default FeatureFigure;
