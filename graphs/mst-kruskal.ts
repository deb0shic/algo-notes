// LeetCode 1584 — Min Cost to Connect All Points
//
// Complete graph on n <= 1000 points with Manhattan-distance edges. Kruskal
// with Union-Find on all n*(n-1)/2 edges, sorted by weight.

class DSU {
  parent: number[]; rank: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank   = new Array(n).fill(0);
  }
  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]!]!;
      x = this.parent[x]!;
    }
    return x;
  }
  union(a: number, b: number): boolean {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra]! < this.rank[rb]!) [a, b] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]!++;
    return true;
  }
}

export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const edges: [number, number, number][] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const w = Math.abs(points[i]![0]! - points[j]![0]!)
              + Math.abs(points[i]![1]! - points[j]![1]!);
      edges.push([w, i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]);

  const dsu = new DSU(n);
  let total = 0, used = 0;
  for (const [w, u, v] of edges) {
    if (dsu.union(u, v)) { total += w; if (++used === n - 1) break; }
  }
  return total;
}

