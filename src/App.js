import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
import About from "./About"; 
import Home from "./Home";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <Router>
      <div className="hero_area">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
