import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-lg pacifico-regular font-bold">CheckMeng</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 mt-4 md:mt-0">
          <a href="/about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400 transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-400 transition">
            Terms of Service
          </a>
        </div>

        {/* Social Media & Contact Info */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <p className="text-sm">📧 support@checkmeng.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} CheckMeng. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
