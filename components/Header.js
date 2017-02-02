import React, { Component } from "react";
import Link from "next/prefetch";
import Logo from "./Logo";
import cl from "classnames";
import MenuIcon from "../icons/menu.svg";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="ph2 link black tracked f6">
        {children}
      </a>
    </Link>
  );
};

class Header extends Component {
  constructor() {
    super();
    this.state = { hideMenu: true };
  }
  onMenuClick = () => {
    this.setState(prevState => ({ hideMenu: !prevState.hideMenu }));
  };
  render() {
    return (
      <header className="mb0 bg-white fixed top-0 left-0 w-100 f5">
        <style jsx>
          {
            `
        ul {
          max-height: 50vh; 
          transition: max-height 0.4s ease;
        }

        .hide-ul {
          max-height: 0vh;
        }
        .hide-ul > li {
          display: none;
        }
        @media (min-width: 30em) {
          .hide-ul {
            max-height: 50vh;
          }
          .hide-ul > li {
            display: block;
          }
        }
        .flex-100 {
          flex: 1 1 100%;
        }
        @media (min-width: 30em) {
          .flex-100 {
            flex: 1 1 auto;
          }
        }
      `
          }
        </style>
        <div className="mw8 flex flex-column flex-row-ns center">
          <div
            className="flex flex-1 flex-100 h3 ph3 items-center bb bn-ns b--light-silver"
          >
            <div className="flex flex-3">
              <Link href="/">
                <a className="flex items-center ttu f4 link black">
                  <Logo scale={0.2} />
                  <span className="pl2">Thích đọc</span>
                </a>
              </Link>
            </div>
            <div className="dn-ns">
              <a
                onClick={this.onMenuClick}
                className="flex items-center pointer"
              >
                <MenuIcon />
                <span className="pl2">Menu</span>
              </a>
            </div>
          </div>
          <ul
            className={cl(
              "flex flex-column flex-2 flex-row-ns items-center justify-end ph0 mv0 list tc",
              { "hide-ul": this.state.hideMenu },
            )}
          >
            <li className="bb bn-ns b--light-silver pv3 w-100 w-auto-ns">
              <NavLink href="/kham-pha">Khám phá</NavLink>
            </li>
            <li className="bb bn-ns b--light-silver pv3 w-100 w-auto-ns">
              <NavLink href="/noi-bat">Nổi bật</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
