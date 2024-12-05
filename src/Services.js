import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <>
    <Header/>
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {[
            {
              img: "images/s1.png",
              title: "Maintenance",
              text: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            },
            {
              img: "images/s2.png",
              title: "Electrical",
              text: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            },
            {
              img: "images/s3.png",
              title: "Plumbing",
              text: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            },
          ].map((service, index) => (
            <div className="col-sm-6 col-md-4 mx-auto" key={index}>
              <div className="box">
                <div className="img-box">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="detail-box">
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="">View More</a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Services;
