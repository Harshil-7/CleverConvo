import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { logout as setLogout } from "../../redux/features/authSlice";
import { useLogoutMutation } from "../../redux/features/authApiSlice";
import { useStateContext } from "../../Context/index";

const Header = () => {
  const [activeStyle, setActiveStyle] = useState("Home");
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated } = useStateContext();

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

  // useEffect(() => {
  //   // Check isAuthenticated value whenever it changes
  //   console.log(isAuthenticated);
  // }, [isAuthenticated]);

  const handleLinkClick = (style) => {
    setActiveStyle(style);
  };

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        console.log(isAuthenticated);
        isAuthenticated = false;
        console.log(isAuthenticated);
      })
      .finally(() => {
        router.push("");
      });
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
      <Link href="/">
        <a>
          <img
            src="/assets/images/logo3.png"
            alt="logo"
            className="img-fluid"
            height={70}
            width={250}
          />
        </a>
      </Link>
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
                    <Link href={`${menu.link}`}>
                      <a
                        className="nav-link"
                        onClick={() => handleLinkClick(menu.name)}
                      >
                        {menu.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isAuthenticated ? (
        <button
          data-cursor="pointer"
          className="btn btn-theme d-sm-inline-block d-none"
          onClick={handleLogout}
          role="button"
        >
          <span>Logout</span>
        </button>
      ) : (
        <Link href="/login">
          <a
            data-cursor="pointer"
            className="btn btn-theme d-sm-inline-block d-none"
          >
            <span>Login Now</span>
          </a>
        </Link>
      )}
      <span className="new_space"></span>
    </header>
  );
};

export default Header;
