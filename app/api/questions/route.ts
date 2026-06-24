import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/* GET */
export async function GET() {
  const questions = await prisma.question.findMany({
    include: { answers: true },
    orderBy: { id: "desc" },
  });

  return NextResponse.json(questions);
}

/* POST (FIX IS HERE) */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newQuestion = await prisma.question.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return NextResponse.json(newQuestion);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create question" },
      { status: 500 }
    );
  }
}