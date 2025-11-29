import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface headerProps {
  isSpan?: boolean;
  spanText?: string;
  content: string;
  spanClass?: string;
}

const Header: FC<headerProps> = ({ isSpan, spanText, spanClass, content }) => {
  return (
    <h2 className="lg:text-4xl xl:text-5xl text-3xl font-black text-[#111] self-center relative inline-block">
      {content}{" "}
      {isSpan && <span className={cn(spanClass)}>{spanText}</span>}
      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
    </h2>
  );
};

export default Header;
