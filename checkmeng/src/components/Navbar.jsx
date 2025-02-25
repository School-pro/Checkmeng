import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* <button className="text-xl font-bold cursor-pointer">CheckMeng</button> */}
        <button className="text-2xl font-bold pacifico-regular cursor-pointer">
          CheckMeng
        </button>
        {/* Hamburger Button - Mobile View */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Login
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/check-result" className="hover:underline">
            Check Result
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin Panel
          </Link>
        </div>
      </div>

      {/* Fullscreen Mobile Navigation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col space-y-6 text-2xl">
            <Link
              to="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/check-result"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Check Result
            </Link>
            <Link
              to="/admin"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
