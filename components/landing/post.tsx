import Link from "next/link";
import React from "react";

const Post = ({ index }: { index: number }) => {
  return (
    <section className="flex flex-col">
      <section className="h-80 bg-slate-500 " />

      <section className="flex flex-col gap-4 px-2 mt-3">
        <Link href={`/blog/${index}`} className="text-2xl">
          Supporting a disabled orphan with a protruding bone
        </Link>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur. Sit amet dignissim fringilla
          tortor id mattis enim egestas. Fames congue mi urna non senectus et.
          In et tincidunt nibh sapien dui. Sem consequat sagittis.
        </p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>21/10/2023</p>
        </section>
      </section>
    </section>
  );
};

export default Post;
