import React, { PropTypes as p } from "react";
import ImageLazyLoad from "./ImageLazyLoad";
import { RouteUser } from "./BuildBlocks/Route";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";

const CardFigure = ({ user: { name, avatar, job, username } }) => {
  return (
    <div>
      <RouteUser username={username}>
        <a className="link">
          <div className="tc bg-white pb3 shadow-4 h-100 dim">
            <img src={avatar} className="w-100 bg-light-silver" />
            <h1 className="f4 mb2 black">{name}</h1>
            {job && <p className="f5 red tracked mv0">{job}</p>}
          </div>
        </a>
      </RouteUser>
    </div>
  );
};

CardFigure.fragments = {
  user: (
    gql`
    fragment FragmentCardFigureUser on User {
      name
      username
      avatar
      job
    }
  `
  )
};

CardFigure.propTypes = {
  user: propType(CardFigure.fragments.user).isRequired
};

export default CardFigure;
