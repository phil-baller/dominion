import { getCashedPictures } from "@/constants";
import { imageType } from "@/types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const pictures = await getCashedPictures();
    revalidatePath("/");

    const content = pictures as imageType[];

    return NextResponse.json(content);
  } catch (error: any) {    
    console.log(error.message);

    return NextResponse.json("internal server error", { status: 500 });
  }
}
