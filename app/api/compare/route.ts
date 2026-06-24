import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get("ids");

  if (!ids) {
    return NextResponse.json(
      { error: "No IDs provided" },
      { status: 400 }
    );
  }

  const colleges = await prisma.college.findMany({
    where: {
      id: {
        in: ids.split(","),
      },
    },
  });

  return NextResponse.json(colleges);
}