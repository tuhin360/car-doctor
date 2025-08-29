"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // we will handle manually
      });

      if (res?.error) {
        toast.error(res.error || "Invalid credentials. Try again!");
      }  
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            name="email" // ✅ added
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
            name="password" // ✅ added
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
          disabled={loading}
          className="w-full bg-[#FF3811] hover:bg-[#f53610] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Or sign in with */}
      <SocialLogin />

      {/* Register link */}
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
  );
};

export default LoginForm;
