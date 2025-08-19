"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="navbar sticky top-0 z-50">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden text-black">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={
                    pathname === item.link ? "font-bold text-black" : ""
                  }
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

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className={pathname === item.link ? " font-bold" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex items-center gap-2">
        <button
          aria-label="Shopping Cart"
          className="hover:bg-gray-200 hover:rounded-md p-2 cursor-pointer transition duration-100"
        >
          <HiOutlineShoppingBag className="w-6 h-6" />
        </button>

        <button
          aria-label="Search"
          className="hover:bg-gray-200 hover:rounded-md p-2 cursor-pointer transition duration-100"
        >
          <CiSearch className="w-6 h-6" />
        </button>

        <Link href="/appointment" className="btn btn-outline btn-warning">
          Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
