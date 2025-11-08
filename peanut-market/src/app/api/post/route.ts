import { NextRequest, NextResponse } from "next/server";
import { createFetchAPI } from "@/app/api/index";

export async function POST(req: NextRequest) {
  const {title, content, status} = await req.json();
  const data = await createFetchAPI('posts', {
    title: title,
    content: content,
    status: status
  });
  return NextResponse.json(data);
}