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
    this.state = { showMenu: false };
  }
  handleIconClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };
  render() {
    return (
      <nav
        className="w-100 fixed left-0 top-0 bg-white bb b--light-silver z-max"
      >
        <style jsx>
          {
            `
        ul.topnav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
        }

        ul.topnav li {float: left;}

        ul.topnav li a {
            display: inline-block;
            color: #000;
            text-align: center;
            padding: 16px 16px;
            text-decoration: none;
            transition: 0.3s;
            font-size: 17px;
        }
        ul.topnav li:first-child a {
          padding: 6px 24px 6px 16px;
        }

        /* light-red */
        ul.topnav li a:hover {background-color: rgba(255,114,92, .2)}

        ul.topnav li.icon {display: none;}
        @media screen and (max-width:680px) {
          ul.topnav li:not(:first-child) {display: none;}
          ul.topnav li.icon {
            float: right;
            display: inline-block;
          }
        }

        @media screen and (max-width:680px) {
          ul.topnav.responsive {position: relative;}
          ul.topnav.responsive li.icon {
            position: absolute;
            right: 0;
            top: 0;
          }
          ul.topnav.responsive li {
            float: none;
            display: inline;
          }
          ul.topnav.responsive li a {
            display: block;
            text-align: left;
          }
        }
      `
          }
        </style>
        <div className="mw8 center">
          <ul className={cl("topnav", { responsive: this.state.showMenu })}>
            <li className="flex justify-center items-center">
              <Link href="/">
                <a>
                  <span className="flex justify-center items-center">
                    <Logo scale={0.2} />
                    {" "}
                    <span className="pl2 ttu f4 black">Thích đọc</span>
                  </span>
                </a>
              </Link>
            </li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li className="icon">
              <a href="#" onClick={this.handleIconClick}>☰</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
