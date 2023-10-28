import React from "react";
import PageTextHero from "../page-hero-text";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="lg:h-80 h-96 px-20 relative flex justify-center flex-col gap-5">
      <PageTextHero content="What we do" />
      <p className="lg:text-2xl text-base">
        Put a smile on the faces of these childres
      </p>
      <Donate />
    </section>
  );
};

export default Hero;
