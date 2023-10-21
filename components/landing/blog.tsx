import React from "react";
import Header from "../header";
import Post from "./post";

const Blog = () => {
  return (
    <section className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      <Header content="What we've done" />
      <section className="grid grid-cols-3 gap-10 max-w-7xl w-full mx-auto">
        {Array.from({ length: 6 }).map((i, index) => (
          <Post key={index} />
        ))}
      </section>
    </section>
  );
};

export default Blog;
