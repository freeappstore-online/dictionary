/** Type-safe localStorage wrapper */

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage full or unavailable — silently fail
  }
}

// ---- Favorites ----

const FAV_KEY = "dict_favorites";

export function getFavorites(): Set<string> {
  return new Set(read<string[]>(FAV_KEY, []));
}

export function toggleFavorite(word: string): Set<string> {
  const favs = getFavorites();
  if (favs.has(word)) {
    favs.delete(word);
  } else {
    favs.add(word);
  }
  write(FAV_KEY, [...favs]);
  return favs;
}

// ---- Recent searches ----

const RECENT_KEY = "dict_recent_searches";
const MAX_RECENT = 20;

export function getRecentSearches(): string[] {
  return read<string[]>(RECENT_KEY, []);
}

export function addRecentSearch(query: string): string[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return getRecentSearches();
  const recent = getRecentSearches().filter((s) => s !== trimmed);
  recent.unshift(trimmed);
  const capped = recent.slice(0, MAX_RECENT);
  write(RECENT_KEY, capped);
  return capped;
}

export function clearRecentSearches(): void {
  write(RECENT_KEY, []);
}

// ---- Word lists ----

export interface WordList {
  id: string;
  name: string;
  words: string[];
}

const LISTS_KEY = "dict_word_lists";

export function getWordLists(): WordList[] {
  return read<WordList[]>(LISTS_KEY, []);
}

export function saveWordLists(lists: WordList[]): void {
  write(LISTS_KEY, lists);
}

export function createWordList(name: string): WordList[] {
  const lists = getWordLists();
  const newList: WordList = {
    id: crypto.randomUUID(),
    name,
    words: [],
  };
  lists.push(newList);
  saveWordLists(lists);
  return lists;
}

export function deleteWordList(id: string): WordList[] {
  const lists = getWordLists().filter((l) => l.id !== id);
  saveWordLists(lists);
  return lists;
}

export function addWordToList(listId: string, word: string): WordList[] {
  const lists = getWordLists();
  const list = lists.find((l) => l.id === listId);
  if (list && !list.words.includes(word)) {
    list.words.push(word);
    saveWordLists(lists);
  }
  return lists;
}

export function removeWordFromList(listId: string, word: string): WordList[] {
  const lists = getWordLists();
  const list = lists.find((l) => l.id === listId);
  if (list) {
    list.words = list.words.filter((w) => w !== word);
    saveWordLists(lists);
  }
  return lists;
}

// ---- Flashcard state ----

export interface FlashcardStats {
  totalReviewed: number;
  totalCorrect: number;
  /** word -> number of times marked "still learning" */
  learningWeights: Record<string, number>;
}

const FLASH_KEY = "dict_flashcard_stats";

export function getFlashcardStats(): FlashcardStats {
  return read<FlashcardStats>(FLASH_KEY, {
    totalReviewed: 0,
    totalCorrect: 0,
    learningWeights: {},
  });
}

export function saveFlashcardStats(stats: FlashcardStats): void {
  write(FLASH_KEY, stats);
}

// ---- Lookup stats ----

export interface LookupStats {
  totalLookups: number;
  /** word -> lookup count */
  perWord: Record<string, number>;
}

const STATS_KEY = "dict_lookup_stats";

export function getLookupStats(): LookupStats {
  return read<LookupStats>(STATS_KEY, { totalLookups: 0, perWord: {} });
}

export function recordLookup(word: string): LookupStats {
  const stats = getLookupStats();
  stats.totalLookups += 1;
  stats.perWord[word] = (stats.perWord[word] ?? 0) + 1;
  write(STATS_KEY, stats);
  return stats;
}
