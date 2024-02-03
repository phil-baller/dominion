"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import clsx from "clsx";
import { XSquare } from "lucide-react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import WwwSkeleton from "../skeletons/wwdSkeleton";

interface projectsProp {
  isActive: boolean;
  //   portfolio: Portfolio[];
}

const Deeds = () => {
  const [isClcked, setisClcked] = useState<boolean>(false);
  //   const [selected, setSelected] = useState<Portfolio>();
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    600: 1,
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["wwd"],
    queryFn: async () => {
      const { data } = await axios.get("/api/wwd");
      return data;
    },
  });

  if (isError) {
    return <h1>Something wrong happened!</h1>;
  } else if (isPending) {
    return (
      <section className="padding bg-white text-[#111]">
        <section className="max-w-7xl w-full mx-auto grid grid-cols-3 flex-col gap-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <WwwSkeleton key={index} />
          ))}
        </section>
      </section>
    );
  }

  return (
    <section className="padding bg-white text-[#111]">
      <section className=" max-w-7xl w-full mx-auto flex flex-col gap-10">
        <p className="text-2xl">Archives of Deeds</p>
        <Masonry
          className="flex gap-4 overflow-hidden"
          breakpointCols={breakpointColumnsObj}
        >
          {data.map((wwd: any) => (
            <Deed key={wwd.id} wwd={wwd} />
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

const Deed = ({ wwd }: { wwd: any }) => {
  return (
    <section className="h-fit min-h-[320px] w-full  bg-slate-500 mb-4 flex items-center justify-center text-4xl font-bold text-white relative">
      <Image
        className="object-cover"
        src={wwd.imageUrl}
        alt="dominion what we do"
        fill
      />
    </section>
  );
};

export default Deeds;
