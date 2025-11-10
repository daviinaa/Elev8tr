import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredInternships = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "Remote",
    },
    { title: "Data Analyst Intern", company: "DataWorks", location: "London" },
    { title: "Marketing Intern", company: "Brandify", location: "Manchester" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Header />

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-black/70 backdrop-blur-lg flex flex-col items-center gap-4 py-4 z-40 md:hidden"
        >
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
        </motion.nav>
      )}

      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 lg:px-32 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-bold text-3xl md:text-5xl mb-4"
          >
            Hi, Welcome to <span className="text-[#5F9EA0]">Elev8tr</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base leading-relaxed text-gray-200"
          >
            Your future starts here. Making the right career choice is one of
            the most important decisions you’ll make. Join the network of
            <span className="font-semibold"> 1,300,000+ members </span> and let
            us do the hard work for you. Take your first step to a brighter
            future.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
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
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 lg:px-32 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-[#5F9EA0]"
        >
          Find Internship Opportunities
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
        >
          <input
            type="text"
            placeholder="Search internships..."
            className="px-4 py-2 rounded-lg text-black w-full sm:w-1/2"
          />
          <button className="bg-[#5F9EA0] px-6 py-2 rounded text-white hover:bg-[#4f8587] transition">
            Search
          </button>
          <button className="border border-[#5F9EA0] px-6 py-2 rounded text-[#5F9EA0] hover:bg-[#5F9EA0] hover:text-white transition">
            Browse All
          </button>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-6"
        >
          Featured Internships
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredInternships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg text-left hover:scale-[1.02] transition"
            >
              <h4 className="font-bold text-lg mb-1">{internship.title}</h4>
              <p className="text-gray-300 mb-1">{internship.company}</p>
              <p className="text-gray-400 text-sm">{internship.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 lg:px-32 py-16 bg-white/10 backdrop-blur-lg rounded-2xl mx-6 md:mx-20 lg:mx-32 mb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-[#5F9EA0]">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1. Create Account",
              desc: "Sign up and create your profile to get started.",
            },
            {
              step: "2. Search Internships",
              desc: "Use our search or browse options to find internships.",
            },
            {
              step: "3. Apply & Grow",
              desc: "Apply to positions and start building your career path.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/40 p-6 rounded-lg hover:shadow-[#5F9EA0]/30 transition"
            >
              <h3 className="font-semibold text-xl mb-2">{item.step}</h3>
              <p className="text-gray-200 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
