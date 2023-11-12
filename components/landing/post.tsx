import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: Post }) => {
  return (
    <section className="flex flex-col">
      <section className="h-80 bg-slate-500 " />

      <section className="flex flex-col gap-4 px-2 mt-3">
        <Link href={`/blog/${post.id}`} className="text-2xl">
          Supporting a disabled orphan with a protruding bone
        </Link>
        <p className="font-thin">{post.desc}</p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>21/10/2023</p>
        </section>
      </section>
    </section>
  );
};

export default Post;
