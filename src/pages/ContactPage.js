import React from "react";
import "../styles/style.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const ContactPage = ({ language }) => {
  return (
    <>
    
    <ContactSection language={language}/>
  
    </>
  );
};

export default ContactPage;
