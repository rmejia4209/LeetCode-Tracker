import { ProblemType, DatabaseProblemType } from "./types";

/**
 * Converts a list of problems from the database to a list of ProblemType
 */
export function DatabaseProblemToProblem(problems: DatabaseProblemType[]) {

  const convertedData: ProblemType[] = problems.map((problem) => (
    { 
      id: problem.id,
      title: problem.title,
      link: problem.link,
      difficulty: problem.difficulty,
      topic: problem.topics.topic,
      bestTime: -1,  //TODO - fix
      goalTime: problem.goal_time,
      isPremium: problem.is_premium
    }
  ))
  return convertedData;
}