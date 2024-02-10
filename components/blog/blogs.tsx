// "use client";

import React from "react";
import { Search } from "lucide-react";
import { TobeSeen } from "../tobeseen";
// import { getBlogs } from "@/constants";
// import { blogType } from "@/types";

const Blogs = async () => {
  // const data = (await getBlogs()) as blogType[];
  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      <section className="px-2 max-w-sm w-full mx-auto border flex items-center gap-2">
        <input
          type="text"
          className="flex outline-none  flex-1 h-10 "
          placeholder="Search"
        />
        <Search className="text-primary cursor-pointer" />
      </section>
      <TobeSeen />
    </section>
  );
};

export default Blogs;
