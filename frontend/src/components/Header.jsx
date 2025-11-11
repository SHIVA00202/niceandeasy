import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[85px] flex justify-between items-center px-6 md:px-12
        bg-black/70 backdrop-blur-lg border-b border-[#1f1f1f]
        shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-[1000] transition-all duration-300`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div
          className="w-[58px] h-[58px] bg-center bg-cover rounded-full border-2 border-orange-500 shadow-[0_0_15px_rgba(255,102,0,0.3)] group-hover:scale-105 transition-all duration-300"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <h1 className="text-white font-semibold text-lg tracking-wide group-hover:text-orange-400 transition-colors duration-300">
          EduCore
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <li key={name} className="relative group">
              <Link
                to={path}
                className={`text-[15px] font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-orange-500 scale-105"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {name}
              </Link>
              {/* Orange underline effect */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></span>
            </li>
          );
        })}

        <li>
          <Link
            to="/login"
            className="bg-orange-600 text-white px-6 py-2 rounded-md text-[15px] font-medium transition-transform duration-200 hover:scale-105 hover:bg-orange-700 shadow-[0_0_15px_rgba(255,102,0,0.3)]"
          >
            Login
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-[32px] text-gray-200 focus:outline-none hover:text-orange-400 transition-colors duration-300"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-black/95 backdrop-blur-2xl 
        flex flex-col items-center justify-start pt-[120px] gap-8 border-l border-[#1c1c1c]
        transition-all duration-500 ease-in-out shadow-[0_0_30px_rgba(0,0,0,0.7)] 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {navLinks.map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`text-[18px] font-medium tracking-wide transition-all duration-300 ${
                isActive
                  ? "text-orange-400 scale-105"
                  : "text-gray-300 hover:text-orange-400 hover:scale-105"
              }`}
            >
              {name}
            </Link>
          );
        })}

        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="bg-orange-600 text-white px-8 py-2 rounded-md text-[16px] font-medium transition-transform duration-200 hover:scale-110 hover:bg-orange-700 shadow-[0_0_15px_rgba(255,102,0,0.3)]"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
