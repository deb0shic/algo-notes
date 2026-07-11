# algo-notes

Working notes on algorithmic problems I have solved, mostly from LeetCode and Codeforces, some from CSES. Written mainly to be able to remember approaches when I see the same pattern again three months later.

Language is TypeScript for everything unless the constraints made me reach for Rust or Python.

## Layout

Each folder groups problems by the underlying technique, not by source. The mapping between source-numbers and files lives in `SOLVED.md`.

```
arrays/     two-pointer, sliding window, prefix sums
strings/    KMP, Z-function, rolling hash
graphs/     BFS/DFS, Dijkstra, Union-Find
dp/         classic DPs — LIS, knapsack, bitmask, digit DP
trees/      DFS, LCA, segment tree, Fenwick
heap/       top-K, k-way merge, scheduler
```

## How the notes are structured

Every file starts with the problem statement (paraphrased), constraints, and the key observation that unlocked it. Then the code. Then the complexity and an edge case or two I initially missed. That is it — no explanations of what a hash map is.

## What is not here

Any problem I solved by brute-forcing the intended solution without understanding it. Notes without a "key observation" line get deleted.

## License

MIT

