import { urlFor } from "@/lib/sanityImageUrl";
import { blogType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: blogType }) => {
  return (
    <section className="flex flex-col">
      <Image
        alt={post.title}
        src={urlFor(post.previewImage).url()}
        width={600}
        height={500}
        className="rounded-[8px]"
      />
      <section className="flex flex-col gap-4 px-2 mt-3">
        <Link
          href={`/blog/${post.slug.current}`}
          className="text-2xl truncate-heading"
        >
          {post.title}
        </Link>
        <p className="font-thin truncate-text">{post.overview}</p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </section>
      </section>
    </section>
  );
};

export default Post;
