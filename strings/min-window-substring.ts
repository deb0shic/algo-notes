// LeetCode 76 — Minimum Window Substring
//
// Find the smallest substring of s containing all chars of t (with counts).
//
// Track a `need` map (char -> required count) and a `have` count of chars
// currently satisfied. Expand r until every requirement is met, then shrink
// l as far as possible while still meeting them. Record the best window.

export function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";
  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);

  const have = new Map<string, number>();
  let satisfied = 0;
  const required = need.size;

  let l = 0, bestL = 0, bestLen = Infinity;

  for (let r = 0; r < s.length; r++) {
    const c = s[r]!;
    have.set(c, (have.get(c) ?? 0) + 1);
    if (need.has(c) && have.get(c) === need.get(c)) satisfied++;

    while (satisfied === required) {
      if (r - l + 1 < bestLen) { bestLen = r - l + 1; bestL = l; }
      const lc = s[l]!;
      have.set(lc, have.get(lc)! - 1);
      if (need.has(lc) && have.get(lc)! < need.get(lc)!) satisfied--;
      l++;
    }
  }
  return bestLen === Infinity ? "" : s.substring(bestL, bestL + bestLen);
}


