


import { ProblemType } from "../_types/commonTypes";
import ProblemTable from "@/app/_components/table/Table";


export default function Home() {

  const problems: ProblemType[] = [
    { title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy', topic: 'Array' },
    { title: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'Medium', topic: 'Linked List' },
    { title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium', topic: 'String' },
    { title: 'Median of Two Sorted Arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'Hard', topic: 'Array' },
    { title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'Medium', topic: 'String' },
    { title: 'Zigzag Conversion', link: 'https://leetcode.com/problems/zigzag-conversion/', difficulty: 'Medium', topic: 'String' },
    { title: 'Reverse Integer', link: 'https://leetcode.com/problems/reverse-integer/', difficulty: 'Easy', topic: 'Math' },
    { title: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/', difficulty: 'Medium', topic: 'String' },
    { title: 'Palindrome Number', link: 'https://leetcode.com/problems/palindrome-number/', difficulty: 'Easy', topic: 'Math' },
    { title: 'Regular Expression Matching', link: 'https://leetcode.com/problems/regular-expression-matching/', difficulty: 'Hard', topic: 'Dynamic Programming' },
    { title: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium', topic: 'Array' },
    { title: 'Integer to Roman', link: 'https://leetcode.com/problems/integer-to-roman/', difficulty: 'Medium', topic: 'Math' },
    { title: 'Roman to Integer', link: 'https://leetcode.com/problems/roman-to-integer/', difficulty: 'Easy', topic: 'Math' },
    { title: 'Three Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium', topic: 'Array' },
    { title: 'Letter Combinations of a Phone Number', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', difficulty: 'Medium', topic: 'Backtracking' },
    { title: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/', difficulty: 'Medium', topic: 'Backtracking' },
    { title: 'Swap Nodes in Pairs', link: 'https://leetcode.com/problems/swap-nodes-in-pairs/', difficulty: 'Medium', topic: 'Linked List' },
    { title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy', topic: 'Linked List' },
    { title: 'Same Tree', link: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy', topic: 'Tree' },
    { title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Easy', topic: 'Array' }
  ];

  return (
    <div className="flex-grow">
      <details className="dropdown">
        <summary className="btn m-1">Group By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      <div className="border-8">
        <ProblemTable problems={problems} />
      </div>
    </div>
      
  );
}
