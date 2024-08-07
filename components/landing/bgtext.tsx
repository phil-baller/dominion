import React from "react";

const BgText = () => {
  return (
    <section className="padding bgtext h-[458px] flex items-center flex-col gap-4 justify-center">
      <p className="text-lg text-center font-normal">
        <span className="font-bold text-5xl text-white">How you can help</span>
        Many of our projects depend on individual donations and the <br /> impact of our work is determined
        by the resources we receive
      </p>

      <button className="bg-primary py-3 px-10 w-fit text-neutral-800 text-bold">Donate Now</button>
    </section>
  );
};

export default BgText;
