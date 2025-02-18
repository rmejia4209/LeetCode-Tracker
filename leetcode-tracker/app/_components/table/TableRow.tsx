import { ProblemType } from "@/app/_types/commonTypes";

type TableRowPropType = {
  problem: ProblemType
}


function ProblemTableRow({ problem }: TableRowPropType) {

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
    <tr className="hover">
      <td>
        <div>
          <a
            className="text-md text-primary font-bold hover:underline"
            href={problem.link}
          >
            {problem.title}
          </a>
          <div className="">
            <span className={`badge badge-sm ${getColor()} mr-2`}>
              {problem.difficulty}
            </span>
            <span className="badge badge-sm badge-ghost">
              {problem.topic}
            </span>
          </div>
        </div>
      </td>      
    </tr>
  )
}

export default ProblemTableRow;