import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";
const Feature = () => {
  const itmes = [
    {
      title: "Code Generator",
      Description: "Empower your projects with CleverConvo's code generation",
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
      title: "Translator",
      Description:
        "Facilitate global communication effortlessly with CleverConvo's Translator",
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
    {
      title: "Image Generator",
      Description:
        "Create eye-catching visuals effortlessly with CleverConvo's Image Generator",
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
      Description:
        "Effortlessly create professional email templates with CleverConvo's Email Generator",
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
      title: "Social Media",
      Description:
        "Expand your reach and engagement with CleverConvo's Social Media integration",
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
      title: "Content Writer",
      Description:
        "Craft compelling content with CleverConvo's Content Writer.",
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
      title: "Music Generator",
      Description:
        "Compose melodies effortlessly with CleverConvo's innovative music generation tool.",
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
      title: "Video Generator",
      Description:
        "Create dynamic videos effortlessly with CleverConvo's Video Generator.",
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
          <h2>
            Unlock limitless possibilities with CleverConvo's innovative
            features
          </h2>
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
