import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from "../Components/Header.jsx";
// import Footer from "../Components/Footer.jsx";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    location: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }

    console.log("Signup Data:", formData);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="min-h-screen flex pt-5 items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6">
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
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="email"
              >
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

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="location"
              >
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
                required
              >
                <option value="">Select your location</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Preston">Preston</option>
                <option value="Blackburn">Blackburn</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 accent-[#5F9EA0] cursor-pointer"
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-300">
                I accept the{" "}
                <Link
                  to="/terms"
                  className="text-[#5F9EA0] hover:text-[#4f8587] underline transition"
                >
                  terms and conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#5F9EA0] hover:bg-[#4f8587] text-white font-semibold py-2 rounded-lg transition"
            >
              Sign Up
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
      {/* <Footer /> */}
    </div>
  );
}
