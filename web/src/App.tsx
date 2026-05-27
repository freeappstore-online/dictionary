import { useState, useMemo, useCallback } from "react";
import { allWords } from "./data";
import type { WordEntry } from "./data";
import { searchDictionary } from "./lib/search";
import { getWordOfTheDay } from "./lib/word-of-the-day";
import {
  getFavorites,
  toggleFavorite,
  getRecentSearches,
  addRecentSearch,
  clearRecentSearches,
  getWordLists,
  createWordList,
  deleteWordList,
  addWordToList,
  removeWordFromList,
  getFlashcardStats,
  saveFlashcardStats,
  getLookupStats,
  recordLookup,
} from "./lib/storage";
import type { WordList, FlashcardStats } from "./lib/storage";

import SearchBar from "./components/SearchBar";
import WordCard from "./components/WordCard";
import WordDetail from "./components/WordDetail";
import WordOfTheDay from "./components/WordOfTheDay";
import WordLists from "./components/WordLists";
import Flashcards from "./components/Flashcards";
import ThesaurusView from "./components/ThesaurusView";
import StatsView from "./components/StatsView";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";

type Tab = "home" | "thesaurus" | "lists" | "stats";

interface FlashcardSession {
  words: string[];
  label: string;
}

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [search, setSearch] = useState("");
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(getFavorites);
  const [recentSearches, setRecentSearches] = useState<string[]>(getRecentSearches);
  const [wordLists, setWordLists] = useState<WordList[]>(getWordLists);
  const [flashcardStats, setFlashcardStats] = useState<FlashcardStats>(getFlashcardStats);
  const [lookupStats, setLookupStats] = useState(getLookupStats);
  const [flashcardSession, setFlashcardSession] = useState<FlashcardSession | null>(null);
  const [thesaurusWord] = useState("");

  // Word of the day
  const wotd = useMemo(() => getWordOfTheDay(allWords), []);

  // Search results
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return searchDictionary(search, allWords);
  }, [search]);

  // Find a word entry by name
  const findWord = useCallback(
    (word: string): WordEntry | undefined => {
      return allWords.find((w) => w.word.toLowerCase() === word.toLowerCase());
    },
    [],
  );

  // Selected word entry
  const selectedEntry = useMemo(() => {
    if (!selectedWord) return null;
    return findWord(selectedWord) ?? null;
  }, [selectedWord, findWord]);

  // Handle selecting a word
  const handleSelectWord = useCallback(
    (word: string) => {
      setSelectedWord(word);
      setSearch("");
      setLookupStats(recordLookup(word));
    },
    [],
  );

  // Handle navigating to a word (from synonyms, antonyms, etc.)
  const handleNavigateWord = useCallback(
    (word: string) => {
      const entry = findWord(word);
      if (entry) {
        handleSelectWord(entry.word);
        setTab("home");
        setFlashcardSession(null);
      }
    },
    [findWord, handleSelectWord],
  );

  // Handle toggling favorite
  const handleToggleFavorite = useCallback((word: string) => {
    setFavorites(toggleFavorite(word));
  }, []);

  // Handle search submission (record recent)
  const handleSearch = useCallback(
    (q: string) => {
      setSearch(q);
      if (q.trim()) {
        setRecentSearches(addRecentSearch(q));
      }
    },
    [],
  );

  // Word list operations
  const handleCreateList = useCallback((name: string) => {
    setWordLists(createWordList(name));
  }, []);

  const handleDeleteList = useCallback((id: string) => {
    setWordLists(deleteWordList(id));
  }, []);

  const handleAddToList = useCallback((listId: string, word: string) => {
    setWordLists(addWordToList(listId, word));
  }, []);

  const handleRemoveFromList = useCallback((listId: string, word: string) => {
    setWordLists(removeWordFromList(listId, word));
  }, []);

  // Flashcard operations
  const handleStartFlashcards = useCallback((words: string[], label: string) => {
    setFlashcardSession({ words, label });
  }, []);

  const handleUpdateFlashcardStats = useCallback((stats: FlashcardStats) => {
    saveFlashcardStats(stats);
    setFlashcardStats(stats);
  }, []);

  // Handle tab change
  const handleTabChange = useCallback((newTab: Tab) => {
    setTab(newTab);
    setSelectedWord(null);
    setFlashcardSession(null);
    setSearch("");
  }, []);

  // Resolve content to render
  const renderContent = () => {
    // Flashcard mode overrides everything
    if (flashcardSession) {
      const entries = flashcardSession.words
        .map((w) => findWord(w))
        .filter((e): e is WordEntry => e != null);
      return (
        <Flashcards
          words={entries}
          label={flashcardSession.label}
          stats={flashcardStats}
          onUpdateStats={handleUpdateFlashcardStats}
          onClose={() => setFlashcardSession(null)}
          onNavigateWord={handleNavigateWord}
        />
      );
    }

    // Word detail view
    if (selectedEntry && tab === "home") {
      return (
        <WordDetail
          entry={selectedEntry}
          isFavorite={favorites.has(selectedEntry.word)}
          onToggleFavorite={() => handleToggleFavorite(selectedEntry.word)}
          onNavigateWord={handleNavigateWord}
          onBack={() => setSelectedWord(null)}
          wordLists={wordLists}
          onAddToList={handleAddToList}
        />
      );
    }

    // Tab-based views
    switch (tab) {
      case "thesaurus":
        return (
          <ThesaurusView
            allWords={allWords}
            onNavigateWord={handleNavigateWord}
            initialWord={thesaurusWord}
          />
        );

      case "lists":
        return (
          <WordLists
            lists={wordLists}
            favorites={favorites}
            allWords={allWords}
            onCreateList={handleCreateList}
            onDeleteList={handleDeleteList}
            onRemoveWord={handleRemoveFromList}
            onNavigateWord={handleNavigateWord}
            onStartFlashcards={handleStartFlashcards}
          />
        );

      case "stats":
        return (
          <StatsView
            lookupStats={lookupStats}
            flashcardStats={flashcardStats}
            favoritesCount={favorites.size}
          />
        );

      default: {
        // Home / Dictionary view
        const isSearching = search.trim().length > 0;

        return (
          <div className="max-w-2xl mx-auto">
            {/* Word of the Day */}
            {!isSearching && (
              <WordOfTheDay
                entry={wotd}
                onLearnMore={() => handleSelectWord(wotd.word)}
              />
            )}

            {/* Search results */}
            {isSearching && (
              <div>
                <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
                  {searchResults.length} result{searchResults.length === 1 ? "" : "s"} for "{search}"
                </p>
                {searchResults.length === 0 ? (
                  <div className="text-center py-12 rounded-xl" style={{ background: "var(--panel)" }}>
                    <p className="text-2xl mb-2">🔍</p>
                    <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      No words match "{search}"
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                      Try a different spelling or search term
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {searchResults.map((r) => (
                      <WordCard
                        key={r.entry.word}
                        entry={r.entry}
                        onClick={() => handleSelectWord(r.entry.word)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Recent searches */}
            {!isSearching && recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Recent Searches
                  </span>
                  <button
                    onClick={() => {
                      clearRecentSearches();
                      setRecentSearches([]);
                    }}
                    className="text-[10px] cursor-pointer"
                    style={{ background: "none", border: "none", color: "var(--accent)" }}
                  >
                    Clear
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {recentSearches.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSearch(q)}
                      className="text-xs px-2.5 py-1 rounded-full cursor-pointer"
                      style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Favorites section */}
            {!isSearching && favorites.size > 0 && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
                  Favorites ({favorites.size})
                </h3>
                <div className="space-y-2">
                  {allWords
                    .filter((w) => favorites.has(w.word))
                    .slice(0, 5)
                    .map((entry) => (
                      <WordCard
                        key={entry.word}
                        entry={entry}
                        onClick={() => handleSelectWord(entry.word)}
                        compact
                      />
                    ))}
                  {favorites.size > 5 && (
                    <button
                      onClick={() => handleTabChange("lists")}
                      className="text-xs cursor-pointer"
                      style={{ background: "none", border: "none", color: "var(--accent)" }}
                    >
                      View all favorites in Lists
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Browse all words */}
            {!isSearching && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
                  Browse Dictionary ({allWords.length} words)
                </h3>
                <div className="space-y-2">
                  {allWords.map((entry) => (
                    <WordCard
                      key={entry.word}
                      entry={entry}
                      onClick={() => handleSelectWord(entry.word)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      }
    }
  };

  return (
    <div className="flex h-screen" style={{ background: "var(--paper)" }}>
      {/* Desktop sidebar */}
      <Sidebar
        active={tab}
        onChange={handleTabChange}
        favoritesCount={favorites.size}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header
          className="shrink-0 flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid var(--line)", background: "var(--glass)" }}
        >
          <h1
            className="text-lg font-bold display-font sm:hidden"
            style={{ color: "var(--ink)" }}
          >
            Dictionary
          </h1>
          <div className="flex-1 max-w-md ml-auto">
            <SearchBar
              value={search}
              onChange={handleSearch}
            />
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-5 lg:px-6">
          {renderContent()}
        </div>

        {/* Mobile bottom nav */}
        <BottomNav active={tab} onChange={handleTabChange} />

        {/* Desktop footer */}
        <footer
          className="hidden sm:flex shrink-0 items-center justify-center px-4 py-2 text-xs"
          style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}
        >
          Dictionary — Free on FreeAppStore
        </footer>
      </main>
    </div>
  );
}
