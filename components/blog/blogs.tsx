// "use client";

import React from "react";
import { Search } from "lucide-react";
import { TobeSeen } from "../tobeseen";
// import { getBlogs } from "@/constants";
// import { blogType } from "@/types";

const Blogs = async () => {
  // const data = (await getBlogs()) as blogType[];
  return (
    <section className="bg-white text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <section className="max-w-md w-full mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              className="flex outline-none flex-1 h-12 px-4 pr-12 border border-neutral-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Search articles..."
            />
            <Search className="absolute right-4 text-primary cursor-pointer w-5 h-5" />
          </div>
        </section>
        <TobeSeen />
      </div>
    </section>
  );
};

export default Blogs;
