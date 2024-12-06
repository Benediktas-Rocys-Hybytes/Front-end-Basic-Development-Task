import React from "react";
import SliderSection from "./SliderSection";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import ProfessionalSection from "./ProfessionalSection";
import ServiceSection from "./ServiceSection";
import Header from "./Header";
import Footer from "./Footer";
import ClientSection from "./ClientSection";

const Home = () => {
  return (
    <div>
        <Header/>
      <SliderSection />
      <FeatureSection />
      <AboutSection />
      <ProfessionalSection />
      <ServiceSection />
      <ClientSection/>
      <Footer/>
    </div>
  );
};

export default Home;
