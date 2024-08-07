import React from "react";
import Link from "next/link";

const BgText = () => {
  return (
    <section className="padding bgtext h-[458px] flex items-center flex-col gap-4 justify-center">
      <div className="font-bold text-5xl text-white">How you can help</div>
      <p className="text-lg text-center font-normal">
        Many of our projects depend on individual donations and the <br /> impact of our work is determined
        by the resources we receive
      </p>

      <Link href="https://flutterwave.com/donate/sgesl7p9jm54" className="bg-primary py-3 px-10 w-fit text-neutral-800 text-bold hover:bg-orange-400 hover:text-white">Donate Now</Link>
    </section>
  );
};

export default BgText;
