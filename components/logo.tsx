import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <section>
      <Image
        src="/logodominion.svg"
        width={300}
        height={100}
        alt="walking dominion logo"
      />
    </section>
  );
};

export default Logo;
