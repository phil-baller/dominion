"use client";

import React, { useState, ChangeEvent, useCallback, FormEvent } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type authVariant = "LOGIN" | "REGISTER";
type UserData = {
  email: string;
  password: string;
  username?: string;
};

const Authform = () => {
  const [authState, setAuthState] = useState<authVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleVariant = useCallback(() => {
    if (authState === "LOGIN") {
      setAuthState("REGISTER");
    } else {
      setAuthState("LOGIN");
    }
  }, [authState]);

  const { username, email, password } = userData;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (authState === "LOGIN") {
      await axios.post("/");
    }

    if (authState === "LOGIN") {
      signIn("credentials", {
        ...userData,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok) {
            router.push("/blog");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <section className="w-full  h-full">
      <form
        action=""
        className="w-full flex flex-col gap-10 items-center"
        onSubmit={handleSubmit}
      >
        <p className="text-4xl font-medium">
          {authState === "LOGIN" ? "Login" : "Register"}
        </p>

        {authState === "REGISTER" && (
          <section className="flex flex-col  gap-2 w-full">
            <p>Username</p>
            <input
              type="text"
              className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
              placeholder="Password"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </section>
        )}

        <section className="flex flex-col  gap-2 w-full">
          <p>Email</p>
          <input
            type="text"
            className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
            placeholder="username"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </section>
        <section className="flex flex-col  gap-2 w-full">
          <p>password</p>
          <input
            type="password"
            className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </section>
        <div onClick={toggleVariant} className="underline cursor-pointer">
          {authState === "LOGIN" ? "Create an account" : "Login"}
        </div>
        <section>
          <button className="bg-primary py-3 px-10 w-fit">
            {authState === "LOGIN" ? "Login" : "Register"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default Authform;
