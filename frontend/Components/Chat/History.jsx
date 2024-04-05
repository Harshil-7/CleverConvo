import React from "react";
import { MdPaid } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

const History = () => {
  return (
    <div
      className="tab-pane fade"
      id="history"
      role="tabpanel"
      aria-labelledby="history"
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
              aria-label="Toggele navigation"
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
            <h3>History</h3>
          </div>
        </div>
        <div className="main-section">
          <div className="container card p-8">
            <div className="card-header">
              <h3 className="text-white">Detailed History</h3>
              <form className="auth-form d-none d-md-block">
                <div className="form-group">
                  <i className="iconsax" data-icon="search-normal-2"></i>
                  <input
                    type="search"
                    placeholder="Search Here..."
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div className="card-body px-sm-4 px-3">
              <ul className="history-sec">
                {[1, 2, 3, 4, 5, 6, 7].map((el, i) => (
                  <li key={i + 1} className="history-main">
                    <div className="history-deatil text-truncate">
                      <i className="iconsax" data-icon="message-text"></i>
                      <div>
                        <p>What is app Development?</p>
                        <p className="d-sm-none d-inline-block">2 min ago</p>
                      </div>
                    </div>
                    <div className="history-time d-sm-flex d-none">
                      <ul>
                        <li>Chat</li>
                        <li>2 min ago</li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
