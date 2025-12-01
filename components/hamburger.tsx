import { cn } from "@/lib/utils";
import React from "react";

interface hamburgerIcon {
  onClick: () => void;
  isActive: boolean;
  scrolled?: boolean;
}
const HamburgerIcon: React.FC<hamburgerIcon> = ({ onClick, isActive, scrolled = false }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 cursor-pointer lg:hidden group",
        isActive && "relative"
      )}
      onClick={onClick}
    >
      {[...new Array(3)].map((_, i) => (
        <span
          className={cn(
            "h-[2px] w-8 group-hover:opacity-75 transition-all duration-300",
            scrolled ? "bg-[#111]" : "bg-white",
            {
              "even:opacity-0 even:group-hover:opacity-0 first:-rotate-45 bg-[#111] last:rotate-45 last:absolute last:top-0":
                isActive,
            }
          )}
          key={i}
        ></span>
      ))}
    </div>
  );
};

export default HamburgerIcon;
