import Deeds from "@/components/what-we-do/deeds";
import Hero from "@/components/what-we-do/hero";
import { getPictures } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "What we do",
  description: "See how we're empowering the community",
};

const WhatWeDo = async () => {
  return (
    <main className="h-fit">
      <Hero />
      <Deeds />
    </main>
  );
};

export default WhatWeDo;
