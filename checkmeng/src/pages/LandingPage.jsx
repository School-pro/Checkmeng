import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonial";
import CTA from "../components/CTA";

import Footer from "../components/Footer";
import { Template } from "ejs";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
