import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProblemType } from "@/app/_types/commonTypes";
import ProblemDetails from "./ProblemRow";
import SortableTableHeader from "./SortableTableHeader";

type TablePropType = {
  problems: ProblemType[];
  displayCompleted: boolean;
}

function ProblemTable({ problems, displayCompleted }: TablePropType) {
  
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
    if (!displayCompleted) {
      setSortedProblems(
        [...problems].filter((problem) => problem.goalTime < problem.bestTime)
      );
    } else {
      setSortedProblems([...problems]);
    }
    setSortedProblems(prev =>[...prev].sort(sortByProp()))
  }, [sortProp, sortArray, displayCompleted])

  return (
    <div className="my-2">
      <table className="table table-xs table-pin-rows table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/2">
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
          <AnimatePresence>
            {sortedProblems.map(
              (problem) => (
                <motion.tr
                  className=""
                  key={problem.title}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{    
                    type: "tween", duration: 0.2, ease: "easeInOut"
                  }}
                >
                  <ProblemDetails problem={problem}/>
                </motion.tr>
              )
            )}
          </AnimatePresence>
          
        </tbody>
      </table>
    </div>
  )
  
}

export default ProblemTable;