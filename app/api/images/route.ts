import { getCashedPictures } from "@/constants";
import { imageType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const pictures = await getCashedPictures();

    const content = pictures as imageType[];

    return NextResponse.json(content);
  } catch (error) {
    console.log("something went wrong");
  }
}
