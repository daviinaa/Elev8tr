import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.lastname]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#5F9EA0]">
          Create Your Account
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Join the <span className="font-semibold">Elev8tr</span> community
          today
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300" htmlFor="name">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="name"
              placeholder="First name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300" htmlFor="name">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="name"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm mb-1 text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#5F9EA0] hover:bg-[#4f8587] text-white font-semibold py-2 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#5F9EA0] hover:text-[#4f8587] font-medium transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
