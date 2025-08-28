"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:my-32 px-4 md:px-16 lg:px-24 gap-10 items-center">
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <Image
          src="/assets/images/login/login.svg"
          alt="login"
          width={460}
          height={502}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h1>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Your password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-[#f53610] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl  cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Or sign in with */}
        <div className="mt-8">
          <p className="text-center text-gray-500 mb-4">Or, Sign in with</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm">
              <FaFacebookF className="text-blue-600 text-lg" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm">
              <FaGoogle className="text-red-500 text-lg" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm">
              <FaLinkedinIn className="text-blue-700 text-lg" />
            </button>
          </div>
        </div>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
