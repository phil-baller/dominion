import React from "react";
import Header from "../header";
import { TobeSeen } from "../tobeseen";
// import { blogType } from "@/types";
// import { getBlogs } from "@/constants";

const Blog = async ({ isHeader }: { isHeader?: boolean }) => {
  // const data = (await getBlogs()) as blogType[];

  // console.log(data);

  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      {isHeader && <Header content="What we've done" />}
      <TobeSeen />
    </section>
  );
};

export default Blog;
