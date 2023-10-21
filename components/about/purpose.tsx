import Image from "next/image";
import React from "react";

const Purpose = () => {
  return (
    <section className="text-[#111] bg-white flex flex-col p-20 gap-20 ">
      <section className="max-w-7xl mx-auto w-full flex gap-20">
        <section className="flex flex-col gap-4 flex-1">
          <p className="text-5xl">Our Purpose</p>
          <p className="flex flex-col gap-5">
            To reach out to the less privileged, the needy, orphans, widows,
            widowers, the sick, the mentally challenged aU lives through the
            Gospel of Jesus Christ. We work in partnership with local Christian
            ministries who are working in their communities to motivate generous
            people of USA and the world to give prayer and financial support
            that strategically advances the gospel of Christ that brings
            transformation and change.
            <span className="text-primary">James 1:27</span>
          </p>
        </section>
        <section className="flex flex-col gap-4 flex-1 relative">
          <Image
            src="/icons/part.png"
            alt="dominion partners"
            width={605}
            height={340}
            className="z-10"
          />
          <section className="absolute w-full h-full z-0 bg-primary -left-10 -bottom-10" />
        </section>
      </section>
      <section className="max-w-7xl mx-auto w-full flex gap-20">
        <section className="flex flex-col gap-4">
          <p className="text-5xl">Our Purpose</p>
          <p>
            Walking in Dominion international charity organization, united with
            the world to overcome physical and spiritual poverty, moral and
            mental instability
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-5xl">Our Mission</p>
          <p>
            We empower and equip the world to transform the poor and their
            communities physically, mentally, morally, and spiritually
          </p>
        </section>
      </section>
    </section>
  );
};

export default Purpose;
