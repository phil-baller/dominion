"use client";

import { useUploadThing } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import Wwd from "./whatwedo";

interface POSTDATA {
  title: string;
  desc: string;
  imageUrl?: string;
}

const CreatePost = ({ userId }: { userId: string | null }) => {
  const [postData, setPostData] = useState<POSTDATA>({
    title: "",
    desc: "",
    imageUrl: "",
  });

  const [files, setFiles] = useState<File[] | undefined>([]);

  const [loading, setLoading] = useState(false);
  const { startUpload } = useUploadThing("media");

  const { title, desc, imageUrl } = postData;

  useEffect(() => {
    const uploadImage = async () => {
      try {
        if (files && files.length > 0) {
          setLoading(true);

          const imgRes = await startUpload(files);

          if (imgRes && imgRes[0].url) {
            setPostData((prev) => ({
              ...prev,
              imageUrl: imgRes[0].url,
            }));
          }
        }
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    uploadImage();
  }, [files, startUpload]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files) as File[]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      return toast.error("Unautorized");
    }

    if (imageUrl === "" || !imageUrl) {
      return toast.error("Image required");
    }

    try {
      const { data } = await axios.post("/api/blog", { ...postData, userId });

      const requestBody = {
        imageUrl: "",
        title: "",
        desc: "",
      };

      if (data) {
        toast.success("Successfully uploaded!");
        setPostData(requestBody);
        setFiles(undefined);
      }
    } catch (error: any) {
      console.log(error);
      return toast.error("Something went wrong!");
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
                className="flex outline-none flex-1 p-2 border bg-white text-[#111] disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
                disabled={loading} // Disable input when loading
              />
            </section>
            <section className="flex flex-col gap-4">
              <p className="capitalize text-2xl">description</p>
              <textarea
                className="flex outline-none border w-full h-52 px-2 resize-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Message"
                name="desc"
                value={desc}
                onChange={handleChange}
                disabled={loading} // Disable textarea when loading
              />
            </section>
          </section>
          <section className="flex flex-col  gap-10 w-full">
            <p className="capitalize text-2xl">upload photo</p>
            <section className="flex-1 flex flex-col gap-6">
              <label htmlFor="file">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="hidden"
                  onChange={handleChangeImage}
                  disabled={loading}
                />
                <span
                  className="cursor-pointer border py-3 px-10 lg:w-fit w-full text-primary capitalize disabled:cursor-pointer disabled:opacity-50"
                  aria-disabled={loading}
                >
                  {loading ? "   Uploading..." : "Select Photo"}
                </span>
              </label>

              {files && files.length > 0 && (
                <Image
                  src={imageUrl ? imageUrl : URL.createObjectURL(files[0])}
                  alt="nothing"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              )}
            </section>
          </section>
        </section>
        <button
          className="bg-primary py-3 px-10 lg:w-fit w-full text-white capitalize disabled:cursor-not-allowed disabled:opacity-50"
          disabled={loading}
        >
          Upload
        </button>
      </form>
      {/* CxWWxMCptncGqCfJ */}
      <section className="flex flex-col gap-10 w-full">
        <h1 className="font-bold text-4xl">
          Upload <span className="font-bold">what we do</span> photos
        </h1>
        <Wwd userId={userId!} />
      </section>
    </section>
  );
};

export default CreatePost;
