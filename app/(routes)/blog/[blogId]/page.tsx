import Blog from "@/components/blog";
import Hero from "@/components/blog/hero";
import SingleBlog from "@/components/singleBlog";
import { Params } from "@/types";
import { Search } from "lucide-react";
import React from "react";

const BlogId = ({ params }: { params: Params }) => {
  const { blogId } = params;

  return (
    <main className="h-fit">
      <Hero />
      <section className="padding bg-white text-[#111]">
        <section className="flex gap-10 max-w-2xl w-full mx-auto ">
          <section className="flex-[2]">
            <SingleBlog blogId={blogId} />
          </section>
          <section className="lg:flex-1 hidden">
            <section className="px-2 w-full mx-auto border flex items-center gap-2 ">
              <input
                type="text"
                className="flex outline-none  flex-1 h-10 "
                placeholder="Search"
              />
              <Search className="text-primary cursor-pointer" />
            </section>
            <ul className="ml-10 mt-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <li className="text-base list-disc" key={index}>
                  Supporting a disabled orphan with a protruding bone
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <Blog />
    </main>
  );
};

export default BlogId;
