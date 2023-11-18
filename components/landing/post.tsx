import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: Post }) => {
  return (
    <section className="flex flex-col">
      <Image
        alt={post.title}
        src={post.imageUrl!}
        width={600}
        height={500}
        className="w-full"
      />
      <section className="flex flex-col gap-4 px-2 mt-3">
        <Link href={`/blog/${post.id}`} className="text-2xl truncate-heading">
          {post.title}
        </Link>
        <p className="font-thin truncate-text">{post.desc}</p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </section>
      </section>
    </section>
  );
};

export default Post;
