import { getCashedBlogs } from "@/constants";
import { blogType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const blogs = await getCashedBlogs();

    const content = blogs as blogType[];

    return NextResponse.json(content);
  } catch (error) {
    console.log("something went wrong");
  }
}
