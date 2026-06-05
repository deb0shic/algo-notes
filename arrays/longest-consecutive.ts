// LeetCode 128 — Longest Consecutive Sequence
//
// Return the length of the longest run of consecutive integers in nums.
// Values are not sorted and can repeat.
//
// Sorting is O(n log n) — the problem asks for O(n). Use a hash set and only
// start counting from values that have no predecessor in the set; that keeps
// the total work linear across all starts.

export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let best = 0;

  for (const n of set) {
    if (set.has(n - 1)) continue; // not a run start
    let cur = n, len = 1;
    while (set.has(cur + 1)) { cur++; len++; }
    if (len > best) best = len;
  }
  return best;
}

// Time  O(n)
// Space O(n)
