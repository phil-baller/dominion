"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
// import PostSkeleton from "./skeletons/postSkeleton";
// import { Post } from "@prisma/client";
import Image from "next/image";
import { blogType } from "@/types";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanityImageUrl";
import PostSkeleton from "./skeletons/postSkeleton";

const SingleBlog = ({ blogId }: { blogId: string }) => {
  // console.log(blog);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["single"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/blogs/${blogId}`);

      return data;
    },
  });

  const blog: blogType = data;

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => {
        const imageUrl = urlFor(value).url();

        return (
          <Image
            src={imageUrl}
            alt="just text"
            width={600}
            height={500}
            className="rounded-[8px]"
          />
        );
      },
    },
  };
  // console.log(blog);

  const date = blog._createdAt.split("T")[0];

  // console.log(date);

  return (
    <>
      <Image
        alt={blog.title}
        src={urlFor(blog.previewImage).url()}
        width={600}
        height={500}
        className="rounded-[8px]"
      />
      <section className="flex flex-col gap-4 px-2 mt-3">
        <p className="text-2xl">{blog?.title}</p>
        <div className="prose">
          <PortableText
            value={blog.content}
            components={PortableTextComponent}
          />
        </div>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>{blog.releaseDate ? blog.releaseDate : date}</p>
        </section>
      </section>
    </>
  );
};

export default SingleBlog;
