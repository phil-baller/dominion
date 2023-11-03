import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId }: { userId: string | null } = auth();

    if (!userId)
      return new NextResponse("Unauthorized!", {
        status: 400,
      });

    const user = await db.user.findUnique({
      where: {
        userId: "sk_test_XG5tVr0LwHa3GOGZ1rK9K9YeW3UzKWNdIY2wdcYgAV",
      },
    });

    if (!user)
      return new NextResponse("You don't have access in creating a post!", {
        status: 400,
      });

    const { imageUrl, desc, userId: id } = body;

    if (!imageUrl || !desc || !userId) {
      return new NextResponse("These fields are requuired", {
        status: 401,
      });
    }

    if (user.userId !== id)
      return new NextResponse("You don't have access in creating a post!", {
        status: 400,
      });

    const post = await db.post.create({
      data: {
        desc,
        imageUrl,
        userId: user.userId,
      },
    });
    return NextResponse.json({
      msg: "Created succesfully",
      post,
    });
  } catch (error: any) {
    console.log("ERROR WHILE CREATING POST", error.message);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
