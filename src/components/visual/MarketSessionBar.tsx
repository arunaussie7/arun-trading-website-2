const sessions = [
  { name: 'Sydney', status: 'closed' },
  { name: 'Tokyo', status: 'closed' },
  { name: 'London', status: 'open' },
  { name: 'New York', status: 'open' },
] as const;

export function MarketSessionBar() {
  return (
    <div className="border-t border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-data text-[9px] uppercase tracking-[0.18em] text-muted-foreground shrink-0">
            <span className="text-primary">Meridian</span> · FX Sessions
          </span>
          <div className="hidden sm:flex items-center gap-3 overflow-x-auto hide-scrollbar">
            {sessions.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5 shrink-0">
                <span
                  className={`size-1.5 rounded-full ${
                    s.status === 'open' ? 'bg-bull animate-pulse' : 'bg-muted-foreground/40'
                  }`}
                />
                <span
                  className={`font-data text-[9px] uppercase tracking-[0.12em] ${
                    s.status === 'open' ? 'text-foreground/85' : 'text-muted-foreground/60'
                  }`}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 font-data text-[9px] uppercase tracking-[0.12em] text-muted-foreground shrink-0">
          <span>
            Spread <span className="text-primary">0.12</span>
          </span>
          <span className="text-border">|</span>
          <span>
            Latency <span className="text-foreground/70">42ms</span>
          </span>
        </div>
      </div>
    </div>
  );
}
