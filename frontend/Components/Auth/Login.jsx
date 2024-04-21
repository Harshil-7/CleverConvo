import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = ({ setActiveTab }) => {
  const [user, setuser] = useState();

  useEffect(() => {
    const str = localStorage.getItem("userDetail");
    const parsedObj = JSON.parse(str);

    if (parsedObj?.name) {
      setuser(parsedObj);
    }
  }, []);

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div
      className="tab-pane fade show active"
      id="login-tab-pane"
      role="tabpanel"
      aria-labelledby="login-tab"
      tabIndex="0"
    >
      <form className="auth-form">
        {user ? (
          ""
        ) : (
          <>
            <div className="mb-3 form-group">
              <i className="iconsax" data-icon="mail"></i>
              <label htmlFor="emailid" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter your mail-id"
                className="form-control"
                id="emialid"
              />
            </div>

            <div className="mb-2 form-group">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <i className="iconsax" data-icon="lock-2"></i>
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <a className="pointer-link">Forgot Password?</a>
              </div>
              <input
                type="password"
                placeholder="Enter your password "
                className="form-control"
                id="password"
              />
            </div>
          </>
        )}

        <a
          href={user ? "/chat" : ""}
          data-cursor="pointer"
          className="btn-solid w-100 text-center mt-3"
        >
          {user ? "Start Chatting" : "Login"}
        </a>

        {user ? (
          ""
        ) : (
          <h4 className="text-title text-center mt-2">
            Don't have an Account?{" "}
            <a
              className="pointer-link"
              onClick={(e) => {
                handleTabToggle("signup");
              }}
            >
              Signup
            </a>
          </h4>
        )}
        <a
          href="#"
          data-cursor="pointer"
          className="btn-solid w-100 text-center mt-5"
        >
          <FcGoogle
            style={{
              width: "25px",
              height: "auto",
              verticalAlign: "text-bottom",
            }}
          />
          {"  "}
          Google
        </a>
        <a
          href="#"
          data-cursor="pointer"
          className="btn-solid w-100 text-center mt-3"
        >
          <FaGithub
            style={{
              width: "25px",
              height: "auto",
              verticalAlign: "text-bottom",
            }}
          />
          {"  "}
          Github
        </a>
      </form>
    </div>
  );
};

export default Login;
