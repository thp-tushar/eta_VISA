import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createETAApplicationSchema } from "@/lib/validators/application";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input
    const data = createETAApplicationSchema.parse(body);

    const application = await prisma.eTAApplication.create({
      data,
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error: unknown) {

    // 👇 ADD THIS LINE HERE (FIRST LINE INSIDE CATCH)
    console.error("PRISMA ERROR 👉", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
