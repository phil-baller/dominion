import React from "react";
import Header from "../header";
import Post from "./post";

const Blog = ({ isHeader }: { isHeader?: boolean }) => {
  return (
    <section className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      {isHeader && <Header content="What we've done" />}
      <section className="grid lg:grid-cols-3 grid-cols-1  gap-10 max-w-7xl w-full mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <Post index={index} key={index} />
        ))}
      </section>
    </section>
  );
};

export default Blog;
