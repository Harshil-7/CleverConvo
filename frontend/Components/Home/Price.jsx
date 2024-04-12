import React from "react";

const Price = () => {
  const priceTable = [
    {
      title: "Weekly Plan",
      price: "7 $",
      icon: "weekly.svg",
      items: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai Chat Bot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answer of Questions.",
        },

        {
          icon: "arrow.svg",
          item: "Limited Image Generations",
        },
        {
          icon: "arrow.svg",
          item: "Limited Audio Generations",
        },
        {
          icon: "arrow.svg",
          item: "Limited Video Generations",
        },
      ],
    },
    {
      title: "Monthly Plan",
      price: "49 $",
      icon: "monthly.svg",
      items: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai Chat Bot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answer of Questions.",
        },

        {
          icon: "arrow.svg",
          item: "Unlimited Image Generations",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited Audio Generations",
        },
        {
          icon: "arrow.svg",
          item: "Limited Video Generations",
        },
      ],
    },
    {
      title: "Yearly Plan",
      price: "99 $",
      icon: "yearly.svg",
      items: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai Chat Bot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answer of Questions.",
        },

        {
          icon: "arrow.svg",
          item: "Unlimited Image Generations",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited Audio Generations",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited Video Generations",
        },
      ],
    },
  ];

  return (
    <section className="pricing-section section-b-space">
      <div className="container">
        <div className="title-horizontal">
          <h2>Flexible Pricing Plans</h2>
          <p>
            Choose the perfect plan for your needs and budget with CleverConvo's
            flexible pricing options. Whether you're a small business or a large
            enterprise, we have a plan tailored just for you.
          </p>
        </div>
        <div className="row pricing-row g-xl-5 g-4 justify-content-center">
          {priceTable.map((price, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="pricing-box">
                <img
                  src="assets/svg/hanging.svg"
                  alt=""
                  className="img-fluid hanging-cls"
                />
                <div className="pricing-top">
                  <img
                    src="assets/svg/pricing/pricing-top.svg"
                    alt=""
                    className="img-fluid pricing-bg"
                  />
                  <img
                    src={`assets/svg/pricing/${price.icon}`}
                    alt=""
                    className="img-fluid "
                  />
                  <h3>{price.title}</h3>
                </div>
                <div className="pricing-mid">
                  <div className="clip-path-content">
                    <div>
                      <h2>{price.price}</h2>
                      <h4>/ Only</h4>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <div className="clip-path-content">
                    <ul>
                      {price.items.map((list, i) => (
                        <li>
                          <img
                            src={`assets/svg/${list.icon}`}
                            alt="arrow"
                            className="img-fluid"
                          />
                          <h4>{list.item}</h4>
                        </li>
                      ))}
                    </ul>

                    <a href="#" data-cursor="pointer" className="pricing-link">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
