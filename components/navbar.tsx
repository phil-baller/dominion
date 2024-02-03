"use client";

import { navbarRoutes } from "@/constants";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import HamburgerIcon from "./hamburger";

const Navbar = () => {
  const pathname = usePathname();
  const routes = navbarRoutes();

  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    if (window.scrollY > 0) {
      window.addEventListener("scroll", handleScroll);
    }
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <header className="h-20 flex w-full items-center lg:px-20 px-4 justify-between fixed left-0 top-0 z-[999]">
      <div
        className={cn("absolute inset-0 duration-300 z-[-1]", {
          "bg-[#111] backdrop-blur-lg": scrolled,
        })}
      />
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
        }  bg-white w-full fixed transition-all text-[#111] top-0 h-screen p-4 z-0`}
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
