import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const features = [
  { icon: "/assets/icons/group.svg", title: "Expert Team" },
  { icon: "/assets/icons/deliveryt.svg", title: "On Time Service" },
  { icon: "/assets/icons/person.svg", title: "24/7 Support" },
  { icon: "/assets/icons/Wrench.svg", title: "Best Equipment" },
  { icon: "/assets/icons/check.svg", title: "100% Guarantee" },
  { icon: "/assets/icons/deliveryt.svg", title: "Fast Delivery" },
];

const FeatureSection = () => {
  return (
    <div className="py-12">
      <SectionHeader
        subtitle="Core Features"
        title="Why Choose Us"
        description="We provide reliable service, expert mechanics, and modern equipment to ensure your vehicle gets the best care possible."
      />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center p-8 rounded-2xl shadow-lg overflow-hidden group cursor-pointer "
          >
            {/* Orange overlay (smooth fill) */}
            <div className="absolute inset-0 bg-[#FF3811] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center">
              <Image
                src={feature.icon}
                width={76}
                height={53}
                alt={feature.title}
                className="mb-4 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
              <p className="font-semibold text-lg text-gray-700 group-hover:text-white transition-colors duration-300 text-center">
                {feature.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
