import React from "react";
import { MdPaid } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

const Help = () => {
  return (
    <div
      className="tab-pane fade"
      id="help"
      role="tabpanel"
      aria-labelledby="help"
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
            <h3>FAQ</h3>
          </div>
        </div>
        <div className="faq-section main-section">
          <div className="container card p-0">
            <div className="card-header">
              <h3
                className="text-white title-basic aos-init aos-animate"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                FAQ
              </h3>
            </div>
            <div className="card-body px-sm-4 px-3">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {[1, 2, 3, 4, 5, 6, 7].map((el, i) => (
                  <div
                    className="accordion-item aos-init aos-animate"
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-delay={100 * 1 + i}
                  >
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        data-cursor="pointer"
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-controls="panelsStayOpen-collapseOne"
                        aria-expanded="true"
                      >
                        Is the Content unique?
                      </button>
                    </h2>
                    <div
                      className="accordion-sollapse collapse "
                      id="panelsStayOpen-collapseOne"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <p>
                          CleverConvo is an AI-based multimodal conversational
                          agent. It utilizes machine learning techniques to
                          generate human-like responses to text, video, and
                          audio inputs, enabling natural language interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
