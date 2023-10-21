import Hero from "@/components/about/hero";
import Purpose from "@/components/about/purpose";
import TeamAndVolunteers from "@/components/about/team-and-volunteers";
import Partners from "@/components/landing/partners";
import PageTextHero from "@/components/page-hero-text";
import React from "react";

const About = () => {
  return (
    <main className="h-fit">
      <Hero />
      <Purpose />
      <TeamAndVolunteers />
      <Partners />
    </main>
  );
};

export default About;
