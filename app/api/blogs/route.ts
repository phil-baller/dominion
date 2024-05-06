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
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json("internal server error", { status: 500 });
  }
}
