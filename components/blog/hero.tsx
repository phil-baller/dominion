import React from "react";
import PageTextHero from "../page-hero-text";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="lg:h-80 h-96 px-20 relative flex justify-center flex-col gap-5">
      <PageTextHero content="Blog" />
      <p className="lg:text-2xl text-base">
        What we’ve been doing over the past years
      </p>
      <Donate />
    </section>
  );
};

export default Hero;
