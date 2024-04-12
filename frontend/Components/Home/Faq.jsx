import React from "react";

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="title-basic">
          <h2 className="text-white">FAQ's</h2>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <div key={i + 1} className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  data-cursor="pointer"
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-controls="panelsStayOpen-collapseOne"
                  aria-expanded="true"
                >
                  Is the content Unique?
                </button>
              </h2>

              <div
                className="accordion-collapse collapse"
                id="panelsStayOpen-collapseOne"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem autem possimus laboriosam nostrum odio quibusdam,
                    nam suscipit necessitatibus blanditiis quae voluptatum
                    impedit. Iste repellendus quisquam vero facilis, placeat
                    inventore obcaecati!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
