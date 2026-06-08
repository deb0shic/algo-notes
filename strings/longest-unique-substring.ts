// LeetCode 3 — Longest Substring Without Repeating Characters
//
// Sliding window with a hash map from char -> last index seen. When the
// current char has been seen inside the window, jump `l` to
// max(l, lastSeen + 1) — never move backward.

export function lengthOfLongestSubstring(s: string): number {
  const seen = new Map<string, number>();
  let l = 0, best = 0;

  for (let r = 0; r < s.length; r++) {
    const c = s[r]!;
    const prev = seen.get(c);
    if (prev !== undefined && prev >= l) l = prev + 1;
    seen.set(c, r);
    if (r - l + 1 > best) best = r - l + 1;
  }
  return best;
}

