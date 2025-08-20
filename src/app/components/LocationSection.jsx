import Image from "next/image";
import React from "react";

const LocationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black text-white py-20 px-6 rounded-lg shadow-lg mx-4 md:mx-0 mb-20">
      {/* Phone */}
      <div className="flex flex-row justify-center md:justify-start items-center gap-4">
        <Image
          src="/assets/images/location/phone.png"
          alt="Phone Icon"
          width={46}
          height={41}
        />
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-300">
            Have a question?
          </p>
          <h3 className="font-bold text-xl md:text-2xl text-white">
            +2546 251 2658
          </h3>
        </div>
      </div>

      {/* Open Hours */}
      <div className="flex flex-row justify-center md:justify-start items-center gap-4">
        <Image
          src="/assets/images/location/calender.png"
          alt="Calendar Icon"
          width={41}
          height={41}
        />
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-300">
            We are open monday-friday
          </p>
          <h3 className="font-bold text-xl md:text-2xl text-white">
            7:00am - 9:00pm
          </h3>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-row justify-center md:justify-start items-center gap-4">
        <Image
          src="/assets/images/location/location.png"
          alt="Location Icon"
          width={41}
          height={41}
        />
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-300">
            Need a repair? our address
          </p>
          <h3 className="font-bold text-xl md:text-2xl text-white">
            Liza Street, New York
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
