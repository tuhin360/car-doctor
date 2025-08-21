import React from "react";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import AboutUsSection from "./components/AboutUsSection";
import LocationSection from "./components/LocationSection";
import PopularProductSection from "./components/PopularProductSection";
import TeamSection from "./components/TeamSection";
import FeatureSection from "./components/FeatureSection";
import TestimonialSection from "./components/TestimonialSection";

const HomePage = () => {
  return (
    <div className="my-4">
      <BannerSection />
      <AboutUsSection/>
      <ServicesSection/>
      <LocationSection/>
      <PopularProductSection/>
      <TeamSection/>
      <FeatureSection/>
      <TestimonialSection/>
    </div>
  );
};

export default HomePage;
