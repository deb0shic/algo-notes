// LeetCode 15 — 3Sum
//
// Given an integer array, return all unique triplets [a, b, c] such that
// a + b + c === 0.
//
// n <= 3000, so O(n^2) is fine; O(n^3) is not.
//
// Key observation: after sorting, fix i and use a two-pointer sweep on the
// suffix. Deduplication happens by skipping repeated values at each of the
// three positions, which is much cheaper than post-processing with a Set.

export function threeSum(nums: number[]): number[][] {
  const out: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i]! > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i]! + nums[l]! + nums[r]!;
      if (s === 0) {
        out.push([nums[i]!, nums[l]!, nums[r]!]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (s < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return out;
}

// Time  O(n^2)
// Space O(1) extra, ignoring the output.
//
// Missed edge case: an all-zeros input like [0, 0, 0, 0, 0]. The dedup skip
// at position i correctly emits [0, 0, 0] exactly once.
