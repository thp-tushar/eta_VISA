import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; 

    if (!id) {
      return NextResponse.json(
        { message: "Application ID is required" },
        { status: 400 }
      );
    }

    const application = await prisma.eTAApplication.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json(
        { message: "ETA Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("GET application error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
