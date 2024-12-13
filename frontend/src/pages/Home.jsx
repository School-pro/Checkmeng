import "../index.css";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Header */}
      {/* <header className="bg-gray-800 text-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checkmeng</h1>
          <nav>
            <a href="/login" className="text-white hover:text-gray-300 ml-4">
              Login
            </a>
            <a
              href="/check-result"
              className="text-white hover:text-gray-300 ml-4"
            >
              Check Result
            </a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591030434469-3d78c7b17820?w=1200')`,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Welcome to Checkmeng</h1>
          <p className="text-lg mt-2">
            Securely access school results with ease.
          </p>
          <div className="mt-6">
            <a
              href="/login"
              className="bg-blue-500 px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Get Started
            </a>
            <a
              href="/check-result"
              className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
            >
              Proceed to Check Result
            </a>
          </div>
        </div>
      </section>

      {/* Featured Schools */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Featured Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <img
                  src={`https://picsum.photos/300/200?random=${index}`}
                  alt={`School ${index + 1}`}
                  className="rounded mb-4"
                />
                <h3 className="text-lg font-semibold">
                  Featured School {index + 1}
                </h3>
                <p className="text-sm text-gray-600">
                  A brief description about the school and its features.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
