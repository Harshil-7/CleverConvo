import React from "react";
import { FaVideo, FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="home-content">
              <div className="bg-effect">
                <img
                  src="assets/images/home/home-bg.gif"
                  alt=""
                  className="img-fluid bg-gif"
                />
                <img
                  src="assets/svg/home/1.png"
                  alt=""
                  className="img-fluid effect1 rotate-effect"
                />
                <img
                  src="assets/svg/home/2.svg"
                  alt=""
                  className="img-fluid effect2 rotate-effect"
                />
              </div>
              <div>
                <h1>
                  USE CLEVERCONVO TO{" "}
                  <div className="title-effect">
                    <img src="assets/images/title-effect.png" alt="" />
                    <span>SIMPLIFY</span>
                  </div>{" "}
                  YOUR LIFE
                </h1>
                <p>
                  {" "}
                  Experience the future of communication with CleverConvo, your
                  all-in-one platform for multimodal conversations. Say goodbye
                  to monotonous chats and embrace the power of engaging
                  interactions through text, voice, images, and more. Whether
                  you prefer typing, or expressing yourself verbally,
                  CleverConvo adapts to your communication style seamlessly.
                </p>
                <a className="start-link" data-cursor="pointer">
                  <FaVideo />
                  Start Free Trail
                </a>
              </div>
            </div>
            <div className="home-laptop px-md-0 px-3">
              <div className="laptop-sec position-relative">
                <div className="hand-sec">
                  <img
                    src="assets/images/home/hand.png"
                    alt="hand"
                    className="img-fluid left-hand"
                  />
                  <img
                    src="assets/images/home/hand.png"
                    alt="hand"
                    className="img-fluid right-hand"
                  />
                  <img
                    src="assets/images/home/finger.png"
                    alt="finger"
                    className="img-fluid left-finger"
                  />
                  <img
                    src="assets/images/home/finger.png"
                    alt="finger"
                    className="img-fluid right-finger"
                  />
                </div>
                <img
                  src="assets/images/home/laptop.png"
                  alt="laptop"
                  className="img-fluid laptop-img"
                />
              </div>
              <div className="home-info">
                <ul className="info-list">
                  <li>Ask Anything</li>
                  <li>Generate Anything</li>
                  <li>Translate Anything</li>
                </ul>
                <ul className="star-rating">
                  {[1, 2, 3, 4, 5].map((el, i) => (
                    <li>
                      <FaStar />
                    </li>
                  ))}
                </ul>

                <h4>
                  Unleash the full potential of conversation with CleverConvo's
                  boundless capabilities.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
