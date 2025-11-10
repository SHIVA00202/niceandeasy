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
    <header className="fixed top-0 left-0 w-full h-[90px] flex justify-between items-center px-6 md:px-10 bg-black/60 backdrop-blur-xl shadow-lg z-[1000] transition-all duration-300">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div
          className="w-[60px] h-[60px] bg-center bg-cover rounded-full border-2 border-orange-500 shadow-md"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <h1 className="text-white font-semibold text-lg tracking-wide">EduCore</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <li key={name}>
              <Link
                to={path}
                className={`text-[15px] font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md scale-105"
                    : "text-gray-200 hover:text-orange-400 hover:scale-105"
                }`}
              >
                {name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to="/login"
            className="bg-orange-600 text-white px-5 py-2 rounded-md text-[15px] font-medium transition-transform duration-200 hover:scale-105 hover:bg-orange-700 shadow-md"
          >
            Login
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-[30px] text-gray-200 focus:outline-none transition-transform duration-200"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-start pt-[120px] gap-6 transition-all duration-300 ${
          menuOpen ? "right-0" : "right-[-100%]"
        } md:hidden`}
      >
        {navLinks.map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`text-[16px] font-medium transition-all duration-200 ${
                isActive
                  ? "text-orange-400 scale-105"
                  : "text-white hover:text-orange-400 hover:scale-105"
              }`}
            >
              {name}
            </Link>
          );
        })}
        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="bg-orange-600 text-white px-6 py-2 rounded-md text-[15px] font-medium transition-transform duration-200 hover:scale-105 hover:bg-orange-700 shadow-md"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
