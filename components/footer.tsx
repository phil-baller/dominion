"use client";

import React from "react";
import Logo from "./logo";
import { navbarRoutes, socialsIcons } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const routes = navbarRoutes();
  const pathname = usePathname();
  const socials = socialsIcons();
  return (
    <footer className="bg-[#111] flex flex-col p-20 gap-20">
      <section className="w-2/4 flex gap-20">
        <section className="flex flex-1 flex-col gap-[26px]">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit amet dignissim fringilla
            tortor id mattis enim egestas. Fames congue mi urna non senectus et.
            In et tincidunt nibh sapien dui. Sem consequat sagittis.
          </p>
        </section>
        <section className="flex flex-1 flex-col gap-10">
          <p className="text-2xl relative before:h-full before:w-[3px] before:bg-primary before:absolute before:left-[-10px]">
            Quick links
          </p>
          <ul className="flex flex-col gap-2 ml-5">
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
        </section>
      </section>
      <section className="flex items-center justify-between">
        <p className="">
          Copyright 2023 Walking In Dominion. All Rights Reserved
        </p>
        <section className="flex items-center gap-6">
          {socials.map((social) => (
            <Link href={social.path}>
              <Image
                src={social.icon}
                width={24}
                height={24}
                alt={social.name}
              />
            </Link>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
