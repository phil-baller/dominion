import React from "react";

const Hero = () => {
  return (
    <section className="hero py-32 flex flex-col gap-5">
      <p className="text-primary text-2xl">Together</p>
      <h1 className="font-black text-[64px] leading-[70px]">
        Let’s make a <br /> difference
      </h1>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur. Sollicitudin tempor sit commodo{" "}
        <br />
        vitae est purus enim placerat venenatis. Risus auctor facilisi posuere{" "}
        <br />
        adipiscing id nibh risus elementum mauris. In enim in id tempus dolor{" "}
        <br />
        id. Integer blandit lectus ultrices sit bibendum nibh pulvinar. A
        commodo bibendum feugiat nibh nisi.
      </p>

      <button className="bg-primary py-3 px-10 w-fit">Donate Now</button>
    </section>
  );
};

export default Hero;
