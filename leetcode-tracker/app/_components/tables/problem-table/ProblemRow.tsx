import { ProblemType } from "@/app/_types/types";
import { capitalize } from "@/app/_utils/utils";
import LockIcon from "@/app/_components/icons/Lock"


type TableRowPropType = {
  problem: ProblemType
}


function ProblemDetails({ problem }: TableRowPropType) {

  const getColor = () => {
    switch (problem.difficulty.toLowerCase()) {
      case 'hard':
        return 'badge-error';
      case 'medium':
        return 'badge-warning';
      case 'easy':
        return 'badge-success';
      default:
        throw new Error('Invalid difficulty')
    }
  }

  return (
    <>
      <td>
        <div className="flex flex-row">
          <a
          className="text-md text-primary font-bold hover:underline"
          href={problem.link}
          >
            {problem.title}
          </a>
          {problem.isPremium && <LockIcon/>}
        </div>
      </td>
      <td>
        <span className={`badge badge-sm ${getColor()}`}>  
          {capitalize(problem.difficulty)}
        </span>
      </td>
      <td>
        <span className="badge badge-sm badge-ghost">
          {problem.topic}
        </span>
      </td>
      <td>
        {`${problem.goalTime / 60} min`}
      </td>
      <td>
        {problem.bestTime > 0 ? `${problem.bestTime} min` : `-`}
      </td>
    </>
  )
}

export default ProblemDetails;