import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About"; 
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

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
