"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slideImages = [
  {
    img: "/assets/images/banner/1.jpg",
    title: ["Affordable", "Price For Car", "Servicing"],
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    alt: "Affordable car servicing",
  },
  {
    img: "/assets/images/banner/2.jpg",
    title: ["Quality", "Car Repair", "Service"],
    description:
      "Professional mechanics ready to fix your car quickly and reliably every time.",
    alt: "Quality car repair service",
  },
  {
    img: "/assets/images/banner/3.jpg",
    title: ["Fast", "And Reliable", "Maintenance"],
    description:
      "Get your car serviced without delays and enjoy smooth rides every day.",
    alt: "Fast and reliable car maintenance",
  },
  {
    img: "/assets/images/banner/4.jpg",
    title: ["Expert", "Technicians", "On Duty"],
    description:
      "Our team ensures your car is in the best hands with expert solutions.",
    alt: "Expert car technicians",
  },
  {
    img: "/assets/images/banner/5.jpg",
    title: ["Modern", "Tools & Equipments", ""],
    description:
      "We use the latest technology and tools to guarantee top-notch service.",
    alt: "Modern car service tools",
  },
  {
    img: "/assets/images/banner/6.jpg",
    title: ["Customer", "Satisfaction", "Guaranteed"],
    description:
      "Our clients love us! Experience hassle-free servicing with a smile.",
    alt: "Customer satisfaction guaranteed",
  },
];

// Custom arrow components (avoid inline functions for performance)
const renderArrowPrev = (onClickHandler, hasPrev, label) => {
  if (!hasPrev) return null;
  return (
    <button
      type="button"
      onClick={onClickHandler}
      aria-label={label}
      className="hidden sm:flex absolute bottom-4 right-18 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-105  "
    >
      <FaArrowLeft className="w-5 h-5 transition-all hover:scale-105 duration-300" />
    </button>
  );
};

const renderArrowNext = (onClickHandler, hasNext, label) => {
  if (!hasNext) return null;
  return (
    <button
      type="button"
      onClick={onClickHandler}
      aria-label={label}
      className="hidden sm:flex absolute bottom-4 right-4 z-20 -translate-y-1/2 bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-full transition-all hover:scale-105 duration-300 shadow-lg cursor-pointer"
    >
      <FaArrowRight className="w-5 h-5 transition-all hover:scale-105 duration-300" />
    </button>
  );
};

const BannerSection = () => {
  return (
    <div
      className="w-full relative overflow-hidden md:rounded-lg mb-26"
      aria-label="Image Carousel"
    >
      <Carousel
        showArrows={true}
        // autoPlay  //Todo: uncomment to enable   
        infiniteLoop 
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        interval={4000}
        stopOnHover
        transitionTime={600}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        // Optional: Add swipeable for mobile
        swipeable
      >
        {slideImages.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[600px] overflow-hidden"
            aria-hidden={false}
          >
            {/* Background Image */}
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              priority={idx === 0} // Only prioritize first image
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
              quality={85}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 text-left">
              <div className="max-w-2xl">
                {slide.title.map((line, i) => (
                  <h2
                    key={i}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 drop-shadow-md"
                  >
                    {line}
                  </h2>
                ))}

                <p
                  className="mt-4 text-sm sm:text-base md:text-lg text-gray-100 max-w-lg leading-relaxed"
                  aria-label={`Description: ${slide.description}`}
                >
                  {slide.description}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button className="bg-[#FF3811] hover:bg-[#f53610] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#FF3811] focus:outline-none cursor-pointer">
                    Discover More
                  </button>
                  <button className="border border-white hover:bg-gray-100 text-white hover:text-black px-6 py-3 rounded-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none cursor-pointer">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSection;
