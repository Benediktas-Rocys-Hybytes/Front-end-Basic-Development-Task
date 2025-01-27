import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initializeAnalytics, logPageView } from "./lib/analytics"; 
import ReactGA from "react-ga4";

const App = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  
    // custom event for language change
    ReactGA.event({
      category: "User Interaction",
      action: "Language Change",
      label: newLang, 
    });
  };

  // Track page views on route change
  const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
      initializeAnalytics(); 
      logPageView(location.pathname); 
    }, [location]);
  };

  // Apply the custom hook for tracking
  const PageTracker = () => {
    usePageTracking();
    return null; // This component doesn't render anything
  };

  return (
    <Router>
      <PageTracker /> {/* Ensures analytics tracking */}
      <div className="hero_area">
        <Header toggleLanguage={toggleLanguage} language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
