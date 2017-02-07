import React from "react";

const Logo = ({ scale = 1 }) => {
  const width = 193.6 * (+scale);
  const height = 218.5 * (+scale);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 193.6 218.5"
    >
      <path
        fill="#f14f4a"
        d="M98 0a15.8 16 0 0 0-8.4 2l-81 46.2A15.8 16 0 0 0 .6 62L0 155.2A15.8 16 0 0 0 7.8 169L88 216.4a15.8 16 0 0 0 16 .2l81-46.2a15.8 16 0 0 0 8-13.7l.6-93.4a15.8 16 0 0 0-8-13.8l-80-47.3A15.8 16 0 0 0 98 0z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        d="M54.8 131.6v-76l42.6 22.7 41.8-21-.4 86-78.6-.3c-8.5 6.7-6.8 13.4-.7 20h79.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path fill="#fff" fillRule="evenodd" d="M67.3 151v31l9-8.8 9 9V151z" />
    </svg>
  );
};

export default Logo;
