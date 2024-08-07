import BgText from "@/components/landing/bgtext";
import Blog from "@/components/landing/blog";
import Family from "@/components/landing/family";
import Hero from "@/components/landing/hero";
import Impact from "@/components/landing/impact";
import Mission from "@/components/landing/mission";
import Partners from "@/components/landing/partners";
import Video from "@/components/landing/video";
import WhatweDo from "@/components/landing/what-we-do";
import React from "react";
import PaymentDetails from "@/components/PaymentInfo/PayDetails";
const LandingPage = async () => {
  return (
    <main className="flex flex-col ">
      <Hero />
      <WhatweDo />
      <BgText />
      <PaymentDetails />
      <Mission />
      <Family />
      <Impact />
      <Blog isHeader />
      {/* <Partners /> */}
    </main>
  );
};

export default LandingPage;
