import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const NavLink = ({ href, children }) => {
  return (
    <a className="ph2 link white tracked f6" href={href}>
      {children}
    </a>
  );
};
const Header = () => {
  return (
    <header className="mb0 bg-black o-80 fixed top-0 left-0 w-100">
      <style jsx>
        {
          `
        .flex-1 {
          flex: 1;
        }
        .flex-3 {
          flex: 3;
        }
        `
        }
      </style>
      <div className="mw8 center flex ph0-l ph4 items-center h2-ns f5 f6-ns">
        <a href="/" className="flex-1 ttu f4 link white">
          <Logo scale={0.25} />
          Thích đọc
        </a>
        <ul className="flex flex-3 flex-start list">
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
