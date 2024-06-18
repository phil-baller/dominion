import Image from "next/image";
import React from "react";

const Purpose = () => {
  return (
    <section className="text-[#111] bg-white flex flex-col gap-20 py-10 px-4 lg:py-40  ">
      <section className="max-w-7xl mx-auto w-full flex gap-20  lg:flex-row flex-col-reverse">
        <section className="flex flex-col gap-4 flex-1">
          <p className="text-5xl">Our Purpose</p>
          <p className="flex flex-col gap-5">
            We are a Cameroonian, Christian based, not-for-profit organization that facilitates and improves the health, education and socio-economic status of our beneficiaries. Our work focuses on women, children, young people.
          </p>
        </section>
        <section className="flex flex-col gap-4 flex-1 relative">
          <Image
            src="/icons/part.png"
            alt="dominion partners"
            width={605}
            height={340}
            className="z-10"
          />
          <section className="absolute w-full h-full z-0 bg-primary -left-10 -bottom-10" />
        </section>
      </section>
      <section className="max-w-7xl mx-auto w-full flex gap-20 lg:flex-row flex-col">
        <section className="flex flex-col gap-4">
          <p className="lg:text-5xl text-xl font-bold">Our Vision</p>
          <p>
            A Christian community free of discrimination where women, children, and young people have equal opportunities to develop their full potentials.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="lg:text-5xl text-xl font-bold">Our Mission</p>
          <p>
            To form partnerships that will facilitate and improve the health, education and socioeconomic status of women, children and young people through empowerment, right-based approaches, innovative, sustainable and participatory strategies.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Purpose;
