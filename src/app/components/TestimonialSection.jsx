"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profession: "Car Mechanic",
    img: "/assets/images/team/1.jpg",
    comment: "The service was exceptional! Highly recommend!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Engineer",
    img: "/assets/images/team/2.jpg",
    comment: "Fantastic experience! My car feels brand new!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    profession: "Designer",
    img: "/assets/images/team/3.jpg",
    comment: "Professional, reliable, and efficient.",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Sarah Lee",
    profession: "Teacher",
    img: "/assets/images/team/4.jpg",
    comment: "Amazing service! My car has never run smoother.",
    rating: 4.8,
  },
  {
    id: 5,
    name: "David Wilson",
    profession: "Photographer",
    img: "/assets/images/team/5.jpg",
    comment: "Quick, professional, and affordable.",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Emily Davis",
    profession: "Nurse",
    img: "/assets/images/team/6.jpg",
    comment: "They fixed my car problem quickly. Great service!",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Robert King",
    profession: "Student",
    img: "/assets/images/team/7.jpg",
    comment: "Very professional, efficient, and reliable.",
    rating: 4.4,
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full cursor-pointer z-20 hover:bg-orange-600"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full cursor-pointer z-20 hover:bg-orange-600"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 relative">
      <SectionHeader
        subtitle="Testimonial"
        title="What Customers Say"
        description="Don't just take our word for it — hear from our satisfied customers who have experienced top-notch service and unmatched reliability."
      />

      <Slider {...settings} className="mt-10">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 h-full relative">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.profession}</p>
                  </div>
                </div>
                <FaQuoteRight className="text-orange-500 text-2xl" />
              </div>

              {/* Comment Section */}
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>

              {/* Rating Section */}
              <div className="flex items-center gap-2">
                <Rating
                  readonly
                  initialRating={testimonial.rating}
                  emptySymbol={<FaRegStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-orange-500" />}
                  fractions={2}
                />
                <span className="text-sm text-gray-600">({testimonial.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
