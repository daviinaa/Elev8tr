import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      setMessage("❌ Please fill in all fields correctly.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#5F9EA0]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Login to your <span className="font-semibold">Elev8tr</span> account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 accent-[#5F9EA0] cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm text-[#5F9EA0] hover:text-[#4f8587] transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#5F9EA0] hover:bg-[#4f8587] text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>

          {message && (
            <p
              className={`text-center text-sm mt-3 ${
                message.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#5F9EA0] hover:text-[#4f8587] font-medium transition"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
