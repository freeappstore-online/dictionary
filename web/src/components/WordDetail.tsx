import { useState } from "react";
import type { WordEntry } from "../data";
import type { WordList } from "../lib/storage";

interface WordDetailProps {
  entry: WordEntry;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onNavigateWord: (word: string) => void;
  onBack: () => void;
  wordLists: WordList[];
  onAddToList: (listId: string, word: string) => void;
}

const freqColors: Record<string, string> = {
  common: "var(--success)",
  uncommon: "var(--warning)",
  advanced: "var(--accent)",
};

export default function WordDetail({
  entry,
  isFavorite,
  onToggleFavorite,
  onNavigateWord,
  onBack,
  wordLists,
  onAddToList,
}: WordDetailProps) {
  const [showListPicker, setShowListPicker] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm mb-4 cursor-pointer"
        style={{ color: "var(--accent)", background: "none", border: "none" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Word header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h1 className="text-3xl font-bold display-font" style={{ color: "var(--ink)" }}>
            {entry.word}
          </h1>
          <p className="text-lg mt-1" style={{ color: "var(--muted)" }}>
            {entry.phonetic}
          </p>
        </div>
        <button
          onClick={onToggleFavorite}
          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          style={{
            background: isFavorite ? "var(--accent)" : "var(--panel)",
            border: "1px solid var(--line)",
            color: isFavorite ? "#fff" : "var(--muted)",
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      </div>

      {/* Part of speech & frequency badges */}
      <div className="flex items-center gap-2 mb-6">
        <span
          className="text-xs font-semibold uppercase px-2 py-1 rounded"
          style={{ background: "var(--line)", color: "var(--muted)" }}
        >
          {entry.partOfSpeech}
        </span>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{ color: freqColors[entry.frequency] ?? "var(--muted)" }}
        >
          {entry.frequency}
        </span>
      </div>

      {/* Definitions */}
      <div className="space-y-4 mb-6">
        {entry.definitions.map((def, i) => (
          <div key={i} className="rounded-xl p-4" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <div className="flex items-start gap-2">
              <span
                className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                  {def.text}
                </p>
                <p className="text-sm italic mt-2" style={{ color: "var(--muted)" }}>
                  "{def.example}"
                </p>

                {/* Synonyms */}
                {def.synonyms.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      Synonyms
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {def.synonyms.map((syn) => (
                        <button
                          key={syn}
                          onClick={() => onNavigateWord(syn)}
                          className="text-xs px-2 py-0.5 rounded-full cursor-pointer transition-colors"
                          style={{
                            background: "var(--line)",
                            border: "none",
                            color: "var(--accent)",
                          }}
                        >
                          {syn}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Antonyms */}
                {def.antonyms.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      Antonyms
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {def.antonyms.map((ant) => (
                        <button
                          key={ant}
                          onClick={() => onNavigateWord(ant)}
                          className="text-xs px-2 py-0.5 rounded-full cursor-pointer transition-colors"
                          style={{
                            background: "var(--line)",
                            border: "none",
                            color: "var(--error)",
                          }}
                        >
                          {ant}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Etymology card */}
      <div
        className="rounded-xl p-4 mb-6"
        style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
          Etymology
        </span>
        <p className="text-sm mt-1" style={{ color: "var(--ink)" }}>
          {entry.etymology}
        </p>
      </div>

      {/* Add to list */}
      <div className="relative mb-6">
        <button
          onClick={() => setShowListPicker(!showListPicker)}
          className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg cursor-pointer"
          style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add to word list
        </button>
        {showListPicker && (
          <div
            className="absolute left-0 top-full mt-1 w-56 rounded-lg shadow-lg z-10 py-1"
            style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
          >
            {wordLists.length === 0 ? (
              <p className="text-xs px-3 py-2" style={{ color: "var(--muted)" }}>
                No lists yet. Create one from the Lists tab.
              </p>
            ) : (
              wordLists.map((list) => (
                <button
                  key={list.id}
                  onClick={() => {
                    onAddToList(list.id, entry.word);
                    setShowListPicker(false);
                  }}
                  className="w-full text-left text-sm px-3 py-2 cursor-pointer"
                  style={{ background: "transparent", border: "none", color: "var(--ink)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--line)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {list.name}
                  {list.words.includes(entry.word) && (
                    <span className="text-[10px] ml-1" style={{ color: "var(--success)" }}>
                      (added)
                    </span>
                  )}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
