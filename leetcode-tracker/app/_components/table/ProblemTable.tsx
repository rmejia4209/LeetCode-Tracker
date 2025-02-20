import { useState, useEffect } from "react";
import * as motion from "motion/react-client"
import { ProblemType } from "@/app/_types/commonTypes";
import ProblemDetails from "./ProblemRow";
import SortableTableHeader from "./SortableTableHeader";

type TablePropType = {
  problems: ProblemType[];
}

function ProblemTable({ problems }: TablePropType) {
  
  const [sortedProblems, setSortedProblems] = (
    useState<ProblemType[]>([...problems])
  );
  const [sortProp, setSortProp] = useState<keyof ProblemType>('id');
  const [sortArray, setSortArray] = useState<string[]>([]);

  const topics = ['Array', 'Tree', 'Linked List', 'Backtracking', 'Math', 'Dynamic Programming', 'String']
  const difficulties = ['Easy', 'Medium', 'Hard']
  
  const sortByProp = () => {
    return (a: ProblemType, b: ProblemType) => {
      if (sortArray.length) {
        const orderDiff = (
          sortArray.indexOf(a[sortProp] as string)
          - sortArray.indexOf(b[sortProp] as string)
        )
        return orderDiff !== 0 ? orderDiff : a.id - b.id
      }
      return (a[sortProp] as number) - (b[sortProp] as number)
    }
  }

  useEffect(() => {
    setSortedProblems([...problems].sort(sortByProp()))
  }, [sortProp, sortArray])

  return (
    <div className="my-2">
      <table className="table table-xs table-pin-rows">
        <thead>
          <tr>
            <th>
              Problem
            </th>
            <SortableTableHeader<ProblemType>
              defaultProp='id'
              propName="difficulty"
              sortProp={sortProp}
              setSortProp={setSortProp}
              sortArray={difficulties}
              setSortArray={setSortArray}
            />
            <SortableTableHeader<ProblemType>
              defaultProp='id'
              propName="topic"
              sortProp={sortProp}
              setSortProp={setSortProp}
              sortArray={topics}
              setSortArray={setSortArray}
            />
          </tr>
        </thead>
        <tbody>
          {sortedProblems.map(
            (problem) => (
              <motion.tr
                className=""
                key={problem.title}
                layout
                transition={
                  { type: "tween", duration: 0.3, ease: "easeInOut" }
                }
              >
                <ProblemDetails problem={problem}/>
              </motion.tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
  
}

export default ProblemTable;