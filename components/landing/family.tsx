import Image from "next/image";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Family = () => {
  const images = [
    "https://via.placeholder.com/600/FF5733/000000?text=1",
    "https://via.placeholder.com/600/FFC300/000000?text=2",
    "https://via.placeholder.com/600/DAF7A6/000000?text=3",
  ];

  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <section className="mx-2" key={index}>
                <Image
                  className="max-w-full max-h-full rounded transition-opacity duration-300 ease-in-out clip"
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Family;
