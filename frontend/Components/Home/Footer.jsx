import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="footer-main">
            <a href="#" className="footer-logo">
              <img src="assets/images/logo3.png" className="img-fluid" alt="" />
            </a>
            <h3>SUBSCRIBE TO OUR NEWSLATTER</h3>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  className="form-control"
                  placeholder="Enter your mail..."
                />
                <a href="#" data-cursor="pointer" className="btn-basic">
                  Subscribe
                </a>
              </div>
            </form>
            <ul className="social-links">
              <li>
                <a href="#" data-cursor="pointer">
                  <img
                    src="assets/svg/social/fb.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </li>
              <li>
                <a href="#" data-cursor="pointer">
                  <img
                    src="assets/svg/social/linkedin.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </li>
              <li>
                <a href="#" data-cursor="pointer">
                  <img
                    src="assets/svg/social/insta.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </li>
              <li>
                <a href="#" data-cursor="pointer">
                  <img
                    src="assets/svg/social/twitter.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="link-section">
            <div className="footer-title">
              <img src="assets/svg/star.svg" alt="star" className="img-fluid" />
              Quick Link
            </div>

            <div className="footer-content">
              <ul>
                <li>
                  <a href="#" data-cursor="pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/chat" data-cursor="pointer">
                    Chat
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Price
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="link-section">
            <div className="footer-title">
              <img src="assets/svg/star.svg" alt="star" className="img-fluid" />
              Our Service
            </div>

            <div className="footer-content">
              <ul>
                <li>
                  <a href="#" data-cursor="pointer">
                    Ask Anything
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Translate
                  </a>
                </li>{" "}
                <li>
                  <a href="/chat" data-cursor="pointer">
                    Generate Image
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Generate Music
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Generate Video
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="link-section">
            <div className="footer-title">
              <img src="assets/svg/star.svg" alt="star" className="img-fluid" />
              Our Company
            </div>

            <div className="footer-content">
              <ul>
                <li>
                  <a href="#" data-cursor="pointer">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Bolg
                  </a>
                </li>
                <li>
                  <a href="#" data-cursor="pointer">
                    Contract
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <h2 className="text-white">@2024 All the Copyright Reserved.</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
