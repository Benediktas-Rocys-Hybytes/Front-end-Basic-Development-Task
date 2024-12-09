import React from "react";

const ContactSection = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="d-flex">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
          {/* Map */}
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Old%20City%20Hall%20Station&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
