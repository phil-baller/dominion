import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  const profile = await db.user.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) return profile;

  const newProfile = await db.user.create({
    data: {
      userId: "sk_test_XG5tVr0LwHa3GOGZ1rK9K9YeW3UzKWNdIY2wdcYgAV",
      username: `dominion is walking`,
      email: "walkingindominion@gmail.com",
    },
  });

  return newProfile;
};
