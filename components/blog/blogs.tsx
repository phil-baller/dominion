"use client";

import React from "react";
import PostComponent from "../landing/post";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";

const Blogs = () => {
  const postData = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await axios.get("/api/post");

      return data;
    },
  });

  const TobeSeen = () => {
    if (postData.isPending) {
      return (
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton className="h-80 bg-slate-500" key={index} />
          ))}
        </section>
      );
    } else if (postData.isError) {
      return <h1>something went wrong</h1>;
    } else {
      return (
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
          {postData.data.map((post: Post, index: number) => (
            <PostComponent index={index} key={index} />
          ))}
        </section>
      );
    }
  };

  return (
    <section className="bg-white text-[#111] padding flex gap-10 flex-col">
      <section className="px-2 max-w-sm w-full mx-auto border flex items-center gap-2">
        <input
          type="text"
          className="flex outline-none  flex-1 h-10 "
          placeholder="Search"
        />
        <Search className="text-primary cursor-pointer" />
      </section>
      <TobeSeen />
    </section>
  );
};

export default Blogs;
