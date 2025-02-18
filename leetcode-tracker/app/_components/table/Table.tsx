import { ProblemType } from "@/app/_types/commonTypes";
import ProblemTableRow from "./TableRow";


type TablePropType = {
  problems: ProblemType[];
}

function ProblemTable({ problems }: TablePropType) {
  return (
    <table className="table">
    <tbody>
      {problems.map(
        (problem, idx) => (<ProblemTableRow key={idx} problem={problem}/>)
      )}
    </tbody>
  </table>

  )
  
}

export default ProblemTable;