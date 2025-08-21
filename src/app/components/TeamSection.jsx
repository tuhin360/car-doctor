"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mike Johnson",
    expertise: "Tire Alignment",
    img: "/assets/images/team/1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "David Clark",
    expertise: "Transmission Specialist",
    img: "/assets/images/team/3.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Robert Anderson",
    expertise: "Engine Repair",
    img: "/assets/images/team/2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  
];

const TeamSection = () => {
  return (
    <div className="my-12 px-4 md:px-0">
      <SectionHeader
        subtitle="Team"
        title="Meet Our Team"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden text-center flex flex-col items-center p-4 hover:shadow-2xl transition-shadow duration-300 border-1 border-gray-300 "
          >
            <Image
              src={member.img}
              width={314}
              height={293}
              alt={member.name}
              className="w-full h-72 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-orange-500 font-medium mb-4">{member.expertise}</p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-auto">
              <a
                href={member.socials.facebook}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={member.socials.twitter}
                className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition-colors duration-300"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href={member.socials.linkedin}
                className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={member.socials.instagram}
                className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
