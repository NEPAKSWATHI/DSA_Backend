const mongoose = require("mongoose");
require("dotenv").config();
const Problem = require("./models/Problem");

const data = [
  // Arrays
  { chapter: "Arrays", title: "Two Sum", level: "Easy",
    leetcode:"https://leetcode.com/problems/two-sum",
    youtube:"https://youtu.be/KLlXCFG5TnA",
    article:"https://leetcode.com/problems/two-sum/solution/" },

  { chapter: "Arrays", title: "Kadane’s Algorithm", level: "Medium",
    leetcode:"https://leetcode.com/problems/maximum-subarray",
    youtube:"https://youtu.be/5WZl3MMT0Eg",
    article:"https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/" },

  { chapter: "Arrays", title: "Merge Intervals", level: "Medium",
    leetcode:"https://leetcode.com/problems/merge-intervals",
    youtube:"https://youtu.be/44H3cEC2fFM",
    article:"https://www.geeksforgeeks.org/merging-intervals/" },

  // Strings
  { chapter: "Strings", title: "Valid Anagram", level: "Easy",
    leetcode:"https://leetcode.com/problems/valid-anagram",
    youtube:"https://youtu.be/9UtInBqnCgA",
    article:"https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/" },

  { chapter: "Strings", title: "Longest Palindromic Substring", level: "Medium",
    leetcode:"https://leetcode.com/problems/longest-palindromic-substring",
    youtube:"https://youtu.be/y2BD4MJqV20",
    article:"https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/" },

  // Linked List
  { chapter: "Linked List", title: "Reverse Linked List", level: "Easy",
    leetcode:"https://leetcode.com/problems/reverse-linked-list",
    youtube:"https://youtu.be/G0_I-ZF0S38",
    article:"https://www.geeksforgeeks.org/reverse-a-linked-list/" },

  { chapter: "Linked List", title: "Detect Cycle", level: "Medium",
    leetcode:"https://leetcode.com/problems/linked-list-cycle",
    youtube:"https://youtu.be/gBTe7lFR3vc",
    article:"https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" },

  // Stack & Queue
  { chapter: "Stack", title: "Next Greater Element", level: "Medium",
    leetcode:"https://leetcode.com/problems/next-greater-element-i",
    youtube:"https://youtu.be/Du881K7Jtk8",
    article:"https://www.geeksforgeeks.org/next-greater-element/" },

  { chapter: "Queue", title: "Sliding Window Maximum", level: "Hard",
    leetcode:"https://leetcode.com/problems/sliding-window-maximum",
    youtube:"https://youtu.be/DfljaUwZsOk",
    article:"https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/" },

  // Trees
  { chapter: "Trees", title: "Inorder Traversal", level: "Easy",
    leetcode:"https://leetcode.com/problems/binary-tree-inorder-traversal",
    youtube:"https://youtu.be/g_S5WuasWUE",
    article:"https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" },

  { chapter: "Trees", title: "Lowest Common Ancestor", level: "Medium",
    leetcode:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",
    youtube:"https://youtu.be/13m9ZCB8gjw",
    article:"https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/" },

  // Graph
  { chapter: "Graph", title: "BFS Traversal", level: "Easy",
    leetcode:"https://leetcode.com/problems/binary-tree-level-order-traversal",
    youtube:"https://youtu.be/D14fnY5wWbI",
    article:"https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" },

  { chapter: "Graph", title: "Dijkstra Algorithm", level: "Hard",
    leetcode:"https://leetcode.com/problems/network-delay-time",
    youtube:"https://youtu.be/pVfj6mxhdMw",
    article:"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm/" },

  // DP
  { chapter: "DP", title: "0/1 Knapsack", level: "Hard",
    leetcode:"https://leetcode.com/problems/partition-equal-subset-sum",
    youtube:"https://youtu.be/nLmhmB6NzcM",
    article:"https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },

  { chapter: "DP", title: "Longest Increasing Subsequence", level: "Medium",
    leetcode:"https://leetcode.com/problems/longest-increasing-subsequence",
    youtube:"https://youtu.be/cjWnW0hdF1Y",
    article:"https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/" }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Problem.deleteMany(); // clean old
    await Problem.insertMany(data);
    console.log("DSA Problems Seeded Successfully");
    process.exit();
  });
