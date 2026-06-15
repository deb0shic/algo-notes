// LeetCode 239 — Sliding Window Maximum
//
// Return the maximum of every window of size k as it slides across nums.
//
// Naive O(nk) TLEs at n = 1e5, k = 1e4.
//
// Key observation: a monotonically decreasing deque of indices. When we push
// a new index, pop everything smaller from the back — those can never be the
// window max again while the newer, larger value is in the window. Pop from
// the front once it falls out of the window. Front of the deque is always
// the max.

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const dq: number[] = [];
  const out: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0]! <= i - k) dq.shift();
    while (dq.length && nums[dq[dq.length - 1]!]! < nums[i]!) dq.pop();
    dq.push(i);
    if (i >= k - 1) out.push(nums[dq[0]!]!);
  }
  return out;
}

// Time  O(n) amortized — each index enters and leaves the deque once.
// Space O(k) for the deque.
//
// `Array.shift` is O(n) in V8, but n is small enough here that it does not
// matter. For very large k a real ring buffer helps.

