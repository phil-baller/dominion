import Authform from "@/components/authform";
import { initialProfile } from "@/lib/admin-profile";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const profile = await initialProfile();

  if (profile) return redirect("/admin");

  console.log(profile);

  return (
    <main className="h-full">
      <Authform />
    </main>
  );
};

export default Login;
