import React from "react";
import Button from "./BuildBlocks/Button";
import ReadMore from "./BuildBlocks/ReadMore";

const CardUserInfo = ({ avatar, job, name, bio, recommendBooksCount }) => (
  <header>
    <style jsx>
      {
        `
        section.hero {
          background-color: #f6f9fa;
          background-image: url(/static/images/header-bg.svg)
        }
      `
      }
    </style>
    <section
      className="w-100 pt4 h5 flex flex-column justify-center items-center hero tc"
    >
      <p className="f5 gray tracked mv0">{job}</p>
      <h1 className="f3 f2-ns mv0">{name}</h1>
    </section>
    <section className="bt b--light-gray bg-white pb3">
      <article className="tc mw8 center">
        <img className="br-100 pa1 mb2 bg-white h4 w4 nt5" src={avatar} />
        <p className="f5 lh-copy mv3 tc light-silver">
          {recommendBooksCount} sách
        </p>
        <p className="ph3 ph5-ns lh-copy i" style={{ color: "#576366" }}>
          <ReadMore length={200} text={bio} />
        </p>
      </article>
    </section>
  </header>
);

export default CardUserInfo;
