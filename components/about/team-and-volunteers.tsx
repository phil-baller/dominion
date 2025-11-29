import React from "react";
import Header from "../header";

const TeamAndVolunteers = () => {
  return (
    <section className="text-[#111] bg-white py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <Header content="Our Team and Volunteers" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            Meet the dedicated individuals who make our mission possible through their commitment, passion, and unwavering support.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative w-full h-80 overflow-hidden bg-neutral-200">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                  <span className="text-neutral-500 text-4xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#111] mb-1 group-hover:text-primary transition-colors duration-200">
                  Team Member Name
                </h3>
                <p className="text-primary font-medium text-sm">
                  Position or Role
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAndVolunteers;
