import { getCashedSingleBlog } from "@/constants";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    console.log(params.blogId);

    const data = await getCashedSingleBlog(params.blogId);

    if (data) return NextResponse.json(data);
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json("internal server error", { status: 500 });
  }
}
