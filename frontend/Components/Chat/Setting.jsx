import React, { useState, useEffect } from "react";
import { MdPaid } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

//internal imports
// import { useStateContext } from "../../Context/index";

const Setting = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const str = localStorage.getItem("userDetail");
    const parsedObj = JSON.parse(str);

    if (parsedObj?.name) {
      setUser(parsedObj);
    }
  }, []);

  const [userNew, setUserNew] = useState({
    name: user?.name || "",
    surname: "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm: user?.passwordConfirm || "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUserNew({ ...userNew, [fieldName]: e.target.value });
  };

  const updateUser = () => {
    const jsonObj = JSON.stringify(userNew);
    localStorage.setItem("userDetail", jsonObj);
    // window.location.reload();
  };
  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings"
      tabIndex="0"
    >
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu className="mobil_custom_menu" />
            </button>

            <a href="/" className="logo-icon d-flex d-md-none">
              <img
                src="assets/svg/logo-icon.svg"
                className="img-fluid"
                alt=""
              />
            </a>
            <h3>Settings</h3>
          </div>
        </div>

        <div className="main-section ">
          <div className="container card p-8 mb-5">
            <div className="card-header">
              <h3 className="text-white">My Account</h3>
            </div>

            <div className="card-body px-sm-4 px-3">
              <div className="my-account">
                <div className="user-detail"></div>
                <div className="user-main">
                  <div className="user-profile">
                    <img
                      src="theblockchaincoders.jpg"
                      className="img-fluid"
                      alt=""
                    />

                    <i className="iconsax" data-icon="camera"></i>
                  </div>

                  <div className="user-option">
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>

                <form className="msger-inputarea mb-0">
                  <div className="row">
                    <div className="col-sm-6 cl-12">
                      <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          placeholder={user?.name}
                          onChange={(e) => handleFormFieldChange("name", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 cl-12">
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          placeholder={user?.surname}
                          onChange={(e) => handleFormFieldChange("surname", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 cl-12">
                      <div className="mb-3">
                        <label htmlFor="emailid" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="emailid"
                          placeholder={user?.email}
                          onChange={(e) => handleFormFieldChange("email", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card-footer">
              <div className="setting-btn">
                <button className="select-plan" onClick={() => updateUser()}>
                  Update
                </button>
                <button className="on-select-plan select-plan">Cancel</button>
              </div>
            </div>
          </div>

          <div className="container card p-8 mb-5">
            <div className="card-header">
              <h3 className="text-white">Change Password</h3>
            </div>
            <div className="card-body px-sm-4 px-3">
              <div className="my-account">
                <form className="msger-inputarea mb-0">
                  <div className="row">
                    <div className="col-sm-6 cl-12">
                      <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                          New Password
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          placeholder={"New password"}
                          onChange={(e) => handleFormFieldChange("password", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 cl-12">
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          placeholder={"Confirm Password"}
                          onChange={(e) =>
                            handleFormFieldChange("passwordConfirm", e)
                          }
                          className="msger-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-footer">
              <div className="setting-btn">
                <button className="select-plan" onClick={() => updateUser()}>
                  Update
                </button>
                <button className="on-select-plan select-plan">Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
