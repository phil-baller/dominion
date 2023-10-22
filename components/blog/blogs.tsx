import React from "react";
import Post from "../landing/post";
import { Search } from "lucide-react";

const Blogs = () => {
  return (
    <section className="bg-white text-[#111] p-20 flex gap-10 flex-col">
      <section className="px-2 max-w-sm w-full mx-auto border flex items-center gap-2">
        <input
          type="text"
          className="flex outline-none  flex-1 h-10 "
          placeholder="Search"
        />
        <Search className="text-primary cursor-pointer" />
      </section>
      <section className="grid grid-cols-3 gap-10 max-w-7xl w-full mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <Post index={index} key={index} />
        ))}
      </section>
    </section>
  );
};

export default Blogs;
