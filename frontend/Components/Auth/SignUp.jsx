"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFirstOrderAlt } from "react-icons/fa";
import Spinner from "./Spinner";
import { useRegister } from "../../hooks";

const SignUp = ({ setActiveTab }) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    re_password,
    isLoading,
    handleTabToggle,
    onChange,
    onSubmit,
  } = useRegister(setActiveTab);

  return (
    <div
      className="tab-pane fade show active"
      id="signup-tab-pane"
      role="tabpanel"
      aria-labelledby="signup-tab"
      tabIndex="0"
    >
      <form className="auth-form" onSubmit={onSubmit}>
        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={onChange}
            className="form-control"
            id="first_name"
            value={first_name}
            required
          />
        </div>

        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={onChange}
            className="form-control"
            id="last_name"
            value={last_name}
            required
          />
        </div>

        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            placeholder="Enter your Email ID"
            onChange={onChange}
            className="form-control"
            id="email"
            value={email}
            required
          />
        </div>

        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="phone_number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your Phone number"
            onChange={onChange}
            className="form-control"
            id="phone_number"
            value={phone_number}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password "
            onChange={onChange}
            className="form-control"
            id="password"
            value={password}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="re_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter your confirm password "
            onChange={onChange}
            className="form-control"
            id="re_password"
            value={re_password}
            required
          />
        </div>

        <button
          type="submit"
          data-cursor="pointer"
          className="btn-solid w-100 text-center mt-4 pointer-link"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "SignUp"}
        </button>

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
