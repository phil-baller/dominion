import { cn } from "@/lib/utils";
import React from "react";

interface hamburgerIcon {
  onClick: () => void;
  isActive: boolean;
}
const HamburgerIcon: React.FC<hamburgerIcon> = ({ onClick, isActive }) => {
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer  lg:hidden group fixed right-10 z-50 top-"
      onClick={onClick}
    >
      {[...new Array(3)].map((_, i) => (
        <span
          className={cn(
            "h-[2px] w-8 group-hover:opacity-75 transition bg-white",
            {
              "even:opacity-0 even:group-hover:opacity-0 first:-rotate-45 bg-black last:rotate-45 last:top-0 last:absolute mt-14 -mr-4":
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
