import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logodominion.svg"
        width={300}
        height={100}
        alt="walking dominion logo"
      />
    </Link>
  );
};

export default Logo;
