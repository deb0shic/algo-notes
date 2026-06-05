// LeetCode 416 — Partition Equal Subset Sum
//
// If the total sum is odd, no split exists. Otherwise the problem reduces to
// classic subset-sum with target = sum / 2. Boolean DP; iterate over the
// target axis backwards so each item is used at most once.

export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum & 1) return false;
  const target = sum >> 1;

  const dp = new Uint8Array(target + 1);
  dp[0] = 1;
  for (const n of nums) {
    for (let t = target; t >= n; t--) {
      if (dp[t - n]) dp[t] = 1;
    }
  }
  return dp[target] === 1;
}
