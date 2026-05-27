export type FrequencyTier = "common" | "uncommon" | "advanced";

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "conjunction"
  | "interjection"
  | "pronoun";

export interface Definition {
  text: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface WordEntry {
  word: string;
  phonetic: string;
  partOfSpeech: PartOfSpeech;
  definitions: Definition[];
  etymology: string;
  frequency: FrequencyTier;
}
