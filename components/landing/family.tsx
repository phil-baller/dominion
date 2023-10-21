"use client";

import React, { useEffect, useState } from "react";
import Header from "../header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Family = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);

  const images = [
    "https://via.placeholder.com/600/FF5733/000000?text=1",
    "https://via.placeholder.com/600/FFC300/000000?text=2",
    "https://via.placeholder.com/600/DAF7A6/000000?text=3",
    "https://via.placeholder.com/600/4CAF50/000000?text=4",
    "https://via.placeholder.com/600/2196F3/000000?text=5",
    "https://via.placeholder.com/600/673AB7/000000?text=6",
  ];

  useEffect(() => {
    const loadVisibleImages = () => {
      setVisibleImages(images.slice(currentIndex, currentIndex + 4));
    };

    loadVisibleImages();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % (images.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + (images.length - 3)) % (images.length - 3)
    );
  };

  return (
    <section className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      <Header content="Our Family" />

      <section className="w-full flex items-center gap-10">
        <div className="max-w-7xl mx-auto w-full h-96 flex items-center justify-center relative">
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-white slowmo px-3 py-1 rounded z-10"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          {visibleImages.map((image, index) => (
            <section className="mx-2" key={index}>
              <Image
                className="max-w-full max-h-full rounded  transition-opacity duration-300 ease-in-out clip"
                src={image}
                width={300}
                height={200}
                alt={`slide ${index + 1}`}
              />
              <section>
                <p className="text-primary">Name</p>
                <p>Position or Role</p>
              </section>
            </section>
          ))}
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-white slowmo px-3 py-1 rounded"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Family;
