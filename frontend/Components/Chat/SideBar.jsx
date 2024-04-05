import React from "react";
import { BsFillChatFill, BsQuestionSquare, BsStar } from "react-icons/bs";
import { BiTransferAlt, BiMenu } from "react-icons/bi";
import { MdPaid, MdSettings, MdClose } from "react-icons/md";

const SideBar = () => {
  return (
    <nav className="navbar navbar-expand-md p-0">
      <button
        className="navbar-toggler d-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainnavbarNav"
        aria-controls="mainnavbarNav"
        aria-expanded="false"
        aria-label="Toggele navigation"
      >
        <BiMenu className="mobil_custom_menu" />
      </button>

      <div className="collapse navbar-collapse" id="mainnavbarNav">
        <div className="menu-panel">
          <button
            className="mainnav-close d-block d-md-none"
            data-bs-toggle="collapse"
            data-bs-target="#mainnavbarNav"
          >
            <MdClose className="icon-custom" />
          </button>
          <a href="/" className="logo-icon d-none d-md-flex">
            <img src="assets/svg/logo-icon.svg" className="img-fluid" alt="" />
          </a>
          <ul className="nav nav-tabs menu-wrapper" id="myTab" role="tablist">
            <li
              className="nav-item"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Chat"
              role="presentation"
            >
              <button
                className="nav-link active"
                type="button"
                data-bs-toggle="tab"
                data-bs-target="#chat"
                role="tab"
                aria-controls="chat"
                aria-selected="true"
              >
                <BsFillChatFill className="icon-custom" />
                <span>Chat</span>
              </button>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="History"
              role="presentation"
            >
              <button
                className="nav-link"
                type="button"
                data-bs-toggle="tab"
                data-bs-target="#history"
                role="tab"
                aria-controls="history"
                aria-selected="true"
              >
                <BiTransferAlt className="icon-custom" />
                <span>History</span>
              </button>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Help"
              role="presentation"
            >
              <button
                className="nav-link"
                type="button"
                data-bs-toggle="tab"
                data-bs-target="#help"
                role="tab"
                aria-controls="help"
                aria-selected="true"
              >
                <BsQuestionSquare className="icon-custom" />
                <span>Help</span>
              </button>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Setting"
              role="presentation"
            >
              <button
                className="nav-link"
                type="button"
                data-bs-toggle="tab"
                data-bs-target="#settings"
                role="tab"
                aria-controls="settings"
                aria-selected="true"
              >
                <MdSettings className="icon-custom" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
