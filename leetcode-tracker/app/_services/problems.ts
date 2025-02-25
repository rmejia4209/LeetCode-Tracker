import { prisma } from "@/app/_lib/prismaClient";

export async function getProblems() {
    try {
      const problems = await prisma.problems.findMany({
        include: {
          topics: { select: { topic: true }}
        }
      });
      return problems;
    } catch (err) {
      throw err;
    }
    
}


export async function postAttempt(
  problemId: number, attemptTime: number, rating: number
) {
  try {
    await prisma.user_attempts.create({
      data: {
        problem_id: problemId,
        attempt_time: attemptTime,
        rating: rating
      }
    });
  } catch (err) {
    throw err;
  }
}