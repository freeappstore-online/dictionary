import { useState, useMemo, useCallback } from "react";
import type { WordEntry } from "../data";
import type { FlashcardStats } from "../lib/storage";

interface FlashcardsProps {
  words: WordEntry[];
  label: string;
  stats: FlashcardStats;
  onUpdateStats: (stats: FlashcardStats) => void;
  onClose: () => void;
  onNavigateWord: (word: string) => void;
}

export default function Flashcards({
  words,
  label,
  stats,
  onUpdateStats,
  onClose,
  onNavigateWord,
}: FlashcardsProps) {
  const [revealed, setRevealed] = useState(false);
  const [sessionReviewed, setSessionReviewed] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build weighted deck: words marked "still learning" appear more often
  const deck = useMemo(() => {
    const weighted: WordEntry[] = [];
    for (const w of words) {
      const weight = (stats.learningWeights[w.word] ?? 0) + 1;
      for (let i = 0; i < weight; i++) {
        weighted.push(w);
      }
    }
    // Shuffle using Fisher-Yates
    for (let i = weighted.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [weighted[i], weighted[j]] = [weighted[j]!, weighted[i]!];
    }
    return weighted;
  }, [words, stats.learningWeights]);

  const currentWord = deck[currentIndex % deck.length];

  const handleKnowIt = useCallback(() => {
    const newStats: FlashcardStats = {
      ...stats,
      totalReviewed: stats.totalReviewed + 1,
      totalCorrect: stats.totalCorrect + 1,
    };
    onUpdateStats(newStats);
    setSessionReviewed((r) => r + 1);
    setSessionCorrect((c) => c + 1);
    setRevealed(false);
    setCurrentIndex((i) => i + 1);
  }, [stats, onUpdateStats]);

  const handleStillLearning = useCallback(() => {
    if (!currentWord) return;
    const newWeights = { ...stats.learningWeights };
    newWeights[currentWord.word] = (newWeights[currentWord.word] ?? 0) + 1;
    const newStats: FlashcardStats = {
      ...stats,
      totalReviewed: stats.totalReviewed + 1,
      learningWeights: newWeights,
    };
    onUpdateStats(newStats);
    setSessionReviewed((r) => r + 1);
    setRevealed(false);
    setCurrentIndex((i) => i + 1);
  }, [stats, onUpdateStats, currentWord]);

  if (!currentWord) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <p className="text-2xl mb-2">No words available</p>
        <button
          onClick={onClose}
          className="text-sm px-4 py-2 rounded-lg cursor-pointer"
          style={{ background: "var(--accent)", border: "none", color: "#fff" }}
        >
          Back
        </button>
      </div>
    );
  }

  const accuracy = sessionReviewed > 0 ? Math.round((sessionCorrect / sessionReviewed) * 100) : 0;

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-sm cursor-pointer"
          style={{ color: "var(--accent)", background: "none", border: "none" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Done
        </button>
        <h2 className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          {label}
        </h2>
        <div className="text-xs" style={{ color: "var(--muted)" }}>
          {sessionReviewed} reviewed
        </div>
      </div>

      {/* Session stats bar */}
      <div
        className="flex items-center justify-around rounded-xl p-3 mb-6"
        style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
      >
        <div className="text-center">
          <div className="text-lg font-bold" style={{ color: "var(--ink)" }}>
            {sessionReviewed}
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Reviewed
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold" style={{ color: "var(--success)" }}>
            {sessionCorrect}
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Know it
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold" style={{ color: "var(--warning)" }}>
            {sessionReviewed - sessionCorrect}
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Learning
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>
            {accuracy}%
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Accuracy
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div
        className="rounded-2xl p-8 text-center min-h-[280px] flex flex-col items-center justify-center cursor-pointer"
        style={{
          background: "var(--panel)",
          border: "2px solid var(--line)",
        }}
        onClick={() => !revealed && setRevealed(true)}
      >
        <h3 className="text-3xl font-bold display-font mb-2" style={{ color: "var(--ink)" }}>
          {currentWord.word}
        </h3>
        <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>
          {currentWord.phonetic}
        </p>
        <span
          className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded mb-4"
          style={{ background: "var(--line)", color: "var(--muted)" }}
        >
          {currentWord.partOfSpeech}
        </span>

        {!revealed ? (
          <p className="text-sm mt-4" style={{ color: "var(--accent)" }}>
            Tap to reveal definition
          </p>
        ) : (
          <div className="mt-4 space-y-3 w-full">
            {currentWord.definitions.map((def, i) => (
              <div key={i} className="text-left">
                <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                  {i + 1}. {def.text}
                </p>
                <p className="text-xs italic mt-1" style={{ color: "var(--muted)" }}>
                  "{def.example}"
                </p>
              </div>
            ))}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigateWord(currentWord.word);
              }}
              className="text-xs mt-2 cursor-pointer"
              style={{ background: "none", border: "none", color: "var(--accent)" }}
            >
              View full entry
            </button>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {revealed && (
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleStillLearning}
            className="flex-1 py-3 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "var(--panel)", border: "2px solid var(--warning)", color: "var(--warning)" }}
          >
            Still learning
          </button>
          <button
            onClick={handleKnowIt}
            className="flex-1 py-3 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "var(--success)", border: "2px solid var(--success)", color: "#fff" }}
          >
            Know it!
          </button>
        </div>
      )}
    </div>
  );
}
