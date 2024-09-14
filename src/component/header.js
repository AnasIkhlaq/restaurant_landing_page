import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="https://img.freepik.com/premium-vector/restaurant-logo-design_1128391-17280.jpg"
              alt="Restaurant Logo"
              className="h-16 w-16 rounded-full"
            />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-200">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block md:inline text-gray-200 hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="/menu"
            className="block md:inline text-gray-200 hover:text-gray-400"
          >
            Menu
          </a>
          <a
            href="/promo"
            className="block md:inline text-gray-200 hover:text-gray-400"
          >
            Promo
          </a>
          <a
            href="/about"
            className="block md:inline text-gray-200 hover:text-gray-400"
          >
            About
          </a>
          <a
            href="/contact"
            className="block md:inline text-gray-200 hover:text-gray-400"
          >
            Contact
          </a>
        </nav>

        {/* Sign Up and Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl">
            Sign Up
          </button>
          <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-500 hover:text-black transition-shadow shadow-lg hover:shadow-xl">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Sign Up and Login Buttons */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl">
            Sign Up
          </button>
          <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-gray-800 hover:text-yellow-500 transition-shadow shadow-lg hover:shadow-xl">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
