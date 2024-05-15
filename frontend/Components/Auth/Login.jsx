import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFirstOrderAlt, FaGithub } from "react-icons/fa";
import { useLogin } from "../../hooks";
import Spinner from "./Spinner";

const Login = ({ setActiveTab }) => {
  const { email, password, isLoading, onChange, onSubmit, handleTabToggle } =
    useLogin(setActiveTab);

  return (
    <div
      className="tab-pane fade show active"
      id="login-tab-pane"
      role="tabpanel"
      aria-labelledby="login-tab"
      tabIndex="0"
    >
      <form className="auth-form" onSubmit={onSubmit}>
        <div className="mb-3 form-group">
          <FaFirstOrderAlt className="iconsax" size={45} />
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            placeholder="Enter your mail id"
            onChange={onChange}
            className="form-control"
            id="email"
            value={email}
            required
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
            <FaFirstOrderAlt className="iconsax" size={45} />
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <Link href="" className="pointer-link">
              Forgot Password?
            </Link>
          </div>
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

        <button
          type="submit"
          data-cursor="pointer"
          className="btn-solid w-100 text-centermt-4 pointer-link"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Login"}
        </button>
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
