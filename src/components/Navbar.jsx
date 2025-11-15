"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag, HiXMark, HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // console.log(session);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "My Bookings", link: "/my-bookings" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={87}
                  height={50}
                  priority
                  className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16"
                />
              </Link>
            </div>

            {/* Center Section - Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.link} className="relative">
                    <Link
                      href={item.link}
                      className={`px-3 py-2 text-gray-700 transition-colors duration-200 
                                 hover:text-orange-500 text-base font-medium relative
                                 ${
                                   pathname === item.link
                                     ? "text-orange-500 font-semibold"
                                     : ""
                                 }`}
                    >
                      {item.name}
                      {/* Animated Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 w-0 
                                   transition-all duration-300 ease-in-out 
                                   ${
                                     pathname === item.link
                                       ? "w-full"
                                       : "hover:w-full"
                                   }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Icon */}
              <button
                aria-label="Search"
                className="relative p-2 text-gray-700 hover:text-orange-500 transition-all duration-200 group"
              >
                <CiSearch className="w-6 h-6 transform group-hover:scale-110" />
                <span className="absolute inset-0 rounded-md bg-orange-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              </button>

              {/* Shopping Cart Icon */}
              <button
                aria-label="Shopping Cart"
                className="relative p-2 text-gray-700 hover:text-orange-500 transition-all duration-200 group"
              >
                <HiOutlineShoppingBag className="w-6 h-6 transform group-hover:scale-110" />
                <span className="absolute inset-0 rounded-md bg-orange-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              </button>

              {/* Appointment Button */}
              <Link href="/appointment">
                <button className="px-6 py-2.5 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 hover:shadow-lg transform hover:scale-105">
                  Appointment
                </button>
              </Link>

              {/* User Profile or Login */}
              {status === "loading" ? (
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              ) : status === "authenticated" ? (
                <div className="relative group">
                  <button className="flex items-center focus:outline-none">
                    <Image
                      src={
                        session?.user?.image || "/assets/images/user/user.png"
                      }
                      alt={session?.user?.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-gray-200 hover:border-orange-300 transition-colors duration-200"
                    />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                    <div className="py-1">
                      <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                        <p className="font-medium">{session?.user?.name}</p>
                        <p className="text-gray-500 truncate">
                          {session?.user?.email}
                        </p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 hover:shadow-lg transform hover:scale-105"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Right Section */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Mobile Icons */}
              <button
                aria-label="Search"
                className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                <CiSearch className="w-5 h-5" />
              </button>

              <button
                aria-label="Shopping Cart"
                className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
              </button>

              {/* Mobile User Avatar */}
              {status === "authenticated" && (
                <Image
                  src={session?.user?.image || "/assets/images/user/user.png"}
                  alt={session?.user?.name || "User"}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-gray-200"
                />
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiXMark className="w-6 h-6" />
                ) : (
                  <HiBars3 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          {/* Mobile Menu Slide Panel */}
          <div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full">
              {/* User Info Section (if authenticated) */}
              {status === "authenticated" && (
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={
                        session?.user?.image || "/assets/images/user/user.png"
                      }
                      alt={session?.user?.name || "User"}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-orange-200"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {session?.user?.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {session?.user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <ul className="py-4">
                  {navItems.map((item) => (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        onClick={closeMobileMenu}
                        className={`flex items-center px-6 py-4 text-base font-medium transition-colors duration-200 hover:bg-orange-50 hover:text-orange-500 border-l-4 border-transparent hover:border-orange-500
                                   ${
                                     pathname === item.link
                                       ? "text-orange-500 bg-orange-50 border-orange-500"
                                       : "text-gray-700"
                                   }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Action Buttons */}
                <div className="px-6 py-4 space-y-3 border-t border-gray-200">
                  <Link href="/appointment" onClick={closeMobileMenu}>
                    <button className="w-full px-4 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                      Book Appointment
                    </button>
                  </Link>

                  {status === "authenticated" ? (
                    <div className="space-y-2 mt-10">
                      <button
                        onClick={() => {
                          signOut({ callbackUrl: "/" });
                          closeMobileMenu();
                        }}
                        className="w-full px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link href="/login" onClick={closeMobileMenu}>
                      <button className="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
