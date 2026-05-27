type Tab = "home" | "thesaurus" | "lists" | "stats";

interface SidebarProps {
  active: Tab;
  onChange: (tab: Tab) => void;
  favoritesCount: number;
}

const navItems: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "Dictionary", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { id: "thesaurus", label: "Thesaurus", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
  { id: "lists", label: "Word Lists", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { id: "stats", label: "Statistics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

export default function Sidebar({ active, onChange, favoritesCount }: SidebarProps) {
  return (
    <aside
      className="hidden sm:flex flex-col w-56 shrink-0 h-screen"
      style={{ borderRight: "1px solid var(--line)", background: "var(--panel)" }}
    >
      {/* Brand */}
      <div className="px-4 py-4" style={{ borderBottom: "1px solid var(--line)" }}>
        <h1 className="text-lg font-bold display-font" style={{ color: "var(--ink)" }}>
          Dictionary
        </h1>
        <p className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
          FreeAppStore
        </p>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-3 px-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-pointer"
            style={{
              background: active === item.id ? "var(--line)" : "transparent",
              border: "none",
              color: active === item.id ? "var(--ink)" : "var(--muted)",
              fontWeight: active === item.id ? 600 : 400,
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            {item.label}
            {item.id === "lists" && favoritesCount > 0 && (
              <span
                className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {favoritesCount}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 text-[10px]" style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
        Dictionary — Free on FreeAppStore
      </div>
    </aside>
  );
}
