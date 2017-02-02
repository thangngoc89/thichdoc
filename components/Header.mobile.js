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
    <header className="mb0 bg-white fixed top-0 left-0 w-100 f5">
      <div className="mw8 flex flex-column center">
        <div
          className="flex h3 items-center ph4 bb b--light-silver"
          style={{ flex: "1 1 100%" }}
        >
          <a href="/" className="flex flex-2 items-center ttu f4 link black">
            <Logo scale={0.2} />
            <span className="ph2">Thích đọc</span>
          </a>
          <a className="flex flex-1 justify-end bg-grey">
            Menu
          </a>
        </div>
        <ul className="dn flex-column ph0 mv0 list tc">
          <li className="bb b--light-silver pv3">
            <NavLink href="/kham-pha">Khám phá</NavLink>
          </li>
          <li className="bb b--light-silver pv3">
            <NavLink href="/noi-bat">Nổi bật</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
