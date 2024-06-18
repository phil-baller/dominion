import React from "react";
import Header from "../header";
import { Impacts } from "@/constants";
import Image from "next/image";

const Impact = () => {
  const impacts = Impacts();
  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      <Header content="Impact" />
      <div className="flex justify-center items-center lg:text-lg text-base text-neutral-900 text-center">
        Our initiative has helped thousands of women and children in primary healthcare, wealth creation, education, vocational trainings, reproductive health and sanitation in rural communities.
      </div>
      <section className="max-w-7xl mx-auto flex gap-10  w-full lg:flex-row flex-col ">
        {impacts.map((impact) => (
          <section
            key={impact.name}
            className="flex-1 what p-10 flex items-center flex-col"
          >
            <Image
              src={impact.icon}
              alt={`dominion ${impact.name}`}
              width={86}
              height={86}
            />
            <p className="text-2xl flex flex-col gap-2 text-center">
              {impact.name}
              <span className="text-primary">{impact.number}+</span>
            </p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Impact;
