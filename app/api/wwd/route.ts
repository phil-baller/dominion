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
        //


        const { imageLink, userId: id, } = body;

        // console.log(body);

        if (!imageLink || !id) {
            return new NextResponse("These fields are requuired", {
                status: 401,
            });
        }

        if (userId !== "user_2XSx0MpWyWpy5sWzwZqk9zxU9Fk")
            return new NextResponse("You don't have access in creating a post!", {
                status: 400,
            });

        const post = await db.whatWedo.create({
            data: {
                imageUrl: imageLink,
                userId: userId,
            },
        });

        //
        return NextResponse.json({
            msg: "Created succesfully",
            post,
        });

        //
    } catch (error: any) {
        console.log("ERROR WHILE CREATING POST", error.message);
        return new NextResponse("Internal server error", {
            status: 500,
        });
    }
}



export async function GET(req: Request) {
    try {
        const wwds = await db.whatWedo.findMany();
        return NextResponse.json(wwds);
    } catch (error: any) {
        console.log("ERROR WHILE GETTING POST", error.message);
        return new NextResponse("Internal server error", {
            status: 500,
        });
    }
}
