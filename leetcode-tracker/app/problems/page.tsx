import { ProblemType } from "@/app/_types/types";
import ProblemTableWithActions from "../_components/tables/problem-table/ProblemTableWithActions";

async function Page() {


  const res = await fetch("http://localhost:3000/api/problems", { method: "GET" });
  const problems: ProblemType[] = await res.json();
  

  return (
    <ProblemTableWithActions problems={problems}/>
  );
}

export default Page;

