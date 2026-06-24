import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const rank = Number(searchParams.get("rank"));

  let colleges;

  if (rank < 5000) {
    colleges = await prisma.college.findMany({
      orderBy: { rating: "desc" },
      take: 5,
    });
  } else if (rank < 20000) {
    colleges = await prisma.college.findMany({
      orderBy: { rating: "desc" },
      skip: 2,
      take: 5,
    });
  } else {
    colleges = await prisma.college.findMany({
      orderBy: { rating: "desc" },
      skip: 5,
      take: 5,
    });
  }

  return NextResponse.json(colleges);
}