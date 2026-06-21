// LeetCode 200 — Number of Islands
//
// Flood fill. Iterate the grid, and whenever we hit '1' that has not been
// visited, increment the counter and DFS-erase the whole island in place.
// Mutating the grid saves the visited set.

export function numIslands(grid: string[][]): number {
  const m = grid.length, n = grid[0]!.length;
  let count = 0;

  const dfs = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r]![c] !== "1") return;
    grid[r]![c] = "0";
    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
  };

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r]![c] === "1") { count++; dfs(r, c); }
    }
  }
  return count;
}

// For very deep grids (m * n around 1e6) the recursion can blow the stack.
// Convert to an explicit stack in that case.

