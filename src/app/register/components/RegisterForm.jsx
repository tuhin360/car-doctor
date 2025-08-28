"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User registered successfully!");
        form.reset();
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto my-20 bg-white p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input type={showPassword ? "text" : "password"} id="password" name="password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your password" required />
          <button type="button" className="absolute right-3 top-[38px] text-gray-500"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit"
          className="w-full bg-[#FF3811] hover:bg-[#f53610] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
}
