import Video from "@/components/landing/Video";
import BgText from "@/components/landing/bgtext";
import Blog from "@/components/landing/blog";
import Family from "@/components/landing/family";
import Hero from "@/components/landing/hero";
import Mission from "@/components/landing/mission";
import Partners from "@/components/landing/partners";
import WhatweDo from "@/components/landing/what-we-do";
import React from "react";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <WhatweDo />
      <BgText />
      <Mission />
      <Video />
      <Family />
      <Blog />
      <Partners />
    </main>
  );
};

export default LandingPage;
