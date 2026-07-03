// LeetCode 543 — Diameter of Binary Tree
//
// Post-order recursion: each node returns the height of its subtree, and
// while unwinding we update a shared `best` with left + right.

interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null; }

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let best = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const l = dfs(node.left);
    const r = dfs(node.right);
    if (l + r > best) best = l + r;
    return 1 + Math.max(l, r);
  };

  dfs(root);
  return best;
}

// "Diameter" here counts edges, not nodes; that is why we return
// 1 + max(l, r) and record l + r without adding 1.

