import { whatWeDo } from "@/constants";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const WhatweDo = () => {
  const whatWEDo = whatWeDo();
  return (
    <section id="what-we-do" className="bg-white text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <Header content="What we Do" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            Discover how you can contribute to our mission and make a meaningful impact in the lives of those we serve.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {whatWEDo.map((what, index) => (
            <div
              key={what.name}
              className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Image
                    alt={what.name}
                    width={40}
                    height={40}
                    src={what.icon}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-[#111] mb-4">
                {what.name}
              </h3>

              <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                {what.text}
              </p>

              <Link
                href="/what-we-do"
                className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
              >
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatweDo;
