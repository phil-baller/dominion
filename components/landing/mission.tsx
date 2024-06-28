import React from "react";
import Header from "../header";
import { whatWeTrain } from "@/constants";
import Image from "next/image";

const Mission = () => {
  const things = whatWeTrain();
  return (
    <section className="bg-white text-[#111] padding flex flex-col gap-6">
      <Header
        content="Answering the Call:"
        spanText="A Mission of Love and Hope"
        isSpan
        spanClass="text-primary"
      />
      <section className="flex flex-col gap-4 text-center max-w-7xl mx-auto">
        <p>
          To form partnerships that will facilitate and improve the health, education and socioeconomic status of women, children and young people through empowerment, right-based approaches, innovative, sustainable and participatory strategies.
        </p>
      </section>
      <section className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-8 w-full">
        {things.map((thing) => (
          <section
            key={thing.name}
            className="flex-1 flex items-center justify-center flex-col gap-8 bg-white p-6 what"
          >
            <Image src={thing.icon} width={160} height={160} alt={thing.name} />
            <p className="text-2xl font-medium">{thing.name}</p>
          </section>
        ))}
      </section>
      <section className="max-w-5xl mx-auto w-full lg:flex items-center justify-between relative hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <p
            className="h-14 w-14 bg-white flex items-center justify-center rounded-full border border-[#111] border-dashed text-2xl z-10"
            key={index}
          >
            0{index + 1}
          </p>
        ))}
        <span className="absolute h-1 w-full border-b border-[#111] border-dashed z-0" />
      </section>
      <section className="w-fit mx-auto p-8 bg-white  what flex flex-col gap-8">
        <p>
          We look forward to working with <br /> individuals like you to help
          the orphans <br />
          and the needy.
        </p>
        <p>
          <span className="text-primary">#Gustave</span> #ManOfGod
          #GeneralOverseer
        </p>
      </section>
    </section>
  );
};

export default Mission;
