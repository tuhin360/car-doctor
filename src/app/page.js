import React from "react";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";

const HomePage = () => {
  return (
    <div className="my-4">
      <BannerSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
