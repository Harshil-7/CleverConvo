import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUp = ({ setActiveTab }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (
      user.name ||
      user.email ||
      user.phone ||
      user.password ||
      user.passwordConfirm
    ) {
      const jsonObj = JSON.stringify(user);
      localStorage.setItem("userDetail", jsonObj);
      window.location.reload();
    }
  };

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="tab-pane fade show active"
      id="signup-tab-pane"
      role="tabpanel"
      aria-labelledby="signup-tab"
      tabIndex="0"
    >
      <form className="auth-form">
        <div className="mb-3 form-group">
          <i className="iconsax" data-icon="name"></i>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => handleFormFieldChange("name", e)}
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3 form-group">
          <i className="iconsax" data-icon="mail"></i>
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            placeholder="Enter your Email ID"
            onChange={(e) => handleFormFieldChange("email", e)}
            className="form-control"
            id="email"
          />
        </div>

        <div className="mb-3 form-group">
          <i className="iconsax" data-icon="phone"></i>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your Phone number"
            onChange={(e) => handleFormFieldChange("phone", e)}
            className="form-control"
            id="phone"
          />
        </div>
        <div className="mb-3 form-group">
          <i className="iconsax" data-icon="lock-2"></i>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password "
            onChange={(e) => handleFormFieldChange("password", e)}
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3 form-group">
          <i className="iconsax" data-icon="lock-2"></i>
          <label htmlFor="password1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter your confirm password "
            onChange={(e) => handleFormFieldChange("passwordConfirm", e)}
            className="form-control"
            id="password1"
          />
        </div>

        <a
          data-cursor="pointer"
          className="btn-solid w-100 text-center mt-4 pointer-link"
          onClick={(e) => createAccount(e)}
        >
          SignUp
        </a>

        <h4 className="text-title text-center mt-2">
          Already have an account?{" "}
          <a
            className="pointer-link"
            onClick={(e) => {
              handleTabToggle("login");
            }}
          >
            LogIN
          </a>
        </h4>
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

export default SignUp;
