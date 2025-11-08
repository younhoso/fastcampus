import { NextResponse } from "next/server";
import { getFetchAPI } from "@/app/api/index";

export async function GET() {
  const data = await getFetchAPI('categories');
  return NextResponse.json(data);
}