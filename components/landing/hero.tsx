import Image from "next/image";
import React from "react";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="h-screen py-32 flex flex-col gap-5 relative px-20">
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

      <Donate />

      <section className="bg-white/90 absolute  right-20 w-fit p-3 flex gap-2 h-[112px] -bottom-14 ">
        <Image
          src="/icons/analytic.svg"
          width={50}
          height={50}
          alt="dominion analytic icons"
        />
        <p className="flex text-xl  flex-col gap-1 text-[#111]">
          <span className="text-primary">Our Reach </span> Find our everywhere
          in <br /> Cameroon
        </p>
      </section>
    </section>
  );
};

export default Hero;
