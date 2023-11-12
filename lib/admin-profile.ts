import { auth, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async () => {
  try {
    const { userId, user } = await auth();

    if (!userId) return redirectToSignIn()

    const profile = await db.user.findUnique({
      where: {
        userId: userId,
      },
    });

    // console.log();


    if (profile) return profile;

    if (!user) return redirectToSignIn()

    const newProfile = await db.user.create({
      data: {
        userId: user.id,
        username: user.username,
        email: user.emailAddresses[0].emailAddress
      },
    });

    console.log(newProfile);

    return newProfile;
  } catch (error) {
    console.log(error);
  }
};
