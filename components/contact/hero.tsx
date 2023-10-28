import React from "react";
import PageTextHero from "../page-hero-text";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="lg:h-80 h-96 px-20 relative flex justify-center flex-col gap-5">
      <PageTextHero content="Contact Us" />
      <p className="lg:text-2xl text-base">Where to find us!!</p>
      <Donate />
    </section>
  );
};

export default Hero;
