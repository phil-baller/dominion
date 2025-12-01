"use client";

import { navbarRoutes } from "@/constants";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import HamburgerIcon from "./hamburger";
import Donate from "./donatebtn";

const Navbar = () => {
  const pathname = usePathname();
  const routes = navbarRoutes();

  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isActive]);

  return (
    <header
      className={cn(
        "h-20 flex w-full items-center lg:px-8 xl:px-20 px-4 justify-between fixed left-0 top-0 z-[999] transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Logo />

      <nav className="hidden lg:flex items-center gap-8">
        <ul className="flex gap-6 items-center">
          {routes.map((route, index) => (
            <Link
              href={route.path}
              key={index}
              className={cn(
                "font-medium text-sm transition-colors duration-200 relative group",
                pathname === route.path
                  ? "text-primary font-semibold"
                  : scrolled
                  ? "text-[#111] hover:text-primary"
                  : "text-white hover:text-primary"
              )}
            >
              {route.name}
              {pathname === route.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </ul>
        <div className="ml-4">
          <Donate />
        </div>
      </nav>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className={cn(
            "relative z-[1000] p-2 transition-opacity duration-300 flex items-center justify-center",
            isActive ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          aria-label="Toggle menu"
          aria-expanded={isActive}
        >
          <HamburgerIcon isActive={isActive} scrolled={scrolled} onClick={() => {}} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 w-full max-w-sm h-screen bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[998] overflow-y-auto",
          isActive ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <Logo />
            <button
              onClick={() => setIsActive(false)}
              className="p-2 text-[#111] hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-6">
            <ul className="flex flex-col gap-6">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={route.path}
                    onClick={() => setIsActive(false)}
                    className={cn(
                      "font-medium text-base py-2 block transition-colors duration-200",
                      pathname === route.path
                        ? "text-primary font-semibold border-l-4 border-primary pl-4"
                        : "text-[#111] hover:text-primary hover:pl-4 transition-all"
                    )}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t">
            <p className="text-sm text-neutral-600 mb-4">
              Join us in making a difference
            </p>
            <Donate />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isActive && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[997]"
          onClick={() => setIsActive(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
