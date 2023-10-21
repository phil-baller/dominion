import { whatWeDo } from "@/constants";
import Header from "@/components/header";

import Image from "next/image";
import React from "react";

const WhatweDo = () => {
  const whatWEDo = whatWeDo();
  return (
    <div className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      <Header content="What we Do" />
      <section className="flex items-center gap-8">
        {whatWEDo.map((what) => (
          <section
            className="bg-[#FBF6F6] p-6 flex flex-col gap-8 items-center rounded-lg"
            key={what.name}
          >
            <Image alt={what.name} width={48} height={48} src={what.icon} />
            <section className="bg-[#FBF6F6] p-6 flex flex-col gap-4 items-center">
              <p className="text-2xl ">{what.name}</p>
              <p>{what.text}</p>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

export default WhatweDo;
