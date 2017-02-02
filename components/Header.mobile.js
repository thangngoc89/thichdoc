import React, { Component } from "react";
import Link from "next/link";
import Logo from "./Logo";
import cl from "classnames";
import MenuIcon from "../icons/menu.svg";

const NavLink = ({ href, children }) => {
  return (
    <a className="ph2 link black tracked f6" href={href}>
      {children}
    </a>
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
      `
          }
        </style>
        <div className="mw8 flex flex-column center">
          <div
            className="flex h3 items-center ph4 bb b--light-silver"
            style={{ flex: "1 1 100%" }}
          >
            <div className="flex flex-3">
              <a href="/" className="flex items-center ttu f4 link black">
                <Logo scale={0.2} />
                <span className="pl2">Thích đọc</span>
              </a>
            </div>
            <div>
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
            className={cl("flex flex-column ph0 mv0 list tc", {
              "hide-ul": this.state.hideMenu,
            })}
          >
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
  }
}

export default Header;
