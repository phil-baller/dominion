import Hero from "@/components/blog/hero";
import Post from "@/components/landing/post";
import { Search } from "lucide-react";
import React from "react";

const BlogId = () => {
  return (
    <main className="h-fit">
      <Hero />
      <section className="p-20 bg-white text-[#111]">
        <section className="flex gap-10 max-w-7xl w-full mx-auto ">
          <section className="flex-[2]">
            <section className="w-full bg-slate-500 h-80" />
            <section className="flex flex-col gap-4 px-2 mt-3">
              <p className="text-2xl">
                Supporting a disabled orphan with a protruding bone
              </p>
              <p className="font-thin">
                Lorem ipsum dolor sit amet consectetur. Sit amet dignissim
                fringilla tortor id mattis enim egestas. Fames congue mi urna
                non senectus et. In et tincidunt nibh sapien dui. Sem consequat
                sagittis.
              </p>
              <section className="flex items-center justify-between mt-5">
                <p>By admin</p>
                <p>21/10/2023</p>
              </section>
            </section>
          </section>
          <section className="flex-1">
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
                <li className="text-base list-disc">
                  Supporting a disabled orphan with a protruding bone
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <section className="p-20 bg-white text-[#111]">
        <section className="flex gap-10 max-w-7xl w-full mx-auto">
          <section className="grid grid-cols-3 gap-10 max-w-7xl w-full mx-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <Post index={index} key={index} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};

export default BlogId;
