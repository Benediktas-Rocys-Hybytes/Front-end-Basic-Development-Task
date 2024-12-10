import React from "react";
import SliderSection from "../components/SliderSection";
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import ProfessionalSection from "../components/ProfessionalSection";
import ServiceSection from "../components/ServiceSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection";

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
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Home;
