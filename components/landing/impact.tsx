import React from "react";
import Header from "../header";
import { Impacts } from "@/constants";
import Image from "next/image";

const initiatives = [
  {
    title: "For communities and health issues",
    description:
      "We are committed to increasing availability and access to comprehensive primary health care in communities and to ensuring communities have access to water, proper sanitation and hygiene",
  },
  {
    title: "For women and children",
    description:
      "We are committed to empowering women, children and young people by making them aware of their rights and by helping them achieve their full potential",
  },
  {
    title: "For Young People and unemployment",
    description:
      "We are committed to empower young people with employable skills, vocational trainings, entrepreneurial skills to give them self-employment",
  },
];

const Impact = () => {
  const impacts = Impacts();
  return (
    <section className="bg-neutral-50 text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center max-w-3xl mx-auto">
          <Header content="Our Impact" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            Our initiative has helped thousands of women and children in primary healthcare, wealth creation, education, vocational trainings, reproductive health and sanitation in rural communities.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.name}
              className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Image
                    src={impact.icon}
                    alt={`dominion ${impact.name}`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-primary mb-2">
                {impact.number}+
              </div>
              <p className="text-lg text-[#111]">
                {impact.name}
              </p>
            </div>
          ))}
        </div>

        {/* Initiatives */}
        <div className="grid lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#111] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
