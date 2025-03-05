import React from "react";
import { FaLock, FaCheckCircle, FaChartLine } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLock className="text-blue-600 text-4xl" />,
      title: "Secure & Reliable",
      description:
        "Your academic results are protected with top security measures.",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-4xl" />,
      title: "Instant Verification",
      description: "Verify your results instantly with our efficient platform.",
    },
    {
      icon: <FaChartLine className="text-purple-600 text-4xl" />,
      title: "Track Performance",
      description:
        "Monitor academic growth with detailed performance insights.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Why Choose CheckMeng?
      </h2>
      <p className="text-gray-600 mt-2">
        Our platform offers the best academic result verification experience.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
