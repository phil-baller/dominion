"use client";

import { useUploadThing } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Wwd = ({ userId }: { userId: string }) => {
  const [imageUploading, setImageUploading] = useState(false);
  const [image, setImage] = useState<File[] | undefined>([]);
  const [imageLink, setImageLink] = useState<string | undefined>("");

  const { startUpload } = useUploadThing("media");

  useEffect(() => {
    const uploadImage = async () => {
      try {
        if (image && image.length > 0) {
          setImageUploading(true);

          const imgRes = await startUpload(image);

          if (imgRes && imgRes[0].url) {
            setImageLink(imgRes[0].url);
          }
        }
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setImageUploading(false);
      }
    };

    uploadImage();
  }, [image, startUpload]);

  const handleChangeWWD = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(Array.from(e.target.files) as File[]);
    }
  };

  const handleUploadWhatdo = async (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      return toast.error("Unautorized");
    }
    console.log(imageLink);

    if (imageLink === "" || !imageLink) {
      return toast.error("Image required");
    }

    try {
      const { data } = await axios.post("/api/wwd", { userId, imageLink });

      if (data) {
        toast.success("Successfully uploaded!");

        setImage(undefined);
        setImageLink("");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong!");
    }
  };

  return (
    <form
      className="flex flex-col  gap-10 w-full"
      onSubmit={handleUploadWhatdo}
    >
      <p className="capitalize text-2xl">upload photo</p>
      <label
        htmlFor="wwd"
        aria-disabled={imageUploading}
        className="disabled:cursor-not-allowed disabled:opacity-50"
      >
        <input
          type="file"
          name="wwd"
          id="wwd"
          className="hidden"
          onChange={handleChangeWWD}
        />
        <span className="cursor-pointer border py-3 px-10 lg:w-fit w-full text-primary capitalize">
          {imageUploading ? "   Uploading..." : "Select Photo"}
        </span>
      </label>

      {image && image.length > 0 && (
        <Image
          src={imageLink ? imageLink : URL.createObjectURL(image[0])}
          alt="nothing"
          width={200}
          height={200}
          className="rounded-md"
        />
      )}

      <button
        className="bg-primary py-3 px-10 lg:w-fit w-full text-white capitalize disabled:cursor-not-allowed disabled:opacity-50"
        disabled={imageUploading} // Disable button when loading
      >
        {imageUploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

export default Wwd;
