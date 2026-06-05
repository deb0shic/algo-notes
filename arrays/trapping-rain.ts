// LeetCode 42 — Trapping Rain Water
//
// Given non-negative bar heights, compute how much water they can trap.
//
// Two clean approaches:
//   (a) prefix max from the left, prefix max from the right, then take
//       min(L[i], R[i]) - height[i]. O(n) time, O(n) space.
//   (b) two pointers, maintaining leftMax and rightMax. Move the shorter
//       side inward — the shorter side determines how much water sits on
//       top of the current column. O(n) time, O(1) space.

export function trap(height: number[]): number {
  let l = 0, r = height.length - 1;
  let lMax = 0, rMax = 0;
  let out = 0;

  while (l < r) {
    if (height[l]! < height[r]!) {
      height[l]! >= lMax ? (lMax = height[l]!) : (out += lMax - height[l]!);
      l++;
    } else {
      height[r]! >= rMax ? (rMax = height[r]!) : (out += rMax - height[r]!);
      r--;
    }
  }
  return out;
}

// The subtlety is that we only need one bound at any moment: the shorter
// side. If height[l] < height[r], then the right side is at least as tall as
// height[l], so lMax is the binding wall for column l. Symmetric on the
// other side.
