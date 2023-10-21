import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

const BeforeAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="px-20">{children}</section>
    </main>
  );
};

export default BeforeAuthLayout;
