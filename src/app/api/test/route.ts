import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const result = await prisma.$queryRaw`SELECT 1`;
  return NextResponse.json({ ok: true, result });
}
