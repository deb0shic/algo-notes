// LeetCode 208 / 1268 — Trie
//
// A minimal Trie with insert / search / startsWith. `children` is a Map on
// purpose, not a Record: for very small alphabets a fixed array of 26 slots
// wins on speed, but this shape works for arbitrary character sets and is
// what I reach for when the input is not clearly ASCII lowercase.

class TrieNode {
  children = new Map<string, TrieNode>();
  end = false;
}

export class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      let next = node.children.get(c);
      if (!next) { next = new TrieNode(); node.children.set(c, next); }
      node = next;
    }
    node.end = true;
  }

  search(word: string): boolean {
    const node = this.walk(word);
    return node !== null && node.end;
  }

  startsWith(prefix: string): boolean {
    return this.walk(prefix) !== null;
  }

  private walk(s: string): TrieNode | null {
    let node = this.root;
    for (const c of s) {
      const next = node.children.get(c);
      if (!next) return null;
      node = next;
    }
    return node;
  }
}
