import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "CheckMeng made it so easy to verify my results securely!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Smith",
    feedback: "A seamless experience! Fast, secure, and reliable.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    feedback: "Highly recommend CheckMeng for all students!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        What Our Users Say
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-xs p-6 bg-white shadow-lg rounded-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="mt-4 text-gray-600 italic">
              "{testimonial.feedback}"
            </p>
            <h4 className="mt-4 font-bold text-gray-800">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
