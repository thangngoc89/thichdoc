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
      <div className="mw8 center flex ph4 items-center h3 f5">
        <a
          href="/"
          className="flex items-center flex-3 flex-1-ns justify-start ttu f4 link black"
        >
          <Logo scale={0.2} />
          <span className="ph2">Thích đọc</span>
        </a>
        <a className="dn-ns flex flex-1 justify-end">
          Menu
        </a>
        <ul className="flex-ns flex-3-ns justify-end dn flex-start list tr">
          <li className="">
            <NavLink href="/kham-pha">Khám phá</NavLink>
          </li>
          <li className="">
            <NavLink href="/noi-bat">Nổi bật</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
