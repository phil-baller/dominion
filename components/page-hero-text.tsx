import React from "react";

const PageTextHero = ({ content }: { content: string }) => {
  return (
    <h1 className="lg:text-[64px] text-[40px] relative before:h-full before:w-1 before:bg-primary before:absolute before:-left-3 font-bold">
      {content}
    </h1>
  );
};

export default PageTextHero;
