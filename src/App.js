import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <Router>
      <div className="hero_area">
        <Header toggleLanguage={toggleLanguage} language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
