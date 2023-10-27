import React from "react";

interface hamburgerIcon {
  onClick: () => void;
  isActive: boolean;
}
const HamburgerIcon: React.FC<hamburgerIcon> = ({ onClick, isActive }) => {
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer  lg:hidden group fixed right-10 z-50 top-7"
      onClick={onClick}
    >
      {[...new Array(3)].map((_, i) => (
        <span
          className={` ${
            isActive &&
            "even:opacity-0 even:group-hover:opacity-0 first:-rotate-45 last:rotate-45 last:top-0 last:absolute mt-6 mr-10"
          } h-[2px] w-8 group-hover:opacity-75 transition ${
            isActive ? "bg-black" : "bg-white"
          }`}
          key={i}
        ></span>
      ))}
    </div>
  );
};

export default HamburgerIcon;
