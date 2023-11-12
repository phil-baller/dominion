import React from "react";
import Header from "../header";
import { TobeSeen } from "../tobeseen";

const Blog = ({ isHeader }: { isHeader?: boolean }) => {
  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      {isHeader && <Header content="What we've done" />}
      <TobeSeen />
    </section>
  );
};

export default Blog;
