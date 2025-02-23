import { ProblemType } from "@/app/_types/types";
import { capitalize } from "@/app/_utils/utils";

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
        <a
          className="text-md text-primary font-bold hover:underline"
          href={problem.link}
        >
          {problem.title}
        </a>
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
    </>
  )
}

export default ProblemDetails;