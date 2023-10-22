import React from "react";
import PageTextHero from "../page-hero-text";

const Hero = () => {
  return (
    <section className="h-80 px-20 relative flex justify-center flex-col gap-5">
      <PageTextHero content="Blog" />
      <p className="text-2xl ">What we’ve been doing over the past years</p>
      <button className="bg-primary py-3 px-10 w-fit">Donate Now</button>
    </section>
  );
};

export default Hero;
