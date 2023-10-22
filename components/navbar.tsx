"use client";

import { navbarRoutes } from "@/constants";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  const routes = navbarRoutes();
  return (
    <header className="h-20 flex w-full items-center px-20 justify-between sticky top-0 z-[999] overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(17, 17, 17, 1)]/50 backdrop-blur-lg z-[-1]" />
      <Logo />

      <nav>
        <ul className="flex gap-8">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={cn(
                "font-normal text-base",
                pathname === route.path ||
                  (pathname.includes(route.name) && "text-primary")
              )}
            >
              {route.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
