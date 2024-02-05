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

const SingleBlog = ({ blog }: { blog: blogType }) => {
  // console.log(blog);

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => {
        const imageUrl = urlFor(value).url();

        return (
          <Image src={imageUrl} alt="just text" width={600} height={500} />
        );
      },
    },
  };

  return (
    <>
      <Image
        alt={blog.title}
        src={urlFor(blog.previewImage).url()}
        width={600}
        height={500}
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
          <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
        </section>
      </section>
    </>
  );
};

export default SingleBlog;
