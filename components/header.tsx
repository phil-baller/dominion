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
    <p className="lg:text-4xl text-2xl self-center relative">
      {content} {isSpan && <span className={cn(spanClass)}>{spanText}</span>}
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[107px] h-[3px] bg-primary"></span>
    </p>
  );
};

export default Header;
