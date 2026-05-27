import type { WordEntry } from "./types";
import { commonWords } from "./common-words";
import { academicWords } from "./academic-words";
import { adjectiveWords } from "./adjective-words";
import { verbWords } from "./verb-words";

export type { WordEntry } from "./types";
export type { FrequencyTier, PartOfSpeech, Definition } from "./types";

/** De-duplicated dictionary of all words, sorted alphabetically */
export const allWords: WordEntry[] = (() => {
  const combined = [
    ...commonWords,
    ...academicWords,
    ...adjectiveWords,
    ...verbWords,
  ];
  // De-duplicate by word (keep first occurrence)
  const seen = new Set<string>();
  const unique: WordEntry[] = [];
  for (const entry of combined) {
    const key = entry.word.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(entry);
    }
  }
  return unique.sort((a, b) => a.word.localeCompare(b.word));
})();

/** All unique words in the dictionary as a Set (for quick lookup) */
export const wordSet = new Set(allWords.map((w) => w.word.toLowerCase()));
