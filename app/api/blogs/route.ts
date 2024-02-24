import { getCashedBlogs } from "@/constants";
import { blogType } from "@/types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const blogs = await getCashedBlogs();
    revalidatePath("/");

    const content = blogs as blogType[];

    return NextResponse.json(content);
  } catch (error) {
    console.log("something went wrong");
  }
}
