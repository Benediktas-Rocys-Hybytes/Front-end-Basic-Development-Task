import React from "react";
import "./styles/style.css"; 
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Header/>
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          {/* About Text Section */}
          <div className="col-lg-5 col-md-6">
            <div className="detail-box">
              <h2>About us</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised. There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          {/* About Image Section */}
          <div className="col-lg-7 col-md-6">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
