import React, { useState } from "react";
import Link from "next/link";

//INTERNAL IMPORT
import { Login, Signup } from "../Components/Auth/index";

const login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section className="login-section">
        <Link href="/">
          <a>
            <img
              src="/assets/images/logo3.png"
              alt="logo"
              className="img-fluid logo-auth"
              height={70}
              width={250}
            />
          </a>
        </Link>

        <div className="row m-0">
          <div className="col-lg-7 d-lg-inlined-block p-0">
            <div className="login-animation">
              <div className="img-fluid mt-5">
                <img
                  src="assets/svg/auth/3.svg"
                  className="img-fluid"
                  alt="image-skeleton"
                />
              </div>
              {/* <div className="position-absolute">
                <div>
                  <img
                    src="assets/svg/auth/2.svg"
                    alt=""
                    className="img-fluid img-light mt-3 "
                    style={{ width: "70%", height: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="assets/svg/auth/1.svg"
                    alt=""
                    className="img-fluid img-base"
                    style={{ width: "70%", height: "auto" }}
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 ms-auto p-0">
            <div className="login-box">
              <div>
                <h2>
                  Welcom to <span>CleverConvo!</span>
                </h2>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "login" ? "active" : ""
                      }`}
                      id="login-tab"
                      type="button"
                      role="tab"
                      onClick={() => handleTabToggle("login")}
                    >
                      LogIn
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "signup" ? "active" : ""
                      }`}
                      id="signup-tab"
                      type="button"
                      role="tab"
                      onClick={() => handleTabToggle("signup")}
                    >
                      SignUp
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  {activeTab === "login" && (
                    <Login setActiveTab={setActiveTab} />
                  )}
                  {activeTab === "signup" && (
                    <Signup setActiveTab={setActiveTab} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
