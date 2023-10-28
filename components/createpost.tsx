"use client";

import React from "react";

const CreatePost = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 w-full">
      <h1 className="font-bold text-4xl">Enter blog post information</h1>
      <form className="flex flex-col gap-20">
        <section className="flex gap-20">
          <section className="flex flex-col  gap-10 w-full">
            <section className="flex flex-col gap-4">
              <p className="capitalize text-2xl">title</p>
              <input
                type="text"
                className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
                placeholder="Password"
              />
            </section>
            <section className="flex flex-col gap-4">
              <p className="capitalize text-2xl">description</p>
              <textarea
                className="flex outline-none border w-full h-52 px-2 resize-none"
                placeholder="Message"
              />
            </section>
          </section>
          <section className="flex flex-col  gap-10 w-full">
            <p className="capitalize text-2xl">upload photo</p>
            <section className="flex-1">
              <label htmlFor="file">
                <input type="file" name="file" id="file" className="hidden" />
                <span className="cursor-pointer border py-3 px-10 lg:w-fit w-full text-primary capitalize">
                  Select photo
                </span>
              </label>
            </section>
          </section>
        </section>
        <button className="bg-primary py-3 px-10 lg:w-fit w-full text-white capitalize">
          upload
        </button>
      </form>

      <section className="flex flex-col gap-10 w-full">
        <h1 className="font-bold text-4xl">
          Upload <span className="font-bold">what we do</span> photos
        </h1>

        <form className="flex flex-col  gap-10 w-full">
          <p className="capitalize text-2xl">upload photo</p>
          <label htmlFor="file">
            <input type="file" name="file" id="file" className="hidden" />
            <span className="cursor-pointer border py-3 px-10 lg:w-fit w-full text-primary capitalize">
              Select photo
            </span>
          </label>

          <button className="bg-primary py-3 px-10 lg:w-fit w-full text-white capitalize">
            upload
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreatePost;
