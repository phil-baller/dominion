import React from "react";

const PageTextHero = ({ content }: { content: string }) => {
  return (
    <h1 className="lg:text-5xl xl:text-6xl text-4xl relative font-black text-white leading-tight">
      {content}
    </h1>
  );
};

export default PageTextHero;
