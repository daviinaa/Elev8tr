import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Header />
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
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 lg:px-32 pt-32 md:pt-40">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 max-w-3xl">
          <p className="font-bold text-3xl md:text-5xl mb-4">
            Hi, Welcome to <span className="text-[#5F9EA0]">Elev8tr</span>
          </p>
          <h1 className="text-sm md:text-base leading-relaxed text-gray-200">
            Your future starts here. Making the right career choice is one of
            the most important decisions you’ll make. Join the network of
            <span className="font-semibold"> 1,300,000+ members </span> and let
            us do the hard work for you. Take your first step to a brighter
            future.
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Link
              className="rounded bg-[#5F9EA0] px-5 py-2 text-white text-sm hover:bg-[#4f8587] transition"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="rounded border border-[#5F9EA0] px-5 py-2 text-[#5F9EA0] text-sm hover:bg-[#5F9EA0] hover:text-white transition"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
