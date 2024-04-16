import React from "react";
import { BsArrowClockwise } from "react-icons/bs";

const Info = () => {
  return (
    <section className="info-section section-b-space">
      <div className="container">
        <div
          className="info-box"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="hand-effect d-md-block d-none">
            <img
              src="assets/svg/hand.svg"
              alt=""
              className="img-fluid left-hand"
            />
            <img
              src="assets/svg/hand.svg"
              alt=""
              className="img-fluid right-hand"
            />
          </div>
          <h2>
            Read to{" "}
            <span>
              move{" "}
              <img
                src="assets/svg/title-effect.svg"
                className="img-fluid"
                alt="title-effect"
              />
              ahead?
            </span>
          </h2>
          <p style={{ textAlign: "justify" }}>
            Welcome to CleverConvo, where innovation meets communication! Our
            groundbreaking project combines the power of multi-modal
            capability's with cutting-edge technology to revolutionize how we
            interact. From text to voice and beyond, CleverConvo adapts
            seamlessly to your preferred mode of communication, delivering an
            unparalleled user experience. Join us on this journey to redefine
            conversation and unlock endless possibilities.
          </p>

          <ul>
            <li className="tick-item">
              <img src="assets/svg/tick.svg" alt="tick" className="img-fluid" />
              Multimodal Experience
            </li>
            <li className="tick-item">
              <img src="assets/svg/tick.svg" alt="tick" className="img-fluid" />
              Get Details on any topic
            </li>
            <li className="tick-item">
              <img src="assets/svg/tick.svg" alt="tick" className="img-fluid" />
              Quick Advisor to help you
            </li>
          </ul>

          <a href="#" data-cursor="pointer" className="btn-arrow">
            <div className="icon-arrow">
              <BsArrowClockwise />
            </div>
            Contact us now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
