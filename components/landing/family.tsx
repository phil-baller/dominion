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
    "/icons/Founder.svg",
    "/icons/President.svg",
    "/icons/Secretary.svg",
    "/icons/Finance.svg"
  ];

  const names = [
    {
      name: "Azong Gustave Afuh",
      position: "President"
    },
    {
      name: "Langason Josephine Lum Fusina",
      position: "1st Vice President"
    },
    {
      name: "Chefor Ntukem epse Fru Blanding",
      position: "Secretary"
    },
    {
      name: "Awah Nicoline Sirri",
      position: "Treasurer"
    }
  ]

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
                  width={400}
                  height={100}
                  alt={`slide ${index + 1}`}
                />
                {
                  names[index] && (
                    <section>
                      <p className="text-primary">{names[index].name}</p>
                      <p>{names[index].position}</p>
                    </section>
                  )
                }
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
