'use client'
import { useState } from "react";
import { ProblemType } from "@/app/_types/types";
import ProblemTable from "./ProblemTable";
import Toggle from "../../buttons/Toggle";

function ProblemTableWithActions( {problems} : {problems: ProblemType[]} ) {

  const [displayCompleted, setDisplayCompleted] = useState(true);

  return (
    <div className="flex-grow">
    <div className="flex flex-row">
      <Toggle
        text='Show Completed'
        isChecked={displayCompleted}
        toggleAction={()=>{setDisplayCompleted(!displayCompleted)}}/>
    </div>
    <div className="w">
      <ProblemTable problems={problems} displayCompleted={displayCompleted}/>
    </div>
  </div>
  );
}

export default ProblemTableWithActions;

