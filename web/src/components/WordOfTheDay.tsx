import type { WordEntry } from "../data";

interface WordOfTheDayProps {
  entry: WordEntry;
  onLearnMore: () => void;
}

export default function WordOfTheDay({ entry, onLearnMore }: WordOfTheDayProps) {
  const firstDef = entry.definitions[0];

  return (
    <div
      className="rounded-xl p-5 mb-6"
      style={{
        background: "linear-gradient(135deg, var(--accent), #7c3aed)",
        color: "#fff",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
          Word of the Day
        </span>
      </div>
      <h2 className="text-2xl font-bold display-font mb-1">{entry.word}</h2>
      <p className="text-sm opacity-70 mb-2">{entry.phonetic}</p>
      {firstDef && (
        <>
          <p className="text-sm font-medium mb-1">{firstDef.text}</p>
          <p className="text-sm italic opacity-70">"{firstDef.example}"</p>
        </>
      )}
      <button
        onClick={onLearnMore}
        className="mt-4 text-sm font-semibold px-4 py-1.5 rounded-lg cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
        }}
      >
        Learn more
      </button>
    </div>
  );
}
