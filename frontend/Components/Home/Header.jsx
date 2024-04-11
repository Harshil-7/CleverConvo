import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

//INTERNAL IMPORT
import { useStateContext } from "../../Context/index";

const Header = () => {
  const [activeStyle, setActiveStyle] = useState("Home"); // Set default active style

  //NAV MENU
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Chat",
      link: "/chat",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Service",
      link: "#",
    },
    {
      name: "Price",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  const handleLinkClick = (style) => {
    setActiveStyle(style);
  };
  return (
    <header>
      <button
        className="navbar-toggler d-xl-none d-inline navbar-menu-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#primaryMenu"
      >
        <span className="navbar-toggler-icon">
          <HiMenuAlt3 />
        </span>
      </button>
      <a href="/">
        <img
          src="/assets/images/logo3.png"
          alt="logo"
          className="img-fluid"
          height={70}
          width={250}
        />{" "}
      </a>
      {/* NAVLIST */}
      <nav className="header-nav-middle">
        <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
          <div
            className="offcanvas offcanvas-collapse order-xl-2"
            id="primaryMenu"
          >
            <div className="offcanvas-header navbar-shadow">
              <h5 className="mb-0">Menu</h5>
              <button
                className="btn-close lead"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {menuList.map((menu, i) => (
                  <li
                    className={`nav-item  ${
                      menu.name === activeStyle ? "active" : ""
                    }`}
                  >
                    <a
                      href={`${menu.link}`}
                      className="nav-link"
                      onClick={() => handleLinkClick(menu.name)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <a
        data-cursor="pointer"
        href="#"
        className="btn btn-theme d-sm-inline-block d-none"
      >
        <span>Login Now</span>
      </a>

      <span className="new_space"></span>
      {/* {address ? (
        <a
          onClick={() => {}}
          data-cursor="pointer"
          className="btn btn-theme d-sm-inline-block d-none"
        >
          <span>Connect</span>
        </a>
      ) : (
        <a
          onClick={() => {}}
          data-cursor="pointer"
          className="btn btn-theme d-sm-inline-block d-none"
        >
          <span>Disconnect</span>
        </a>
      )} */}
    </header>
  );
};

export default Header;
