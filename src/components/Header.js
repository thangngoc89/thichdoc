import React, { Component, PropTypes } from "react";
import Link from "next/prefetch";
import cl from "classnames";
import handleClickAway from "../helpers/handle-click-away";

const propTypes = {
  fullWidth: PropTypes.bool
};

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sideNavOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  static propTypes = propTypes;

  componentDidMount() {
    document.body.addEventListener("click", this.closeNav);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeNav);
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle;
    const isOutsideClick = handleClickAway(toggleNode, e);
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      });
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  }
  render() {
    const { fullWidth = false } = this.props;
    const { sideNavOpen } = this.state;
    const mobileNav = sideNavOpen ? "open" : "";
    const openClass = sideNavOpen ? "animate" : "";
    const containerStyle = fullWidth ? "fullWidth" : "";
    return (
      <header className="header">
        <style jsx>
          {
            `
            .header {
              color: #eee;
              background: #fff;
              font-weight: normal;
            }

            .bumper {
              height: 70px;
              width: 100%;
            }
            .navFixed, .navWrapper, .navItems, .navItem {
              height: 70px;
            }
            .navFixed {
              background: #fff;
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              z-index: 9;
              height: 70px;
              border-bottom: 1px solid rgba(0, 0, 0, .0980392);
            }

            .navWrapper {
              display: flex;
              align-items: center;
              justify-content: space-between;
              left: 0;
              right: 0;
              max-width: 64rem;
              margin: auto;
              position: relative;
              padding: 0 1rem 0 1rem
            }

            .navLeft,
            .navRight,
            .navItems {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .logo, .logo img {
              max-height: 45px;
            }

            .navItems {
              padding: 0px;
              margin: 0px;
              list-style: none;
            }
            .navItems li, a {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .link {
              display: flex;
              align-items: center;
              padding: 7px 9px 12px 9px;
              color: inherit;
              text-decoration: none;
              color: #888;
              font-size: 15px;
              font-weight: 200;
              cursor: pointer;
              transition: color 0.2s linear;
              letter-spacing: -0.5px;
              border: none
            }
            .link:hover {
              color: #000;
              background: 0 0;
            }
            .caret {
              width: 8px !important;
              height: 4px !important;
              margin-left: 6px;
              stroke: white;
              opacity: .6;
              transition: opacity 0.2s linear;
            }
            .subNavItems {
              display: none;
              margin: 0;
              padding: 0;
              position: absolute;
              top: 54px;
              left: -50%;
              background: #fff;
              width: 185px;
              border: 1px solid rgba(0, 0, 0, .0980392);
              box-shadow: 0 2px 7px rgba(0, 0, 0, .05);
              border-radius: 0px;
            }
            .subNavItems > .link {
              width: 100%;
              margin-top: -1px;
              justify-content: flex-start;
              padding: 7px;
              padding-left: 15px;
              color: rgba(0, 0, 0, .64);
              transition: color 0s linear;
              position: relative;
              z-index: 1
            }
            .subNavItems .link:hover {
              color: #000;
              background: rgba(238, 238, 238, .3);
              width: 100%;
            }
            /*.subNavItems:after {
              border: solid transparent;
              content: " ";
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-color: transparent;
              border-width: 16px;
              margin-left: -16px;
              left: 50%;
              border-bottom-color: #fff;
              bottom: 100%;
              margin-bottom: -10px;
              z-index: 0;
            }*/
            .dropdown-caret {
              position: absolute;
              top: -10px;
              left: 83.5px; /* (width = 185px -18px) / 2 */
              width: 18px;
              height: 10px;
              float: left;
              overflow: hidden;
            }

            .caret-outer {
              position: absolute;
              display: inline-block;
              margin-left: -1px;
              border-bottom: 10px solid #8899a6;
              border-bottom-color: rgba(0,0,0,0.1);
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              height: auto;
              left: 0;
              top: 0;
              width: auto;
            }

            .caret-inner {
              position: absolute;
              display: inline-block;
              margin-left: -1px;
              top: 1px;
              left: 1px;
              border-left: 9px solid transparent;
              border-right: 9px solid transparent;
              border-bottom: 9px solid #fff;
              border-bottom-color: rgba(255,255,255,0.98);
            }
            .navItem:hover > .subNavItems {
              display: block;
            }
            .navItem:hover > .caret {
              opacity: 1;
            }
            .navItem:hover > .link {
              color: #000;
              background: 0 0;
            }

            .yellowLink {
              color: #ffd734
            }
            .toggle {
              height: 70px;
              width: 70px;
              position: absolute;
              right: 5px;
              top:0;
              z-index: 9;
              display: none;
            }
            .ham {
              position: absolute;
              top: 7px;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: 30px;
              height: 30px;
              cursor: pointer;
            }

            .bar, .bar:after, .bar:before {
              width: 30px;
              height: 2px;
            }

            .bar {
              position: relative;
              transform: translateY(10px);
              background: #000;
              transition: all 0ms 300ms;
            }
            .bar.animate {
              background: rgba(255, 255, 255, 0);
            }

            .bar:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 10px;
              background: #000;
              transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
            }

            .bar:after {
              content: "";
              position: absolute;
              left: 0;
              top: 10px;
              background: #000;
              transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
            }

            .bar.animate:after {
              top: 0;
              transform: rotate(45deg);
              transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
            }

            .bar.animate:before {
              bottom: 0;
              transform: rotate(-45deg);
              transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
            }
            @media (max-width: 768px) {
              .navRight {
                display: none;
              }
              .toggle {
                display: block;
                z-index: 11;
              }
              .open {
                display: flex;
                flex-direction: column;
                max-width: 100%;
                background: #fff;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                z-index: 10;
                padding:20px;
                border-bottom: 1px solid rgba(0, 0, 0, .0980392);
              }
              .open li, a {
                width: 100%;
                align-items: center;
                justify-content: center;
                height: 50px;
              }
              .navItems, .navItem, .navItem a {
                width: 100%;
              }
              .navItems {
                flex-direction: column;
                height: auto;
              }
              .navItems .subNavItems, .subNavItems:hover, .caret {
                display: none;
              }
              .subNavItems, .subNavItems:hover, .caret {
                display: none !important;
              }
            }
            `
          }
        </style>
        <div className="bumper" />
        <div className="navFixed">
          <div className={cl("mw8 center navWrapper", containerStyle)}>
            <div className="navLeft">
              <Link href="/">
                <a className="logo">
                  <img
                    alt="Thích đọc logo"
                    src="/static/images/logo.png"
                    draggable="false"
                  />
                </a>
              </Link>
            </div>
            <div ref="toggle" onClick={this.handleClick} className="toggle">
              <div className="ham">
                <div className={cl("bar", openClass)} />
              </div>
            </div>
            <nav className={cl("navRight", mobileNav)}>
              <ul className="navItems">
                <li className="navItem">
                  <Link href="/sach">
                    <a className="link">
                      Sách
                    </a>
                  </Link>
                </li>
                <li className="navItem">

                  <Link href="/tai-khoan/dang-nhap">
                    <a className="link">
                      Đăng nhập
                      <svg
                        className="caret"
                        width="8"
                        height="4"
                        viewBox="62 7 10 6"
                      >
                        <path
                          d="M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                  </Link>
                  <ul className="subNavItems">
                    <div className="dropdown-caret">
                      <span className="caret-outer" />
                      <span className="caret-inner" />
                    </div>
                    <li>
                      <Link href="/tai-khoan/dang-ki">
                        <a className="link">
                          Đăng kí
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
