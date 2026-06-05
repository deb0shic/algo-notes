// LeetCode 300 — Longest Increasing Subsequence
//
// O(n log n) via patience sorting: keep the smallest tail seen so far for a
// LIS of each length. Binary-search-insert every element. The size of the
// `tails` array is the LIS length. Note the array is NOT itself an LIS, it
// is a compressed representation of the smallest-tail-per-length.

export function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const x of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const m = (lo + hi) >> 1;
      if (tails[m]! < x) lo = m + 1; else hi = m;
    }
    tails[lo] = x;
  }
  return tails.length;
}
