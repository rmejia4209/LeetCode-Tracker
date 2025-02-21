'use client'
import { useState } from "react";
import { ProblemType } from "@/app/_types/commonTypes";
import ProblemTable from "../_components/tables/ProblemTable";
import Toggle from "../_components/buttons/Toggle";

function Page() {

  const [displayCompleted, setDisplayCompleted] = useState(true);

  // TODO: API Calls
  const problems: ProblemType[] = [
    { id: 1, title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy', topic: 'Array', goalTime: 15, bestTime: 12 },
    { id: 2, title: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'Medium', topic: 'Linked List', goalTime: 30, bestTime: Infinity },
    { id: 3, title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium', topic: 'String', goalTime: 30, bestTime: 28 },
    { id: 4, title: 'Median of Two Sorted Arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'Hard', topic: 'Array', goalTime: 45, bestTime: 50 },
    { id: 5, title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'Medium', topic: 'String', goalTime: 30, bestTime: 29 },
    { id: 6, title: 'Zigzag Conversion', link: 'https://leetcode.com/problems/zigzag-conversion/', difficulty: 'Medium', topic: 'String', goalTime: 20, bestTime: Infinity },
    { id: 7, title: 'Reverse Integer', link: 'https://leetcode.com/problems/reverse-integer/', difficulty: 'Easy', topic: 'Math', goalTime: 15, bestTime: 14 },
    { id: 8, title: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/', difficulty: 'Medium', topic: 'String', goalTime: 30, bestTime: 32 },
    { id: 9, title: 'Palindrome Number', link: 'https://leetcode.com/problems/palindrome-number/', difficulty: 'Easy', topic: 'Math', goalTime: 15, bestTime: Infinity },
    { id: 10, title: 'Regular Expression Matching', link: 'https://leetcode.com/problems/regular-expression-matching/', difficulty: 'Hard', topic: 'Dynamic Programming', goalTime: 45, bestTime: 43 },
    { id: 11, title: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium', topic: 'Array', goalTime: 30, bestTime: Infinity },
    { id: 12, title: 'Integer to Roman', link: 'https://leetcode.com/problems/integer-to-roman/', difficulty: 'Medium', topic: 'Math', goalTime: 20, bestTime: 19 },
    { id: 13, title: 'Roman to Integer', link: 'https://leetcode.com/problems/roman-to-integer/', difficulty: 'Easy', topic: 'Math', goalTime: 15, bestTime: 16 },
    { id: 14, title: 'Three Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium', topic: 'Array', goalTime: 30, bestTime: 35 },
    { id: 15, title: 'Letter Combinations of a Phone Number', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', difficulty: 'Medium', topic: 'Backtracking', goalTime: 30, bestTime: 29 },
    { id: 16, title: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/', difficulty: 'Medium', topic: 'Backtracking', goalTime: 30, bestTime: 32 },
    { id: 17, title: 'Swap Nodes in Pairs', link: 'https://leetcode.com/problems/swap-nodes-in-pairs/', difficulty: 'Medium', topic: 'Linked List', goalTime: 20, bestTime: Infinity },
    { id: 18, title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy', topic: 'Linked List', goalTime: 20, bestTime: 19 },
    { id: 19, title: 'Same Tree', link: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy', topic: 'Tree', goalTime: 15, bestTime: 14 },
    { id: 20, title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Easy', topic: 'Array', goalTime: 20, bestTime: 21 }
  ];

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

export default Page;

