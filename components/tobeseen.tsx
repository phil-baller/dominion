"use client";

import { postData } from "@/lib/reactquerry";
import { Skeleton } from "./ui/skeleton";
import PostComponent from "./landing/post";
import { Post } from "@prisma/client";
import PostSkeleton from "./skeletons/postSkeleton";

export const TobeSeen = () => {
  //
  const posts = postData();

  if (posts.isPending) {
    return (
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostSkeleton />
        ))}
      </section>
    );
  } else if (posts.isError) {
    return <h1>something went wrong</h1>;
  } else if (posts.data.length === 0) {
    return <div> No Post Yet</div>;
  } else {
    return (
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
        {posts.data.map((post: Post, index: number) => (
          <PostComponent post={post} key={index} />
        ))}
      </section>
    );
  }
};
