import React from "react";
import SliderSection from "../components/SliderSection";
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import ProfessionalSection from "../components/ProfessionalSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection";

const Home = ({ language }) => {

  return (
    <div>
      
      <SliderSection language={language}  />
      <FeatureSection language={language}/>
      <AboutSection language={language}/>
      <ProfessionalSection language={language} />
      <ServiceSection language={language}/>
      <ClientSection language={language}/>
      <ContactSection language={language}/>
 
    </div>
  );
};

export default Home;
