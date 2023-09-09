import { handlePollAnswer } from "@/telegram/handlePollAnswer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log('REQUEST', request)
  await handlePollAnswer()
  return NextResponse.json({ ok: true })
}
