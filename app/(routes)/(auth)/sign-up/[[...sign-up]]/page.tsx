import Authform from "@/components/authform";
import { initialProfile } from "@/lib/admin-profile";
import { redirect } from "next/navigation";
import React from "react";

const signUp = async () => {
  const profile = await initialProfile();

  if (profile) return redirect("/admin");

  return (
    <main className="h-full">
      <Authform />
    </main>
  );
};

export default signUp;
