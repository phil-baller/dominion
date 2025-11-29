import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logodominion.svg"
        width={300}
        height={100}
        alt="walking dominion logo"
        className="h-12 lg:h-16 w-auto object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
