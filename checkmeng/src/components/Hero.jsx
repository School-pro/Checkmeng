import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div
        className="relative w-full h-screen bg-cover bg-center  backdrop-blur-md flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/library.jpg')",
        }}
      >
        {/* Dark Blue Tint & Blur */}
        <div className="absolute inset-0 bg-opacity-10 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <div className="backdrop-blur-full opacity-50 bg-gray-200 rounded-md">
            <h1 className="backdrop-blur-full py-5 px-9 rounded-md text-4xl md:text-6xl font-bold pacifico-regular lg:text-8xl text-black my-8 font-bold">
              Welcome to Checkmeng
            </h1>
            <p className="text-md md:text-xl mt-4 text-black p-3 rounded-md ">
              Your one-stop platform for accessing school results securely!
            </p>
          </div>
          <div className="md:mt-20 mt-10 space-x-4">
            <a
              href="/login"
              className="bg-blue-600 px-6 py-3 md:px-8 md:py-4 rounded shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/check-result"
              className="bg-gray-600 px-6 py-3 md:px-8 md:py-4 rounded shadow hover:bg-gray-700 transition"
            >
              Check Result
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
