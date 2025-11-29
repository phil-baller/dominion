import React from "react";
import PageTextHero from "../page-hero-text";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center px-4 lg:px-8 xl:px-20 pt-32 pb-20 overflow-hidden bg">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-white">
          <PageTextHero content="About Us" />
          <p className="mt-6 text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-3xl">
            Learn more about our mission, vision, and the dedicated team working to make a difference in communities across Cameroon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
