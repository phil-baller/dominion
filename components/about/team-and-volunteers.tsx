import React from "react";
import Header from "../header";

const TeamAndVolunteers = () => {
  return (
    <section className="text-[#111] bg-white flex flex-col p-20 gap-20 ">
      <Header content="Our Team and Volunteers" />
      <section className="max-w-7xl mx-auto w-full grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <section key={index}>
            <section className="clip w-[300px] h-[400px] bg-slate-500" />

            <section>
              <p className="text-primary">Name</p>
              <p>Position or Role</p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default TeamAndVolunteers;
