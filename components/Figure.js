import React, { PropTypes as p } from "react";
import ImageLazyLoad from "./ImageLazyLoad";
import Link from "next/link";

const Figure = ({ name, avatar, job }) => {
  return (
    <div className="tc bg-white pb3 shadow-4 h-100">
      <Link href="/profile">
        <a className="link">
          <ImageLazyLoad
            offset={200}
            src={avatar}
            className="w-100 bg-light-silver dim"
          />
        </a>
      </Link>
      <h1 className="f4 mb2">{name}</h1>
      {job && <p className="f5 red tracked mv0">{job}</p>}
    </div>
  );
};

Figure.propTypes = {
  name: p.string.isRequired,
  avatar: p.string.isRequired,
  job: p.string
};

export default Figure;
