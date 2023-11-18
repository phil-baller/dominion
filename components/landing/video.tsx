"use client";

import React from "react";

import YouTube from "react-youtube";
// import "react-youtube/style.css";

const Video = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <section className="bg-[#868484] flex items-center justify-center flex-col lg:p-60 p-32">
      <YouTube videoId="eJBxvMtaqM0" opts={opts} loading="lazy" />
    </section>
  );
};

export default Video;
