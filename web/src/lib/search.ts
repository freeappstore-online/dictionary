import type { WordEntry } from "../data";

/**
 * Simple Levenshtein-distance-based fuzzy matching.
 * Returns a score 0..1 where 1 = perfect match.
 */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0),
  );
  for (let i = 0; i <= m; i++) dp[i]![0] = i;
  for (let j = 0; j <= n; j++) dp[0]![j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i]![j] = Math.min(
        dp[i - 1]![j]! + 1,
        dp[i]![j - 1]! + 1,
        dp[i - 1]![j - 1]! + cost,
      );
    }
  }
  return dp[m]![n]!;
}

function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  // Exact match
  if (t === q) return 1;

  // Starts with
  if (t.startsWith(q)) return 0.9;

  // Contains
  if (t.includes(q)) return 0.7;

  // Levenshtein similarity for short queries (typo tolerance)
  if (q.length >= 3) {
    const dist = levenshtein(q, t.slice(0, Math.max(q.length + 2, t.length)));
    const maxLen = Math.max(q.length, t.length);
    const similarity = 1 - dist / maxLen;
    if (similarity >= 0.6) return similarity * 0.6; // Scale down fuzzy matches
  }

  return 0;
}

export interface SearchResult {
  entry: WordEntry;
  score: number;
  matchType: "word" | "definition";
}

/**
 * Search the dictionary by word name and definition text.
 * Returns results sorted by relevance (highest score first).
 */
export function searchDictionary(
  query: string,
  words: WordEntry[],
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const entry of words) {
    // Score by word name
    const wordScore = fuzzyScore(q, entry.word);
    if (wordScore > 0) {
      results.push({ entry, score: wordScore, matchType: "word" });
      continue;
    }

    // Score by definition text
    let bestDefScore = 0;
    for (const def of entry.definitions) {
      const defText = def.text.toLowerCase();
      if (defText.includes(q)) {
        bestDefScore = Math.max(bestDefScore, 0.5);
      }
    }
    if (bestDefScore > 0) {
      results.push({ entry, score: bestDefScore, matchType: "definition" });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
