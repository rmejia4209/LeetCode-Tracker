import { problems, difficulty_val } from "@prisma/client";

export type ProblemType = {
    id: number;
    title: string;
    link: string;
    difficulty: string;
    topic: string;
    goalTime: number;
    bestTime: number;
  }


// -- categories
export const difficulties: difficulty_val[] = Object.values(difficulty_val);


//---db types
export type DatabaseProblemType = { topics: { topic: string } } & problems
