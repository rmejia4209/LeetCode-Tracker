import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProblemType, difficulties} from "@/app/_types/types";
import ProblemDetails from "./ProblemRow";
import SortableTableHeaders from "./base/SortableTableHeaders";
import { sortByProp } from "@/app/_utils/utils";


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
  const headers: {propName: keyof ProblemType; sortArray: string[]}[] = [
    {propName: 'difficulty', sortArray: difficulties},
    {propName: 'topic', sortArray: [...new Set(problems.map((p)=>(p.topic)))]},
    {propName: 'goalTime', sortArray: []},
    {propName: 'bestTime', sortArray: []}
  ]
  
  useEffect(() => {
    if (!displayCompleted) {
      setSortedProblems(
        [...problems].filter((problem) => problem.goalTime < problem.bestTime)
      );
    } else {
      setSortedProblems([...problems]);
    }
    setSortedProblems(prev =>[...prev].sort(
      sortByProp(sortArray, sortProp, 'id')
    ));
  }, [sortProp, sortArray, displayCompleted])

  return (
    <div className="my-2">
      <table className="table table-xs table-pin-rows table-fixed w-full">
        <thead>
          <tr>
            <th className="w-2/5">
              Problem
            </th>
            <SortableTableHeaders<ProblemType>
              defaultProp='id'
              headers={headers}
              sortProp={sortProp}
              setSortProp={setSortProp}
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