"use client";

import React, { useState, useMemo, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { imageType } from "@/types";
import { urlFor } from "@/lib/sanityImageUrl";
import { PicturesData } from "@/lib/reactquerry";
import { Skeleton } from "../ui/skeleton";

type GalleryImage = {
  src: string;
  alt: string;
  id: string;
  originalIndex: number;
};

const Deeds = () => {
  const pictures = PicturesData();
  const [index, setIndex] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Shuffle and organize images into rows of 4-5
  const organizedImages = useMemo(() => {
    if (!pictures.data) return [];

    // Create image objects with original index for lightbox
    const images: GalleryImage[] = pictures.data.map((picture: imageType, idx: number) => ({
      src: urlFor(picture.image).width(1200).height(1200).fit("max").url(),
      alt: picture.description || "Walking in Dominion image",
      id: picture._id,
      originalIndex: idx,
    }));

    // Shuffle the images array
    const shuffled = [...images].sort(() => Math.random() - 0.5);

    // Organize into rows of 4-5 images
    const rows: GalleryImage[][] = [];
    let currentRow: GalleryImage[] = [];

    shuffled.forEach((image, idx) => {
      currentRow.push(image);

      // Determine if we should finish this row (4-5 images per row)
      const shouldFinishRow =
        currentRow.length >= 4 &&
        (currentRow.length === 5 || Math.random() > 0.5 || idx === shuffled.length - 1);

      if (shouldFinishRow || idx === shuffled.length - 1) {
        rows.push([...currentRow]);
        currentRow = [];
      }
    });

    return rows;
  }, [pictures.data]);

  // Flatten for lightbox slides
  const slides = useMemo(() => {
    return organizedImages.flat().map((img) => ({
      src: img.src,
      alt: img.alt,
    }));
  }, [organizedImages]);

  const handleImageClick = (rowIndex: number, imageIndex: number) => {
    let flatIndex = 0;
    for (let i = 0; i < rowIndex; i++) {
      flatIndex += organizedImages[i].length;
    }
    flatIndex += imageIndex;
    setIndex(flatIndex);
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-64" />
            ))}
          </div>
        ) : organizedImages.length > 0 ? (
          <>
            <div className="flex flex-col gap-6">
              {organizedImages.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  style={{
                    gridTemplateColumns: isDesktop ? `repeat(${row.length}, 1fr)` : undefined,
                  }}
                >
                  {row.map((image, imageIndex) => (
                    <div
                      key={image.id}
                      className="relative w-full aspect-square overflow-hidden rounded-[8px] cursor-pointer group"
                      onClick={() => handleImageClick(rowIndex, imageIndex)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View image: ${image.alt}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleImageClick(rowIndex, imageIndex);
                        }
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Lightbox
              index={index}
              slides={slides}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </>
        ) : null}
      </section>
    </section>
  );
};

export default Deeds;
