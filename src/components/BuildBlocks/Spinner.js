import React from "react";
const Spinner = () => {
  return (
    <div className="loader">
      <style jsx>
        {
          `
          .spinner {
            height: 8vh;
            min-height: 5rem;
            width: 8vh;
            min-width: 5rem;
            border: 6px solid rgba(241,79,74, .2);
            border-top-color: rgba(241,79,74, .8);
            border-radius: 100%;
            animation: rotation 0.6s infinite linear 0.25s;

            /* the opacity is used to lazyload the spinner, see animation delay */
            opacity: 0;
            margin: 0 auto;
          }

          @keyframes rotation {
            from {
              opacity: 1;
              transform: rotate(0);
            }
            to {
              opacity: 1;
              transform: rotate(359deg);
            }
          }
          `
        }
      </style>
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
