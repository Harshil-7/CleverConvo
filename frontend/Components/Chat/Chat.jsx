import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdPaid } from "react-icons/md";
import Link from "next/link";

//internal import
import { Form } from "./index";
// import { useStateContext } from "../../Context/index";

const Chat = () => {
  //State Variable
  const [active, setActive] = useState("Ask anything");
  const [hide, setHide] = useState(true);

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };

  const productList = [
    "Ask anything",
    "Content Writer",
    "Code Generator",
    "Translate anything",
    "Social Media",
    "Email Generator",
    "Personal Advise",
    "Password Generator",
    "Travel / Hangout",
    "Essay Writer",
    "Image Generator",
    "Music Generator",
    "Video Generator",
    // "Image Description",
  ];

  return (
    <div
      className="tab-pane fade show active"
      id="chat"
      role="tabpanel"
      aria-labelledby="chat"
      tabIndex="0"
    >
      <div className="main-wrapper">
        {/* Navbar start */}
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarnav"
            aria-expanded="false"
            aria-label="Toggele navigation"
          >
            <BiMenu className="mobil_custom_menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="inner-menu-panel">
              <button
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                className="inner-close d-block d-lg-none"
              >
                Back
              </button>
              <div className="search-box">
                <i className="iconsax" data-icon="search-normal-2"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here.."
                />
              </div>
              <ul className="inner-links-list" id="innerLink">
                {productList.map((product, i) => (
                  <li
                    key={i + 1}
                    onClick={() => setActive(product)}
                    className={product == active ? "active" : ""}
                  >
                    <a href="#!" data-title="Ask anything">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        {/* Header Start */}
        <div className="chat-header">
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggele navigation"
            >
              <BiMenu className="mobil_custom_menu" />
            </button>
            <Link href="/">
              <a className="logo-icon d-flex d-md-none">
                <img
                  src="assets/svg/logo-icon.svg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </Link>

            <h3 id="targetDiv">{active}</h3>
          </div>
        </div>

        {/* Header End */}

        <div className="main-chat">
          <div className="no-chat">
            {hide ? (
              <div>
                <img
                  src="assets/svg/no-chat.svg"
                  className="img-fluid"
                  alt=""
                />
                <h3>
                  {active == "Ask anything" ? "" : "Ask to "}
                  {active}
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="" id="chat_container"></div>
          <Form close={close} active={active} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
