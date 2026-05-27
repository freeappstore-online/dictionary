import type { LookupStats, FlashcardStats } from "../lib/storage";

interface StatsViewProps {
  lookupStats: LookupStats;
  flashcardStats: FlashcardStats;
  favoritesCount: number;
}

export default function StatsView({
  lookupStats,
  flashcardStats,
  favoritesCount,
}: StatsViewProps) {
  const flashAccuracy =
    flashcardStats.totalReviewed > 0
      ? Math.round((flashcardStats.totalCorrect / flashcardStats.totalReviewed) * 100)
      : 0;

  const topLookups = Object.entries(lookupStats.perWord)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  const learningWords = Object.entries(flashcardStats.learningWeights)
    .filter(([, count]) => count > 0)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold display-font mb-6" style={{ color: "var(--ink)" }}>
        Statistics
      </h2>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="rounded-xl p-4 text-center" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            {lookupStats.totalLookups}
          </div>
          <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "var(--muted)" }}>
            Words Looked Up
          </div>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--warning)" }}>
            {favoritesCount}
          </div>
          <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "var(--muted)" }}>
            Favorites
          </div>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--success)" }}>
            {flashcardStats.totalReviewed}
          </div>
          <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "var(--muted)" }}>
            Cards Reviewed
          </div>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            {flashAccuracy}%
          </div>
          <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "var(--muted)" }}>
            Flashcard Accuracy
          </div>
        </div>
      </div>

      {/* Top looked up words */}
      {topLookups.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--ink)" }}>
            Most Looked Up Words
          </h3>
          <div className="rounded-xl overflow-hidden" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            {topLookups.map(([word, count], i) => (
              <div
                key={word}
                className="flex items-center justify-between px-4 py-2.5"
                style={{ borderBottom: i < topLookups.length - 1 ? "1px solid var(--line)" : "none" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold w-5 text-right" style={{ color: "var(--muted)" }}>
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    {word}
                  </span>
                </div>
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {count} {count === 1 ? "lookup" : "lookups"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Words still learning */}
      {learningWords.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--ink)" }}>
            Words You're Learning
          </h3>
          <div className="rounded-xl overflow-hidden" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            {learningWords.map(([word, count], i) => (
              <div
                key={word}
                className="flex items-center justify-between px-4 py-2.5"
                style={{ borderBottom: i < learningWords.length - 1 ? "1px solid var(--line)" : "none" }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                  {word}
                </span>
                <span className="text-xs" style={{ color: "var(--warning)" }}>
                  {count}x still learning
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {lookupStats.totalLookups === 0 && flashcardStats.totalReviewed === 0 && (
        <div className="text-center py-12 rounded-xl" style={{ background: "var(--panel)" }}>
          <p className="text-2xl mb-2">📊</p>
          <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
            No activity yet
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Look up words and practice flashcards to see your stats here
          </p>
        </div>
      )}
    </div>
  );
}
