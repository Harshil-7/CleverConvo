import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Service = () => {
  const features = [
    {
      title: "Elevate Your Conversations",
      Description: "AI-Powered Chatbots for Seamless Interactions",
      image: "service-title.svg",
      icons: [
        {
          icon: "copy.svg",
          style: "outline-icon",
        },
        {
          icon: "copy-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Maximize Engagement",
      Description: " Multimodal Conversations Tailored to Your Needs",
      image: "service-title.svg",
      icons: [
        {
          icon: "graph.svg",
          style: "outline-icon",
        },
        {
          icon: "graph-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Unlock Insights",
      Description: " Data Analytics Tools for Informed Decision-Making",
      image: "service-title.svg",
      icons: [
        {
          icon: "search.svg",
          style: "outline-icon",
        },
        {
          icon: "search-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Enhanced Conversations",
      Description: "CleverConvo's Suite for All type of Conversations.",
      image: "service-title.svg",
      icons: [
        {
          icon: "text.svg",
          style: "outline-icon",
        },
        {
          icon: "text-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];
  return (
    <div className="service-section section-b-space ">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-4 service-row">
              {features.map((feature, i) => (
                <div key={i + 1} className="col-sm-6">
                  <div className="service-box">
                    <div className="service-icon">
                      {feature.icons.map((icon, i) => (
                        <img
                          key={i + 1}
                          className={`img-fluid outline-icon ${icon.style}`}
                          src={`assets/svg/service/${icon.icon}`}
                        />
                      ))}
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="assets/svg/service-title.svg"
                          className="img-fluid"
                        />
                        {feature.title}
                      </h3>
                      <p>{feature.Description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-info">
              <div>
                <div className="title">
                  <h2>For All Kind Of Creators</h2>
                  <h3>
                    Empowering creativity across all domains with CleverConvo's
                    versatile toolkit.
                  </h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  CleverConvo is your go-to platform for unleashing creativity.
                  Whether you're an entrepreneur, artist, or marketer, our
                  versatile toolkit has everything you need to connect with your
                  audience and bring your ideas to life. Join us today and
                  unlock your full potential!
                </p>
                <a href="#" data-cursor="pointer" className="btn-arrow">
                  <div className="icon-arrow">
                    <BsArrowUpRight />
                  </div>
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
