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