"use client";

import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { UploadButton } from "@/lib/utils";

interface POSTDATA {
  title: string;
  desc: string;
  imageUrl?: string;
}

const CreatePost = () => {
  const [postData, setPostData] = useState<POSTDATA>({
    title: "",
    desc: "",
    imageUrl: "",
  });

  const { title, desc, imageUrl } = postData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // console.log(postData);

      const res = await axios.post("/api/post", {
        ...postData,
        userId: "sk_test_XG5tVr0LwHa3GOGZ1rK9K9YeW3UzKWNdIY2wdcYgAV",
      });

      if (res.status) {
        toast.success("Post created successfully");
        setPostData({
          title: "",
          desc: "",
          imageUrl: "",
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 w-full">
      <h1 className="font-bold text-4xl">Enter blog post information</h1>
      <form className="flex flex-col gap-20" onSubmit={handleSubmit}>
        <section className="flex gap-20">
          <section className="flex flex-col  gap-10 w-full">
            <section className="flex flex-col gap-4">
              <p className="capitalize text-2xl">title</p>
              <input
                type="text"
                className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </section>
            <section className="flex flex-col gap-4">
              <p className="capitalize text-2xl">description</p>
              <textarea
                className="flex outline-none border w-full h-52 px-2 resize-none"
                placeholder="Message"
                name="desc"
                value={desc}
                onChange={handleChange}
              />
            </section>
          </section>
          <section className="flex flex-col  gap-10 w-full">
            <p className="capitalize text-2xl">upload photo</p>
            <section className="flex-1">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
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
