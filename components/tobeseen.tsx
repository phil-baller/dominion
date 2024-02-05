"use client";

// import { PostData } from "@/lib/reactquerry";
import PostComponent from "./landing/post";
import { blogType } from "@/types";

export const TobeSeen = ({ blogs }: { blogs: blogType[] }) => {
  //
  // const posts = PostData();

  if (blogs?.length === 0) {
    return <div> No Post Yet</div>;
  } else {
    return (
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl w-full mx-auto">
        {blogs?.map((blog) => (
          <PostComponent post={blog} key={blog._id} />
        ))}
      </section>
    );
  }
};
