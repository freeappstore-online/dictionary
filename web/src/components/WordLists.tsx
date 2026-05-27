import { useState } from "react";
import type { WordList } from "../lib/storage";
import type { WordEntry } from "../data";

interface WordListsProps {
  lists: WordList[];
  favorites: Set<string>;
  allWords: WordEntry[];
  onCreateList: (name: string) => void;
  onDeleteList: (id: string) => void;
  onRemoveWord: (listId: string, word: string) => void;
  onNavigateWord: (word: string) => void;
  onStartFlashcards: (words: string[], label: string) => void;
}

export default function WordLists({
  lists,
  favorites,
  allWords,
  onCreateList,
  onDeleteList,
  onRemoveWord,
  onNavigateWord,
  onStartFlashcards,
}: WordListsProps) {
  const [newListName, setNewListName] = useState("");
  const [expandedList, setExpandedList] = useState<string | null>(null);

  const handleCreate = () => {
    const name = newListName.trim();
    if (!name) return;
    onCreateList(name);
    setNewListName("");
  };

  const commonWords = allWords.filter((w) => w.frequency === "common").map((w) => w.word);
  const advancedWords = allWords.filter((w) => w.frequency === "advanced").map((w) => w.word);
  const favWords = [...favorites];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold display-font mb-4" style={{ color: "var(--ink)" }}>
        Word Lists
      </h2>

      {/* Quick start flashcard sets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {favWords.length > 0 && (
          <button
            onClick={() => onStartFlashcards(favWords, "Favorites")}
            className="rounded-xl p-3 text-left cursor-pointer"
            style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
          >
            <div className="text-sm font-semibold">Favorites</div>
            <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              {favWords.length} words
            </div>
          </button>
        )}
        <button
          onClick={() => onStartFlashcards(commonWords, "Common Words")}
          className="rounded-xl p-3 text-left cursor-pointer"
          style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
        >
          <div className="text-sm font-semibold">Common Words</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            {commonWords.length} words
          </div>
        </button>
        <button
          onClick={() => onStartFlashcards(advancedWords, "Advanced Words")}
          className="rounded-xl p-3 text-left cursor-pointer"
          style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
        >
          <div className="text-sm font-semibold">Advanced Words</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            {advancedWords.length} words
          </div>
        </button>
      </div>

      {/* Create new list */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
          placeholder="New list name..."
          className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
        />
        <button
          onClick={handleCreate}
          disabled={!newListName.trim()}
          className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer"
          style={{
            background: newListName.trim() ? "var(--accent)" : "var(--line)",
            border: "none",
            color: newListName.trim() ? "#fff" : "var(--muted)",
          }}
        >
          Create
        </button>
      </div>

      {/* Custom lists */}
      {lists.length === 0 ? (
        <div className="text-center py-12 rounded-xl" style={{ background: "var(--panel)" }}>
          <p className="text-2xl mb-2">📝</p>
          <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>No custom lists yet</p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Create a list above, then add words from the word detail view
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {lists.map((list) => (
            <div
              key={list.id}
              className="rounded-xl overflow-hidden"
              style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
            >
              <div className="flex items-center justify-between p-3">
                <button
                  onClick={() => setExpandedList(expandedList === list.id ? null : list.id)}
                  className="flex-1 text-left flex items-center gap-2 cursor-pointer"
                  style={{ background: "none", border: "none", color: "var(--ink)" }}
                >
                  <svg
                    className="w-4 h-4 transition-transform"
                    style={{ transform: expandedList === list.id ? "rotate(90deg)" : "" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm font-semibold">{list.name}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    ({list.words.length})
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  {list.words.length > 0 && (
                    <button
                      onClick={() => onStartFlashcards(list.words, list.name)}
                      className="text-xs px-2 py-1 rounded cursor-pointer"
                      style={{ background: "var(--accent)", border: "none", color: "#fff" }}
                    >
                      Flashcards
                    </button>
                  )}
                  <button
                    onClick={() => onDeleteList(list.id)}
                    className="text-xs px-2 py-1 rounded cursor-pointer"
                    style={{ background: "var(--line)", border: "none", color: "var(--error)" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {expandedList === list.id && (
                <div className="px-3 pb-3">
                  {list.words.length === 0 ? (
                    <p className="text-xs py-2" style={{ color: "var(--muted)" }}>
                      No words in this list yet.
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {list.words.map((word) => (
                        <div
                          key={word}
                          className="flex items-center justify-between py-1.5 px-2 rounded"
                          style={{ background: "var(--paper)" }}
                        >
                          <button
                            onClick={() => onNavigateWord(word)}
                            className="text-sm cursor-pointer"
                            style={{ background: "none", border: "none", color: "var(--accent)" }}
                          >
                            {word}
                          </button>
                          <button
                            onClick={() => onRemoveWord(list.id, word)}
                            className="text-xs cursor-pointer"
                            style={{ background: "none", border: "none", color: "var(--error)" }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
