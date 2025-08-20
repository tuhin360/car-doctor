import React from "react";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import AboutUsSection from "./components/AboutUsSection";

const HomePage = () => {
  return (
    <div className="my-4">
      <BannerSection />
      <ServicesSection />
      <AboutUsSection/>
    </div>
  );
};

export default HomePage;
