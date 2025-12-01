import React from "react";
import Header from "../header";
import { whatWeTrain } from "@/constants";
import Image from "next/image";

const Mission = () => {
  const things = whatWeTrain();
  return (
    <section className="bg-white text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-4xl mx-auto">
          <Header
            content="Answering the Call:"
            spanText="A Mission of Love and Hope"
            isSpan
            spanClass="text-primary"
          />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            To form partnerships that will facilitate and improve the health, education and socioeconomic status of women, children and young people through empowerment, right-based approaches, innovative, sustainable and participatory strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {things.map((thing) => (
            <div
              key={thing.name}
              className="group bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-6 bg-white rounded-xl group-hover:bg-primary/5 transition-colors duration-300">
                <Image
                  src={thing.icon}
                  width={120}
                  height={120}
                  alt={thing.name}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#111]">
                {thing.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto w-full mt-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 text-center">
              We look forward to working with individuals like you to help the orphans and the needy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm lg:text-base">
              <span className="text-primary">#Gustave</span>
              <span className="text-neutral-600">#ManOfGod</span>
              <span className="text-neutral-600">#GeneralOverseer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
