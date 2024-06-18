import Image from "next/image";
import React from "react";
import Donate from "../donatebtn";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="lg:h-[80vh] py-32 flex flex-col gap-5 relative px-4 lg:px-20 h-fit">
      <section className="lg:h-[60%] h-full w-full flex flex-col justify-center gap-5">
        <p className="text-primary text-2xl">Together</p>
        <h1 className="text-[40px] font-black lg:text-[64px] lg:leading-[70px]">
          Let’s make a <br /> difference
        </h1>
        <p className="text-base lg:text-lg">
          WIDCA is shaping the lives of women and young people by {" "}
          <br className="hidden lg:block" />
          giving them equal opportunities to live a better life!.
        </p>
      </section>
      <Donate />

      <section className="hidden bg-white/90 absolute  right-20 w-fit p-3 lg:flex gap-2 h-[112px] -bottom-14 ">
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
