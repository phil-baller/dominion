import React from "react";

const PageTextHero = ({ content }: { content: string }) => {
  return (
    <h1 className="text-[64px] relative before:h-full before:w-1 before:bg-primary before:absolute before:-left-3">
      {content}
    </h1>
  );
};

export default PageTextHero;
