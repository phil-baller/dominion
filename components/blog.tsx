import React from "react";
import { TobeSeen } from "./tobeseen";
import { getBlogs } from "@/constants";
import { blogType } from "@/types";

const Blog = async () => {
  const data = (await getBlogs()) as blogType[];

  // console.log(data);

  return (
    <section className="padding bg-white text-[#111]">
      <section className="flex gap-10 max-w-7xl w-full mx-auto">
        <TobeSeen blogs={data} />
      </section>
    </section>
  );
};

export default Blog;
