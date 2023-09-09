import { handlePollAnswer } from "@/telegram/handlePollAnswer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log('GET REQUEST', request)
  await handlePollAnswer()
  return NextResponse.json({ ok: true })
}

export async function POST(request: Request) {
  console.log('POST REQUEST', request)
  await handlePollAnswer()
  return NextResponse.json({ ok: true })
}
