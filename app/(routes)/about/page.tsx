import Hero from "@/components/about/hero";
import Purpose from "@/components/about/purpose";
import TeamAndVolunteers from "@/components/about/team-and-volunteers";
import Partners from "@/components/landing/partners";
import React from "react";
import OurPrograms from "@/components/about/programs";

const About = () => {
  return (
    <main className="h-fit">
      <Hero />
      <Purpose />
      {/* <TeamAndVolunteers /> */}
      <OurPrograms />
      <Partners />
    </main>
  );
};

export default About;
