import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateETAApplicationSchema } from "@/lib/validators/application";
import { ZodError } from "zod";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, ...rest } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Application ID is required" },
        { status: 400 }
      );
    }

    const data = updateETAApplicationSchema.parse(rest);

    const updated = await prisma.eTAApplication.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
