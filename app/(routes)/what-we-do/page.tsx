import Deeds from "@/components/what-we-do/deeds";
import Hero from "@/components/what-we-do/hero";
import { getPictures } from "@/constants";
import React from "react";

const WhatWeDo = async () => {
  const pictures = await getPictures();

  // console.log(pictures);

  return (
    <main className="h-fit">
      <Hero />
      <Deeds pictures={pictures} />
    </main>
  );
};

export default WhatWeDo;
