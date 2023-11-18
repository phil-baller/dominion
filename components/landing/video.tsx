import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <section className="flex items-center justify-center flex-col lg:p-60 p-32">
      {/* <section className="max-w-5xl mx-auto flex items-center justify-center flex-col gap-8"> */}
      {/* <p className="lg:text-5xl text-2xl font-black text-center">
          You can make a difference, so why don’t you???
        </p>
        <Image
          src="/icons/youtube.svg"
          alt="dominion youtube icon"
          width={83}
          height={83}
        /> */}

      <video src="https://youtu.be/eJBxvMtaqM0" className="w-full h-full" />
      {/* </section> */}
    </section>
  );
};

export default Video;
