import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Params {
  postId: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { postId } = params;

    if (!postId)
      return new NextResponse("postID is not provided", {
        status: 400,
      });

    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post)
      return new NextResponse("Post not found", {
        status: 404,
      });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log("ERROR WHILE CREATING POST", error.message);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
