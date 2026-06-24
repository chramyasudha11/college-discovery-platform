import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function seedIfEmpty() {
  const count = await prisma.college.count();

  if (count === 0) {
    await prisma.college.createMany({
      data: [
        {
          name: "IIT Delhi",
          location: "Delhi",
          fees: 220000,
          rating: 4.9,
          overview: "Top engineering institute in India",
          courses: ["CSE", "ECE", "ME"],
          placements: "Avg 20+ LPA",
        },
        {
          name: "IIT Bombay",
          location: "Mumbai",
          fees: 230000,
          rating: 4.8,
          overview: "Premier IIT with strong tech culture",
          courses: ["CSE", "EE", "Civil"],
          placements: "Top global companies",
        },
        {
          name: "NIT Trichy",
          location: "Tamil Nadu",
          fees: 150000,
          rating: 4.6,
          overview: "Top NIT in India",
          courses: ["CSE", "ECE"],
          placements: "Good placements",
        },
      ],
    });
  }
}

export async function GET() {
  await seedIfEmpty();

  const colleges = await prisma.college.findMany({
    orderBy: { rating: "desc" },
  });

  return NextResponse.json(colleges);
}