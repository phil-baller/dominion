import Hero from "@/components/blog/hero";
import React from "react";
import Blogs from "@/components/blog/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "What we've doing so for in the community",
};

const Blog = () => {
  return (
    <main className="h-fit">
      <Hero />
      <Blogs />
    </main>
  );
};

export default Blog;
