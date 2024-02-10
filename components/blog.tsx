import React from "react";
import { TobeSeen } from "./tobeseen";

const Blog = async () => {
  return (
    <section className="padding bg-white text-[#111]">
      <section className="flex gap-10 max-w-7xl w-full mx-auto">
        <TobeSeen isReduced />
      </section>
    </section>
  );
};

export default Blog;
