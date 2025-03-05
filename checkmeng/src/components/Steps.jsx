import React from "react";

const Steps = () => {
  const steps = [
    { number: "1", title: "Sign Up", description: "Create an account easily." },
    {
      number: "2",
      title: "Upload Details",
      description: "Enter your result details.",
    },
    {
      number: "3",
      title: "Verify",
      description: "Instantly access your results securely.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        How It Works
      </h2>
      <p className="text-gray-600 mt-2">
        Simple and fast process to check your results.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="max-w-xs p-6 bg-gray-100 rounded-lg shadow-md"
          >
            <span className="text-4xl font-bold text-blue-600">
              {step.number}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
