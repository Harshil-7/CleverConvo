import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Service = () => {
  const features = [
    {
      title: "Copy Write",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      title: "Digital Marketing",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      title: "SEO Sepcialist",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      title: "Content marker",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  non nobis inventore cum dolorem itaque tempore, suscipit
                  reprehenderit ut. Molestiae voluptatem officiis, ipsa error
                  aliquam sapiente minima fugiat atque dicta! Suscipit error
                  obcaecati impedit molestiae. Facere veritatis id deserunt
                  sint, in exercitationem maiores ducimus odit ea mollitia
                  quaerat ullam et eaque cumque.
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
