import React from "react";
import Header from "../header";
import { partners } from "@/constants";
import Image from "next/image";

const Partners = () => {
  const parts = partners();
  return (
    <section className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      <Header content="Our Partners" />

      <section className="max-w-7xl mx-auto flex justify-between w-full gap-16">
        {parts.map((part) => (
          <section key={part.name} className="flex-1 flex flex-col gap-4">
            <p className="text-2xl">{part.name}</p>
            <section className="flex items-start gap-2">
              <Image
                alt={`dominion ${part.name} partner`}
                src="/icons/location.svg"
                width={24}
                height={24}
              />

              <p className="text-sm">{part.location}</p>
            </section>
            <section className="flex items-start gap-2">
              <Image
                alt={`dominion ${part.name} partner`}
                src="/icons/phone.svg"
                width={24}
                height={24}
              />

              <p className="flex flex-col">
                {part.contact.map((contact) => (
                  <span className="text-sm" key={contact}>
                    {contact}
                  </span>
                ))}
              </p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Partners;
