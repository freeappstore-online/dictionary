import { useState, useMemo } from "react";
import type { WordEntry } from "../data";
import { wordSet } from "../data";

interface ThesaurusViewProps {
  allWords: WordEntry[];
  onNavigateWord: (word: string) => void;
  initialWord?: string;
}

export default function ThesaurusView({ allWords, onNavigateWord, initialWord = "" }: ThesaurusViewProps) {
  const [query, setQuery] = useState(initialWord);

  const entry = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allWords.find((w) => w.word.toLowerCase() === q) ?? null;
  }, [query, allWords]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold display-font mb-4" style={{ color: "var(--ink)" }}>
        Thesaurus
      </h2>

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a word..."
        className="w-full px-4 py-3 rounded-xl text-sm outline-none mb-6"
        style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
      />

      {entry ? (
        <div>
          {/* Central word */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold display-font" style={{ color: "var(--ink)" }}>
              {entry.word}
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {entry.phonetic} — {entry.partOfSpeech}
            </p>
          </div>

          {/* Synonym clusters by definition sense */}
          <div className="space-y-6">
            {entry.definitions.map((def, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
              >
                <p className="text-xs font-medium mb-3" style={{ color: "var(--muted)" }}>
                  Sense {i + 1}: {def.text}
                </p>

                {/* Synonym web */}
                <div className="flex flex-wrap items-center justify-center gap-2 min-h-[60px]">
                  {/* Center word pill */}
                  <span
                    className="px-3 py-1.5 rounded-full text-sm font-bold"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {entry.word}
                  </span>

                  {/* Synonym pills */}
                  {def.synonyms.map((syn) => {
                    const inDict = wordSet.has(syn.toLowerCase());
                    return (
                      <button
                        key={syn}
                        onClick={() => {
                          if (inDict) {
                            onNavigateWord(syn);
                          } else {
                            setQuery(syn);
                          }
                        }}
                        className="px-3 py-1.5 rounded-full text-sm cursor-pointer transition-colors"
                        style={{
                          background: inDict ? "var(--line)" : "transparent",
                          border: inDict ? "1px solid var(--line-strong)" : "1px dashed var(--line-strong)",
                          color: inDict ? "var(--accent)" : "var(--muted)",
                        }}
                      >
                        {syn}
                        {inDict && (
                          <span className="ml-1 text-[10px]" style={{ opacity: 0.6 }}>
                            ↗
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Antonyms if any */}
                {def.antonyms.length > 0 && (
                  <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      Antonyms
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {def.antonyms.map((ant) => {
                        const inDict = wordSet.has(ant.toLowerCase());
                        return (
                          <button
                            key={ant}
                            onClick={() => {
                              if (inDict) {
                                onNavigateWord(ant);
                              } else {
                                setQuery(ant);
                              }
                            }}
                            className="px-3 py-1.5 rounded-full text-sm cursor-pointer"
                            style={{
                              background: "transparent",
                              border: "1px solid var(--error)",
                              color: "var(--error)",
                            }}
                          >
                            {ant}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : query.trim() ? (
        <div className="text-center py-12 rounded-xl" style={{ background: "var(--panel)" }}>
          <p className="text-2xl mb-2">🔍</p>
          <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
            "{query}" not found in dictionary
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Try a different word
          </p>
        </div>
      ) : (
        <div className="text-center py-12 rounded-xl" style={{ background: "var(--panel)" }}>
          <p className="text-2xl mb-2">🌐</p>
          <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
            Visual Synonym Finder
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Enter a word to see its synonym web grouped by meaning
          </p>
        </div>
      )}
    </div>
  );
}
