import React from "react";
import "../styles/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/responsive.css";
import "../styles/style.css";
import { Link } from "react-router-dom";

const Header = ({ language, toggleLanguage }) => {
  const translations = {
    en: {
      phone: "Call : +01 123455678990",
      email: "Email : demo@gmail.com",
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact Us",
      brand: "Inance",
      toggle: "عربي",
    },
    ar: {
      phone: "اتصل : +01 123455678990",
      email: "البريد الإلكتروني : demo@gmail.com",
      home: "بيت",
      about: "عن",
      services: "خدمات",
      contact: "اتصل بنا",
      brand: "اينانس",
      toggle: "English",
    },
  };

  const t = translations[language];

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className={`contact_nav ${language === "ar" ? "rtl-layout" : ""}`}>
            <a href="tel:+01123455678990">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span> {t.phone}</span>
            </a>
            <a href="mailto:demo@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span> {t.email}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span>{t.brand}</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={false}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`navbar-nav ${language === "ar" ? "rtl-nav" : ""}`}>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {t.home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {t.about}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    {t.services}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    {t.contact}
                  </Link>
                </li>
              </ul>
              {/* Language Toggle Button */}
              <button onClick={toggleLanguage} className="btn btn-primary ml-3">
                {t.toggle}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
