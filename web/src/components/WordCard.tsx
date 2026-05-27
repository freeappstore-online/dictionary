import type { WordEntry } from "../data";

interface WordCardProps {
  entry: WordEntry;
  onClick: () => void;
  compact?: boolean;
}

const freqColors: Record<string, string> = {
  common: "var(--success)",
  uncommon: "var(--warning)",
  advanced: "var(--accent)",
};

export default function WordCard({ entry, onClick, compact = false }: WordCardProps) {
  const firstDef = entry.definitions[0];

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl p-4 cursor-pointer transition-all"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--line)";
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base font-bold" style={{ color: "var(--ink)" }}>
              {entry.word}
            </span>
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              {entry.phonetic}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded"
              style={{
                background: "var(--line)",
                color: "var(--muted)",
              }}
            >
              {entry.partOfSpeech}
            </span>
            <span
              className="text-[10px] font-medium px-1.5 py-0.5 rounded"
              style={{
                color: freqColors[entry.frequency] ?? "var(--muted)",
                opacity: 0.9,
              }}
            >
              {entry.frequency}
            </span>
          </div>
          {!compact && firstDef && (
            <p className="text-sm mt-1 line-clamp-2" style={{ color: "var(--muted)" }}>
              {firstDef.text}
            </p>
          )}
        </div>
        <svg
          className="w-4 h-4 shrink-0 mt-1"
          style={{ color: "var(--muted)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
