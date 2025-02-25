"use client"
import { useState, useEffect, useActionState } from "react";
import TimeInput from "../inputs/TimeInput";
import AttemptRating from "../inputs/AttemptRating";
import ErrorAlert from "../feedback/CompactErrorAlert";
import { postAttempt } from "@/app/_actions/actions";

function ProblemAttemptForm({ problemId }: { problemId: number}) {
  const [error, formAction, isPending] = useActionState(postAttempt, null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) setShowError(true)
  }, [error])

  return (

    <form
      action={formAction}
      className="flex flex-col gap-2"
    >
      <input type="hidden" name="problemId" value={problemId}/>
      <TimeInput
        problemId={problemId}
        inErrorState={showError}
        resetErrorState={() => {if (showError) setShowError(false);}}
      />
      <AttemptRating/>
      <button disabled={isPending} className="btn btn-sm btn-outline btn-primary">
        {
          isPending 
          ? <span className="loading loading-dots loading-sm"></span> 
          : "submit"
        }
      </button>
      <ErrorAlert isVisible={showError} msg={error?.message}/>
    </form>
  )
}

export default ProblemAttemptForm;