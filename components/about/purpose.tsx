import Image from "next/image";
import React from "react";
import Header from "../header";

const Purpose = () => {
  return (
    <section className="text-[#111] bg-white py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <section className="flex gap-12 lg:flex-row flex-col-reverse items-center">
          <div className="flex flex-col gap-6 flex-1">
            <Header content="Our Purpose" />
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
              We are a Cameroonian, Christian based, not-for-profit organization that facilitates and improves the health, education and socio-economic status of our beneficiaries. Our work focuses on women, children, young people.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden border border-neutral-200">
              <Image
                src="/icons/part.png"
                alt="dominion partners"
                width={605}
                height={340}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute w-full h-full z-0 bg-primary/20 rounded-xl -left-6 -bottom-6" />
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 p-8 bg-neutral-50 rounded-xl border border-neutral-200">
            <h2 className="text-3xl lg:text-4xl font-black text-[#111]">Our Vision</h2>
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
              A Christian community free of discrimination where women, children, and young people have equal opportunities to develop their full potentials.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-8 bg-neutral-50 rounded-xl border border-neutral-200">
            <h2 className="text-3xl lg:text-4xl font-black text-[#111]">Our Mission</h2>
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
              To form partnerships that will facilitate and improve the health, education and socioeconomic status of women, children and young people through empowerment, right-based approaches, innovative, sustainable and participatory strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
