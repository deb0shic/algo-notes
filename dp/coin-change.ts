// LeetCode 322 — Coin Change
//
// Unbounded knapsack: dp[a] = min coins to make amount a. Iterate coins
// outside and amounts inside (order does not matter for min-coins), or
// vice versa. Missing amounts stay at Infinity, mapped to -1 at the end.

export function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (c <= a && dp[a - c]! + 1 < dp[a]!) dp[a] = dp[a - c]! + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]!;
}

