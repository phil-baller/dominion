import React from "react";
import Link from "next/link";

const BgText = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 xl:px-20 bgtext flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
          How you can help
        </h2>
        <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto">
          Many of our projects depend on individual donations and the impact of our work is determined by the resources we receive. Every contribution makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://flutterwave.com/donate/sgesl7p9jm54"
            className="bg-primary text-white py-4 px-8 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white py-4 px-8 text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BgText;
