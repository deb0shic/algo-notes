// LeetCode 621 — Task Scheduler
//
// Counting/formula solution beats a heap here. Let f be the max frequency
// of any task and t the number of tasks that share that max frequency.
// The answer is either the total number of tasks (if scheduling can be
// packed with no idle time) or (f - 1) * (n + 1) + t.

export function leastInterval(tasks: string[], n: number): number {
  const count = new Array(26).fill(0);
  for (const c of tasks) count[c.charCodeAt(0) - 65]++;

  let f = 0, t = 0;
  for (const c of count) if (c > f) f = c;
  for (const c of count) if (c === f) t++;

  return Math.max(tasks.length, (f - 1) * (n + 1) + t);
}

// Why it works: pin the most frequent task into the first slot of every
// "chunk" of length n + 1. There are (f - 1) full chunks plus a tail that
// holds the tasks tying with f. Any remaining tasks slot into idles.
