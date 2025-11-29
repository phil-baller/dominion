"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import clsx from "clsx";
import { XSquare } from "lucide-react";
import Image from "next/image";
import { imageType } from "@/types";
import { urlFor } from "@/lib/sanityImageUrl";
import { PicturesData } from "@/lib/reactquerry";
import { skeletonPicturesHeight } from "@/constants";
import { Skeleton } from "../ui/skeleton";
import useClickOutside from "@/lib/use-click-outside";

const Deeds = () => {
  const pictures = PicturesData();

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    600: 1,
  };

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8 xl:px-20 bg-white text-[#111]">
      <section className="max-w-7xl w-full mx-auto flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#111] mb-4 relative inline-block">
            Archives of Deeds
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            A visual journey through our impactful work and the lives we've touched.
          </p>
        </div>

        {pictures.isPending ? (
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
            {pictures.data?.map((picture) => (
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
