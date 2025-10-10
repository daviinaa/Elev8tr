import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-md fixed top-0 left-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Elev8tr</h1>

        <nav className="hidden md:flex gap-6">
          <Link to="/signup" className="hover:text-[#5F9EA0] transition">
            Signup
          </Link>
          <Link to="/login" className="hover:text-[#5F9EA0] transition">
            Login
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[6px] focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black/70 backdrop-blur-lg flex flex-col items-center gap-4 py-4 z-40 md:hidden">
          <Link
            to="/signup"
            className="text-white hover:text-[#5F9EA0]"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-[#5F9EA0]"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </nav>
      )}
    </div>
  );
}
