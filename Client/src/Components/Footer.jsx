import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-16 py-6 bg-black/30 backdrop-blur-md text-center text-sm text-gray-300 border-t border-white/10">
        <p>© {new Date().getFullYear()} Elev8tr. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/about" className="hover:text-[#5F9EA0] transition">
            About
          </Link>
          <Link to="/privacy" className="hover:text-[#5F9EA0] transition">
            Privacy
          </Link>
          <Link to="/contact" className="hover:text-[#5F9EA0] transition">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
