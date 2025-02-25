import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white text-center mt-12">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Result Checker. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="/about"
          className="hover:text-gray-400 transition duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:text-gray-400 transition duration-300"
        >
          Contact
        </a>
        <a
          href="/privacy"
          className="hover:text-gray-400 transition duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="hover:text-gray-400 transition duration-300"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
