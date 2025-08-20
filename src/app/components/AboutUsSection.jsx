import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 my-24 px-4 md:px-0">
      {/* Left: Images */}
     <div className="relative flex justify-center md:justify-start items-center mt-6 md:mt-0">
  {/* Main Image */}
  <Image
    src="/assets/images/about_us/person.jpg"
    width={460}
    height={473}
    alt="Team Expert"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto -mt-20 sm:-mt-24 md:-mt-20 rounded-lg shadow-lg"
  />

  {/* Overlay Image - Responsive Size & Position */}
  <Image
    src="/assets/images/about_us/parts.jpg"
    width={327}
    height={332}
    alt="Car Parts"
    className="absolute bottom-2 right-2 
               w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 
               object-cover rounded-lg shadow-xl border-4 border-white
               sm:bottom-4 sm:right-4 md:bottom-6 md:right-6"
  />
</div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center gap-6 text-center md:text-left">
        <header>
          <h4 className="text-lg md:text-xl font-semibold text-[#FF3811] mb-2">
            About Us
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            We are qualified & experienced in this field
          </h2>
        </header>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          The majority have suffered alteration in some form, by injected humour,
          or randomised words which don’t look even slightly believable.
        </p>

        <button className="self-center md:self-start bg-[#FF3811] hover:bg-[#f53610] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#FF3811] cursor-pointer">
          Get More Info
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
