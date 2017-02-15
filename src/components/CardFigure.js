import React, { PropTypes as p } from "react";
import ImageLazyLoad from "./fragments/ImageLazyLoad";
import { RouteUser } from "./fragments/Route";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";

const CardFigure = ({ user: { name, avatar, job, username } }) => {
  return (
    <figure className="mh0 mv4">
      <style jsx>
        {
          `
          .card-bottom {
            border-bottom: 0.25rem #ff4136 solid;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
          }
          .card-bottom:hover {
            box-shadow: 0 1px 15px rgba(0,0,0,0.15);
          }
          .card-bottom :global(.avatar) {
            width: 10rem;
            height: 10rem;
            margin-top: -5rem;
          }
          `
        }
      </style>
      <RouteUser username={username}>
        <a className="link">
          <div className="tc pt4">
            <div className="bg-white card-bottom pb3">
              <ImageLazyLoad
                src={avatar.url}
                className="br-100 avatar"
                thumbnail={avatar.thumb}
                base64
                height="10rem"
                offset={500}
              />
              <h1 className="f4 mb2 black">{name}</h1>
              {job && <p className="f5 red tracked mv0">{job}</p>}
            </div>
          </div>
        </a>
      </RouteUser>
    </figure>
  );
};

CardFigure.fragments = {
  user: (
    gql`
    fragment FragmentCardFigureUser on User {
      name
      username
      avatar {
        url
      }
      job
    }
  `
  )
};

CardFigure.propTypes = {
  user: propType(CardFigure.fragments.user).isRequired
};

export default CardFigure;
