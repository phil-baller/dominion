"use client";

import React, { useState, ChangeEvent, useCallback, FormEvent } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useSignUp } from "@clerk/nextjs";

type authVariant = "LOGIN" | "REGISTER";
type UserData = {
  email: string;
  password: string;
  username?: string;
  code?: string;
};

const Authform = () => {
  const [authState, setAuthState] = useState<authVariant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();

  const [pendingVerification, setPendingVerification] = useState(false);

  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    code: "",
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

  const { username, email, password, code } = userData;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    setIsLoading(true);

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckVerificationCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      if (code) {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });

        if (completeSignUp.status !== "complete") {
          /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
          console.log(JSON.stringify(completeSignUp, null, 2));
        }
        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId });
          router.push("/adfhadfadjhlfadhfad");
        }
      } else {
        return;
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <section className="w-full  h-full">
      {!pendingVerification && (
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
                disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
            <button
              className="bg-primary py-3 px-10 w-fit disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
            >
              {authState === "LOGIN" ? "Login" : "Register"}
            </button>
          </section>
        </form>
      )}{" "}
      {pendingVerification && (
        <form
          action=""
          className="w-full flex flex-col gap-10 items-center"
          onSubmit={handleCheckVerificationCode}
        >
          <section className="flex flex-col  gap-2 w-full">
            <p>Verification code</p>
            <input
              disabled={isLoading}
              type="text"
              className="flex outline-none flex-1 p-2 border bg-white text-[#111]"
              placeholder="Verifcation code"
              name="code"
              onChange={handleChange}
              value={code}
            />
          </section>

          <section>
            <button
              className="bg-primary py-3 px-10 w-fit disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
            >
              Verify
            </button>
          </section>
        </form>
      )}
    </section>
  );
};

export default Authform;
