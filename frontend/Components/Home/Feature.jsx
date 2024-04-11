import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";
const Feature = () => {
  const itmes = [
    {
      title: "Code Generator",
      Description: "AI-Powered Chatbots for Seamless Interactions",
      icons: [
        {
          icon: "code.svg",
          style: "outline-icon",
        },
        {
          icon: "code-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "ASO expert",
      Description: " Multimodal Conversations Tailored to Your Needs",
      icons: [
        {
          icon: "play.svg",
          style: "outline-icon",
        },
        {
          icon: "play-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Inst Caption",
      Description: " Data Analytics Tools for Informed Decision-Making",
      icons: [
        {
          icon: "insta.svg",
          style: "outline-icon",
        },
        {
          icon: "insta-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Email Generator",
      Description: "CleverConvo's Suite for All type of Conversations.",
      icons: [
        {
          icon: "mail.svg",
          style: "outline-icon",
        },
        {
          icon: "mail-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Hashtag Writer",
      Description: "CleverConvo's Suite for All type of Conversations.",
      icons: [
        {
          icon: "hashtag.svg",
          style: "outline-icon",
        },
        {
          icon: "hashtag-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "E-commerce",
      Description: "CleverConvo's Suite for All type of Conversations.",
      icons: [
        {
          icon: "box.svg",
          style: "outline-icon",
        },
        {
          icon: "box-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Ads and Marketing",
      Description: "CleverConvo's Suite for All type of Conversations.",
      icons: [
        {
          icon: "marketing.svg",
          style: "outline-icon",
        },
        {
          icon: "marketing-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "YouTube",
      Description: "CleverConvo's Suite for All type of Conversations.",
      icons: [
        {
          icon: "message.svg",
          style: "outline-icon",
        },
        {
          icon: "message-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];
  return (
    <section className="feature-section section-b-space">
      <div className="bg-effect">
        <img
          src="assets/images/feature.gif"
          alt=""
          className="img-fluid feature-left"
        />
        <img
          src="assets/images/feature.gif"
          alt=""
          className="img-fluid feature-right"
        />
        <img
          src="assets/images/feature-bg.png"
          alt=""
          className="img-fluid feature-bg"
        />

        <span className="round-effect"></span>
      </div>
      <div className="container">
        <div className="title-basic">
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        </div>
        <div className="swiper featureSlider">
          <div className="swiper-wrapper">
            <div className="swiper-slider">
              <div className="row g-xl-5 g-4">
                {itmes.map((item, i) => (
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="feature-box">
                      <div className="feature-top">
                        <div className="feature-icon">
                          {item.icons.map((icon, i) => (
                            <img
                              src={`assets/svg/feature/${icon.icon}`}
                              alt="icon"
                              className={`img-fluid ${icon.style}`}
                            />
                          ))}
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                      <h4>{item.Description}</h4>
                      <div className="link-overflow" data-cursor="pointer">
                        <a href="#">
                          Read more <BsBoxArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
