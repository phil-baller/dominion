"use client";

import { navbarRoutes } from "@/constants";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import HamburgerIcon from "./hamburger";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  const routes = navbarRoutes();

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="h-20 flex w-full items-center px-20 justify-between fixed left-0 top-0 z-[999] ">
      <div className="absolute inset-0 bg-[rgba(17, 17, 17, 1)]/50 backdrop-blur-lg z-[-1]" />
      <Logo />

      <nav>
        <ul className="lg:flex gap-8 hidden">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={cn(
                "font-normal text-base",
                pathname === route.path && "text-primary"
              )}
            >
              {route.name}
            </Link>
          ))}
        </ul>
      </nav>
      <HamburgerIcon
        isActive={isActive}
        onClick={() => setIsActive((prev) => !prev)}
      />

      <div
        className={`${
          isActive ? "right-0" : "-right-full"
        }  bg-white w-full fixed transition-all text-[#111] top-0 h-screen py-12 px-20 z-0`}
        onClick={() => setIsActive(false)}
      >
        <Logo />
        <hr className="mt-2" />

        <ul className="flex flex-col gap-8 mt-10">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={cn(
                "font-normal text-base",
                pathname === route.path && "text-primary"
              )}
            >
              {route.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
