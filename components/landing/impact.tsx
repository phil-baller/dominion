import React from "react";
import Header from "../header";
import { Impacts } from "@/constants";
import Image from "next/image";


const initiatives = [
  {
    title: 'For communities and health issues',
    description: 'We are committed to increasing availability and access to comprehensive primary health care in communicites and to ensuring communities have access to water, proper sanitation and hygiene',
  },
  {
    title: 'For women and children',
    description: 'We are committed to empoewring women, children and young people by making them aware of their rights and by helping them achieve their full potential',
  },
  {
    title: 'For Young People and unemployment',
    description: 'We are committed to empower young people with employable skills, vocational trainings, entrepreneurial skills to give them self-employment',
  }
]


const Impact = () => {
  const impacts = Impacts();
  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      <Header content="Impact" />
      <div className="flex justify-center items-center lg:text-lg text-base text-neutral-900 text-center">
        Our initiative has helped thousands of women and children in primary healthcare, wealth creation, education, vocational trainings, reproductive health and sanitation in rural communities.
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          initiatives.map((item, index) => (
            <div className="px-4 py-4 flex flex-col justify-start items-start lg:w-64 w-full" key={index}>
              <div className="font-medium text-2xl text-neutral-700">{item.title}</div>
              <div className="font-normal text-neutral-600">{item.description}</div>
            </div>
          ))
        }
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
