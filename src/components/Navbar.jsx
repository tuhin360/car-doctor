"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  // const session = useSession();
  console.log(session);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "My Bookings", link: "/my-bookings" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="navbar bg-white sticky top-0 z-50 shadow-sm">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu - White BG, No Gray */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 
                       bg-white border border-gray-200"
          >
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md 
                             transition-all duration-200 hover:bg-orange-50 hover:text-orange-500
                             ${
                               pathname === item.link
                                 ? "text-orange-500 font-semibold"
                                 : "text-gray-700"
                             }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl p-0 cursor-pointer">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={87}
            height={107}
            priority
          />
        </Link>
      </div>

      {/* Center Section - Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {navItems.map((item) => (
            <li key={item.link} className="relative">
              <Link
                href={item.link}
                className={`px-1 py-2 text-gray-700 transition-colors duration-200 
                           hover:text-orange-500 text-base font-medium
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

      {/* Right Section */}
      <div className="navbar-end flex items-center gap-4">
        {/* Shopping Cart Icon */}
        <button
          aria-label="Shopping Cart"
          className="relative p-2 text-gray-700 hover:text-orange-500 transition-all duration-200 group"
        >
          <HiOutlineShoppingBag className="w-6 h-6 transform group-hover:scale-110 cursor-pointer" />
          <span
            className="absolute inset-0 rounded-md bg-orange-100 opacity-0 
                          group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          />
        </button>

        {/* Search Icon */}
        <button
          aria-label="Search"
          className="relative p-2 text-gray-700 hover:text-orange-500 transition-all duration-200 group"
        >
          <CiSearch className="w-6 h-6 transform group-hover:scale-110 cursor-pointer" />
          <span
            className="absolute inset-0 rounded-md bg-orange-100 opacity-0 
                          group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          />
        </button>

        {/* Appointment Button */}
        <button
          className="px-6 py-2.5 border-2 border-orange-500 text-orange-500 font-medium rounded-lg  hover:bg-orange-500 hover:text-white 
                     transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 
                     hover:shadow-lg transform hover:scale-105 cursor-pointer"
        >
          Appointment
        </button>
        {status === "authenticated" ? (
          <div className="relative group">
            <Image
              src={session?.user?.image || "/assets/images/user/user.png"}
              alt="user"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {session?.user?.name}
            </span>
          </div>
        ) : (
          ""
        )}

        {/* Login/Logout Button */}

        {status === "authenticated" ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-4 py-2 border-2 border-red-500 text-white bg-red-500 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 hover:shadow-lg transform hover:scale-105 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 border-2 border-red-500 text-white bg-red-500 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 hover:shadow-lg transform hover:scale-105 cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
