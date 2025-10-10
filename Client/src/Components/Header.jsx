import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [decoded, setDecoded] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setDecoded(jwtDecode(token));
    }
  }, []);

  console.log(decoded);

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
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

      {menuOpen && (
        <nav className="absolute top-full right-0 bg-black/70 backdrop-blur-lg flex flex-col gap-4 p-6 rounded-lg mt-2 md:hidden">
          <Link to="/signup" className="hover:text-[#5F9EA0] transition">
            Signup
          </Link>
          <Link to="/login" className="hover:text-[#5F9EA0] transition">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
