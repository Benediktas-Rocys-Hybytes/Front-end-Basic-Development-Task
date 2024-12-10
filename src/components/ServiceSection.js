import React from "react";

const services = [
  {
    title: "Maintenance",
    imgSrc: "images/s1.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
  },
  {
    title: "Electrical",
    imgSrc: "images/s2.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
  },
  {
    title: "Plumbing",
    imgSrc: "images/s3.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal layout.",
  },
];

const ServiceSection = () => {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-sm-6 col-md-4 mx-auto" key={index}>
              <div className="box">
                <div className="img-box">
                  <img src={service.imgSrc} alt={service.title} />
                </div>
                <div className="detail-box">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="/">View More</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
