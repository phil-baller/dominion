"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import clsx from "clsx";
import { XSquare } from "lucide-react";
import Image from "next/image";
import { imageType } from "@/types";
import { urlFor } from "@/lib/sanityImageUrl";

interface projectsProp {
  isActive: boolean;
  //   portfolio: Portfolio[];
}

const Deeds = ({ pictures }: { pictures: imageType[] }) => {
  const [isClcked, setisClcked] = useState<boolean>(false);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    600: 1,
  };

  return (
    <section className="padding bg-white text-[#111]">
      <section className=" max-w-7xl w-full mx-auto flex flex-col gap-10">
        <p className="text-2xl">Archives of Deeds</p>
        <Masonry
          className="flex gap-4 overflow-hidden"
          breakpointCols={breakpointColumnsObj}
        >
          {pictures.map((picture) => (
            <Deed key={picture._id} picture={picture} />
          ))}
        </Masonry>
      </section>

      <div
        className={clsx(
          "opacity-0 pointer-events-none top-0 left-0 modal z-[1000] backdrop-blur-lg bg-black/5 w-full h-screen fixed duration-300 transition-all flex items-center justify-center",
          isClcked && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => setisClcked((prev) => !prev)}
        >
          <XSquare />
        </div>
        <div className="w-4/5 md:w-1/2 border h-fit relative"></div>
      </div>
    </section>
  );
};

const Deed = ({ picture }: { picture: imageType }) => {
  return (
    <section className="h-fit min-h-[320px] w-full  bg-slate-500 mb-4 flex items-center justify-center text-4xl font-bold text-white relative">
      <Image
        className="object-cover"
        src={urlFor(picture.image).url()}
        alt="dominion what we do"
        fill
      />
    </section>
  );
};

export default Deeds;
