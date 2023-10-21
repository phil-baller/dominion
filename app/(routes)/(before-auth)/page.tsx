import Hero from "@/components/landing/hero";
import WhatweDo from "@/components/landing/what-we-do";
import React from "react";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <WhatweDo />
    </main>
  );
};

export default LandingPage;
