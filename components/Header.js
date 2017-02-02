import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const NavLink = ({ href, children }) => {
  return (
    <a className="ph2 link black tracked f6" href={href}>
      {children}
    </a>
  );
};
const Header = () => {
  return (
    <header className="mb0 bg-white fixed top-0 left-0 w-100">
      <style jsx>
        {
          `

        `
        }
      </style>
      <div className="mw8 center flex ph4 items-center h3 f5">
        <a
          href="/"
          className="flex items-center flex-3 flex-1-ns ttu f4 link black"
        >
          <Logo scale={0.25} />
          <span className="ph3">Thích đọc</span>
        </a>
        <a className="dn-ns">
          Menu
        </a>
        <ul className="flex-ns flex-3-ns dn flex-start list">
          <li className="">
            <NavLink href="/explore">Explore</NavLink>
          </li>
          <li className="">
            <NavLink href="/featured">Featured</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
