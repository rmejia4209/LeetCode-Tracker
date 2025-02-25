"use server"
import { revalidatePath } from "next/cache";
import { FormErrorType } from "../_types/types";
import { postAttempt as postAttemptQuery } from "../_services/problems";



export async function postAttempt(
  prev: FormErrorType | null, formData: FormData
) {

  const problemId = Number(formData.get("problemId"));
  const hours = Number(formData.get("hours")) || 0;
  const minutes = Number(formData.get("minutes")) || 0;
  const seconds = Number(formData.get("seconds")) || 0;
  const rating = Number(formData.get("rating")) || 3;

  try {
    const attemptTime = (hours * 3600) + (minutes * 60) + seconds;
    if (!attemptTime) {
      throw new Error("Attempt time cannot be 0:00:00")
    }
    postAttemptQuery(problemId, attemptTime, rating)
    return null;
  } catch (err: any) {
    return {
      message: err.message,
    }
  }   
}   
