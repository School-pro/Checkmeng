import React from "react";

const CTA = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Start Using CheckMeng Today!
      </h2>
      <p className="text-lg mt-2">Secure your academic results now.</p>

      <div className="mt-6">
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg font-bold hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
