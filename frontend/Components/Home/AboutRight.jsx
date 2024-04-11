import React from "react";

const AboutRight = () => {
  const listData = [
    {
      description:
        "Empower your team with CleverConvo's collaborative features.",
    },
    {
      description:
        "Streamline your workflow and boost productivity with our intuitive interface.",
    },
    {
      description:
        "Stay organized and efficient with CleverConvo's project management tools.",
    },
  ];
  return (
    <section className="about-section right-version section-b-space section-mb-space">
      <div className="bg-effect"> </div>

      <div className="container">
        <div className="row g-md-5 g-4">
          <div className="col-lg-6">
            <div className="about-img">
              <img
                src="assets/svg/character/2.svg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="about-content">
              <div>
                <div className="title">
                  <span className="number-pattern">02.</span>
                  <h2 className="text-white">
                    Empower Your Team with CleverConvo
                  </h2>
                </div>
                <p>
                  CleverConvo is more than just a communication platform. It's a
                  powerful tool that empowers teams to collaborate effectively
                  and achieve their goals.
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
        </div>
      </div>
    </section>
  );
};

export default AboutRight;
