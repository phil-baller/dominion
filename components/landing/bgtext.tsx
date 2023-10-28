import React from "react";

const BgText = () => {
  return (
    <section className="padding bgtext h-[458px] flex items-center flex-col gap-4 justify-center">
      <p className="text-5xl text-center font-semibold">
        We can’t help everyone, but everyone can help <br /> someone
      </p>

      <button className="bg-primary py-3 px-10 w-fit">Donate Now</button>
    </section>
  );
};

export default BgText;
