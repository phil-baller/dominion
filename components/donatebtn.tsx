import React from "react";
import Link from "next/link";

const Donate = () => {
  return (
    <Link
      href="https://flutterwave.com/donate/sgesl7p9jm54"
      className="bg-primary py-2.5 px-6 text-white font-semibold text-sm capitalize rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
    >
      Donate Now
    </Link>
  );
};

export default Donate;
