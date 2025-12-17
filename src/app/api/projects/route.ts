import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/lib/models/Project";

export async function GET(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  const data = await Project.find()
    .skip((page - 1) * 6)
    .limit(6);

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const created = await Project.create(body);
  return NextResponse.json(created);
}
