"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PostSkeleton from "./skeletons/postSkeleton";
// import { Post } from "@prisma/client";
import Image from "next/image";

const SingleBlog = ({ blogId }: { blogId: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["single"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/blog/${blogId}`);

      return data;
    },
  });

  const post = data;

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <Image alt={post.title} src={post.imageUrl!} width={600} height={500} />
      <section className="flex flex-col gap-4 px-2 mt-3">
        <p className="text-2xl">{post.title}</p>
        <p className="font-thin">{post.desc}</p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </section>
      </section>
    </>
  );
};

export default SingleBlog;
