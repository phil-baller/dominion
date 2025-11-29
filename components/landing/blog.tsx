import React from "react";
import Header from "../header";
import { TobeSeen } from "../tobeseen";
import Link from "next/link";

const Blog = async ({ isHeader }: { isHeader?: boolean }) => {
  return (
    <section className="bg-neutral-50 text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {isHeader && (
          <div className="text-center max-w-3xl mx-auto">
            <Header content="What we've done" />
            <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
              Stay updated with our latest initiatives, success stories, and impact reports from the field.
            </p>
          </div>
        )}
        <TobeSeen isReduced />
        {isHeader && (
          <div className="flex justify-center mt-8">
            <Link
              href="/blog"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Stories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
