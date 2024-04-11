import React from "react";

const AboutThird = () => {
  const listData = [
    {
      description:
        "Protect your data and ensure privacy with CleverConvo's robust security measures.",
    },
    {
      description:
        "Enjoy peace of mind knowing that your information is safe and secure.",
    },
    {
      description:
        "Comply with industry standards and regulations with CleverConvo's compliance features.",
    },
  ];
  return (
    <section className="about-section section-b-space ">
      <div className="bg-effect"> </div>

      <div className="container">
        <div className="row g-md-5 g-4">
          <div className="col-lg-6 order-lg-0 order-1">
            <div className="about-content">
              <div>
                <div className="title">
                  <span className="number-pattern">03.</span>
                  <h2 className="text-white">
                    Trust CleverConvo with Your Data
                  </h2>
                </div>
                <p>
                  At CleverConvo, we prioritize the security and privacy of your
                  data. Our platform is built with robust security measures to
                  ensure that your information remains safe and confidential.
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
                src="assets/svg/character/3.svg"
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

export default AboutThird;
