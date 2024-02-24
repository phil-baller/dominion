"use client";

import { PostData } from "@/lib/reactquerry";
import PostComponent from "./landing/post";
import PostSkeleton from "./skeletons/postSkeleton";
import { revalidatePath } from "next/cache";
import { useEffect } from "react";

export const TobeSeen = ({ isReduced }: { isReduced?: boolean }) => {
  useEffect(() => {
    revalidatePath("/");
  }, []);

  const posts = PostData();

  if (posts.isPending) {
    return (
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </section>
    );
  } else if (posts.isError) {
    return <h1>something went wrong</h1>;
  } else if (posts.data?.length === 0) {
    return <div> No Post Yet</div>;
  }

  if (isReduced) {
    const newPosts = posts.data?.slice(0, 6);
    return (
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
        {newPosts?.map((post) => (
          <PostComponent post={post} key={post._id} />
        ))}
      </section>
    );
  }

  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
      {posts.data?.map((post) => (
        <PostComponent post={post} key={post._id} />
      ))}
    </section>
  );
};
