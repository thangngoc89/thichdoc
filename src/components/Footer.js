import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 ph3 pv5 bg-white">
      <small className="f6 db tc">
        © 2017 <b className="ttu">Thích đọc</b>, Mọi quyền được bảo lưu
      </small>
      <div className="tc mt3">
        <a
          href="/language/"
          title="Language"
          className="f6 dib ph2 link mid-gray dim"
        >
          Language
        </a>
        <a
          href="/terms/"
          title="Terms"
          className="f6 dib ph2 link mid-gray dim"
        >
          Terms of Use
        </a>
        <a
          href="/privacy/"
          title="Privacy"
          className="f6 dib ph2 link mid-gray dim"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
