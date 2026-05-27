import type { WordEntry } from "../data";

/**
 * Deterministic word-of-the-day: uses the date string as a seed
 * to pick a consistent word for each calendar day.
 */
export function getWordOfTheDay(words: WordEntry[]): WordEntry {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  // Simple hash of date string
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const ch = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash + ch) | 0;
  }

  const index = Math.abs(hash) % words.length;
  return words[index]!;
}
