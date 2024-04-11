import React from "react";

const About = () => {
  const listData = [
    {
      description:
        "Revolutionize your conversations with CleverConvo's innovative solutions.",
    },
    {
      description:
        "Experience seamless communication with our user-friendly platform.",
    },
    {
      description:
        "Unlock the power of meaningful dialogues with CleverConvo's advanced features.",
    },
  ];
  return (
    <section className="about-section section-b-space section-mb-space">
      <div className="bg-effect"> </div>

      <div className="container">
        <div className="row g-md-5 g-4">
          <div className="col-lg-6 order-lg-0 order-1">
            <div className="about-content">
              <div>
                <div className="title">
                  <span className="number-pattern">01.</span>
                  <h2 className="text-white">
                    Transform Communication with CleverConvo
                  </h2>
                </div>
                <p>
                  CleverConvo is revolutionizing the way we communicate. Our
                  platform offers innovative solutions that empower users to
                  connect effortlessly and engage meaningfully.
                </p>
                <ul>
                  {listData.map((list, i) => (
                    <li key={i + 1}>
                      <img src="assets/svg/tick.svg" alt="tick" />
                      {list.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <img
                src="assets/svg/character/1.svg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
