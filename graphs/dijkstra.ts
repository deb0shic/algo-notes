// LeetCode 743 — Network Delay Time
//
// Standard Dijkstra with a min-heap. Return the maximum shortest distance
// from `k` to any node; if any node is unreachable, return -1.
//
// No native priority queue in TypeScript, so I use a small binary heap.

class MinHeap<T> {
  private heap: [number, T][] = [];
  push(prio: number, val: T): void {
    this.heap.push([prio, val]);
    this.bubbleUp(this.heap.length - 1);
  }
  pop(): [number, T] | undefined {
    if (!this.heap.length) return undefined;
    const top = this.heap[0]!;
    const last = this.heap.pop()!;
    if (this.heap.length) { this.heap[0] = last; this.sinkDown(0); }
    return top;
  }
  get size() { return this.heap.length; }
  private bubbleUp(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.heap[p]![0] <= this.heap[i]![0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i]!, this.heap[p]!];
      i = p;
    }
  }
  private sinkDown(i: number) {
    const n = this.heap.length;
    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let m = i;
      if (l < n && this.heap[l]![0] < this.heap[m]![0]) m = l;
      if (r < n && this.heap[r]![0] < this.heap[m]![0]) m = r;
      if (m === i) break;
      [this.heap[m], this.heap[i]] = [this.heap[i]!, this.heap[m]!];
      i = m;
    }
  }
}

export function networkDelayTime(times: number[][], n: number, k: number): number {
  const adj: [number, number][][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) adj[u!]!.push([v!, w!]);

  const dist = new Array<number>(n + 1).fill(Infinity);
  dist[k] = 0;
  const pq = new MinHeap<number>();
  pq.push(0, k);

  while (pq.size) {
    const [d, u] = pq.pop()!;
    if (d > dist[u]!) continue;
    for (const [v, w] of adj[u]!) {
      if (d + w < dist[v]!) { dist[v] = d + w; pq.push(dist[v]!, v); }
    }
  }

  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;
    if (dist[i]! > max) max = dist[i]!;
  }
  return max;
}

