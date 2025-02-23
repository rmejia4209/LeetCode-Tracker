import { NextRequest, NextResponse } from "next/server";
import { postAttempt } from "@/app/_services/problems";

type RequestBodyType = {
    problemId: number;
    attemptTime: number;
}

export async function POST(req: NextRequest) {


  try {
    const body: RequestBodyType = await req.json();
    
    if (!body.attemptTime || !body.problemId) {
      return NextResponse.json(
        {error: 'Problem ID and/or time missing'}, {status: 400}
      );
    }
    await postAttempt(body.problemId, body.attemptTime);
    return new NextResponse(null, {status:204});
  } catch (err) {
      return NextResponse.json(err, {status: 500})
  }
}