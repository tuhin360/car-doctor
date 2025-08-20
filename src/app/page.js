import React from "react";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import AboutUsSection from "./components/AboutUsSection";
import LocationSection from "./components/LocationSection";

const HomePage = () => {
  return (
    <div className="my-4">
      <BannerSection />
      <AboutUsSection/>
      <ServicesSection/>
      <LocationSection/>
    </div>
  );
};

export default HomePage;
