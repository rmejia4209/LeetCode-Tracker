import { NextRequest, NextResponse } from "next/server";
import { getProblems } from "@/app/_services/problems";
import { DatabaseProblemToProblem } from "@/app/_types/typeConversions";

export async function GET(request: NextRequest) {
  try {
    const problems = await getProblems();
    return NextResponse.json(
      DatabaseProblemToProblem(problems), {status: 200}
    );
  } catch (err) {
    return NextResponse.json(err, {status: 500});
  }
}
