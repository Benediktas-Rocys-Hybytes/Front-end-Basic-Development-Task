import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
import About from "./About"; 
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="hero_area">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
