import React from "react";
import "../styles/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/responsive.css";
import "../styles/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="#">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span> Call : +01 123455678990</span>
            </a>
            <a href="#">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span> Email : demo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span>Inance</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;