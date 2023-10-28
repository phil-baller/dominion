"use client";

import React, { useState } from "react";

const Authform = () => {
  type authVariant = "LOGIN" | "REGISTER";

  const [authState, setAuthState] = useState<authVariant>("LOGIN");

  return (
    <section className="w-full  h-full">
      <form action="" className="w-full flex flex-col gap-10 items-center">
        <p className="text-4xl font-medium">
          {authState === "LOGIN" ? "Login" : "Register"}
        </p>
        <section className="flex flex-col  gap-2 w-full">
          <p>Username</p>
          <input
            type="text"
            className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
            placeholder="Search"
          />
        </section>
        <section className="flex flex-col  gap-2 w-full">
          <p>password</p>
          <input
            type="text"
            className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
            placeholder="Password"
          />
        </section>
        <section>
          <button className="bg-primary py-3 px-10 w-fit">Login</button>
        </section>
      </form>
    </section>
  );
};

export default Authform;
