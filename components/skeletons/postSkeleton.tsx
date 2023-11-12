import React from "react";
import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
  return (
    <section className="flex flex-col">
      <Skeleton />

      <section className="flex flex-col gap-4 px-2 mt-3">
        <Skeleton className="h-80" />
        <section className="font-thin flex flex-col gap-2">
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-[80%]" />
          <Skeleton className="h-2 w-[60%]" />
        </section>
        <section className="flex items-center justify-between mt-5">
          <Skeleton className="h-2 w-[20%]" />
          <Skeleton className="h-2 w-[20%]" />
        </section>
      </section>
    </section>
  );
};

export default PostSkeleton;
