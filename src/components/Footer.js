import React from "react";
import "../styles/style.css";
import "../styles/font-awesome.min.css";

const Footer = () => {
  const isRTL = document.documentElement.dir === "rtl";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* Info Section */}
      <section className="info_section">
        <div className="container">
          <h4>{isRTL ? "تواصل معنا" : "Get In Touch"}</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className={`info_items ${isRTL ? "rtl-layout" : ""}`}>
                <div className="row">
                  {/* Location Info */}
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <p>{isRTL ? "النص الوهمي" : "Lorem Ipsum is simply dummy text"}</p>
                      </div>
                    </a>
                  </div>
                  {/* Phone Info */}
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>+02 1234567890</p>
                      </div>
                    </a>
                  </div>
                  {/* Email Info */}
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>demo@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Section */}
        <div className="social-box">
          <h4>{isRTL ? "تابعنا" : "Follow Us"}</h4>
          <div className="box">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {isRTL ? "كل الحقوق محفوظة" : "All Rights Reserved"} By{" "}
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
