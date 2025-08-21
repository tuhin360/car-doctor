"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        {/* 1. Logo + Short Text + Social Icons */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            src="/assets/logo.svg"
            alt="Company Logo"
            width={79}
            height={64}
            className="mb-2"
          />
          <p className="text-gray-400 text-sm sm:text-base">
            We provide top-notch automotive services with expert mechanics and
            unmatched reliability.
          </p>
          <div className="flex gap-3 mt-2 justify-center sm:justify-start">
            <div className="flex gap-3 mt-2 justify-center sm:justify-start">
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 transition-colors"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 hover:from-pink-400 hover:via-purple-400 hover:to-yellow-300 transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 transition-colors"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. About */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 mt-6 sm:mt-0">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <Link
            href="/"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* 3. Company */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 mt-6 sm:mt-0">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <Link
            href="/about-us"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/press"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Press
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* 4. Support */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 mt-6 sm:mt-0">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <Link
            href="/support-center"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Support Center
          </Link>
          <Link
            href="/feedback"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Feedback
          </Link>
          <Link
            href="/accessibility"
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            Accessibility
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Car Doctor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
