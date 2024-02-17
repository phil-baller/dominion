"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import clsx from "clsx";
import { XSquare } from "lucide-react";
import Image from "next/image";
import { imageType } from "@/types";
import { urlFor } from "@/lib/sanityImageUrl";
import { getPictures } from "@/lib/reactquerry";
import { skeletonPicturesHeight } from "@/constants";
import { Skeleton } from "../ui/skeleton";
import useClickOutside from "@/lib/use-click-outside";

interface projectsProp {
  isActive: boolean;
  //   portfolio: Portfolio[];
}

const Deeds = () => {
  const { data, isPending, error } = getPictures();

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

        {isPending ? (
          <Masonry
            className="flex gap-4 overflow-hidden"
            breakpointCols={breakpointColumnsObj}
          >
            {skeletonPicturesHeight.map((prop, index) => (
              <Skeleton
                key={index}
                style={{
                  height: prop,
                }}
                className="w-full mb-4"
              />
            ))}
          </Masonry>
        ) : (
          <Masonry
            className="flex gap-4 overflow-hidden"
            breakpointCols={breakpointColumnsObj}
          >
            {data?.map((picture) => (
              <Deed key={picture._id} picture={picture} />
            ))}
          </Masonry>
        )}
      </section>
    </section>
  );
};

const Deed = ({ picture }: { picture: imageType }) => {
  const [selectedImage, setSelectedImage] = useState<imageType | null>();

  const ref = useClickOutside<HTMLDivElement>(() => setSelectedImage(null));

  return (
    <section
      className="mb-4 flex items-center justify-center text-4xl font-bold text-white relative"
      onClick={() => setSelectedImage(picture)}
    >
      <Image
        className="object-cover rounded-[8px] cursor-pointer"
        src={urlFor(picture.image).url()}
        alt={`walking in dominion ${picture.description}`}
        width={400}
        height={500}
      />
      <div
        className={clsx(
          "opacity-0 pointer-events-none top-0 left-0 modal z-[1000] backdrop-blur-lg bg-black/5 w-full h-screen fixed duration-300 transition-all flex items-center justify-center",
          selectedImage && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <XSquare />
        </div>
        <div className="max-w-sm md:w-1/2 h-fit relative" ref={ref}>
          <Image
            className="object-cover rounded-[8px]"
            src={urlFor(picture.image).url()}
            alt={`walking in dominion ${picture.description}`}
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Deeds;
