import {
  BookOpen,
  CalendarDays,
  FileText,
  NotebookPen,
  Crosshair,
  ShieldAlert,
  Landmark,
  Radio,
} from 'lucide-react';
import {
  researchItems,
  researchMarkets,
  researchCalendar,
  researchPillars,
  newsFacts,
} from '@/data/research';
import { LabBackground } from '@/components/lab/LabBackground';
import { GlowCard } from '@/components/lab/GlowCard';
import { SectionReveal, SectionLabel } from '@/components/lab/SectionReveal';
import { MagneticButton } from '@/components/lab/MagneticButton';
import { SEOHead } from '@/components/seo/SEOHead';
import { photographerInfo } from '@/data/photographer';

const typeIcon = {
  Framework: BookOpen,
  Playbook: Crosshair,
  Filter: ShieldAlert,
  Process: NotebookPen,
  Principle: Landmark,
} as const;

export default function Research() {
  const featured = researchItems.find((r) => r.featured) ?? researchItems[0];
  const rest = researchItems.filter((r) => r.id !== featured.id);

  return (
    <>
      <SEOHead
        title="Quantitative Research"
        description="Evergreen research on why news matters, event-risk filters, liquidity sessions, and rule-based frameworks by Arun Chitragar."
      />

      <section className="relative overflow-hidden gradient-lab">
        <LabBackground variant="dense" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-10 text-center md:px-8 lg:px-10">
          <SectionReveal>
            <SectionLabel className="justify-center">QUANTITATIVE DESK</SectionLabel>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              RESEARCH BEFORE <span className="gradient-text-signal">CAPITAL.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              Evergreen frameworks — news impact, liquidity facts, structure rules, and risk process.
              No dated calls. No content that expires next week.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Markets covered */}
      <section className="border-y border-border/40 bg-white/[0.015] px-5 py-6 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 md:gap-4">
          <span className="lab-label shrink-0">Markets</span>
          {researchMarkets.map((m) => (
            <div
              key={m.symbol}
              className="rounded-lg border border-border/60 bg-background/60 px-3 py-2"
            >
              <div className="font-mono text-xs font-medium text-primary">{m.symbol}</div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{m.focus}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured: why news matters */}
      <section className="relative px-5 pt-14 md:px-8 md:pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-6">
              <SectionLabel>Foundation</SectionLabel>
              <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                Why the calendar comes{' '}
                <span className="gradient-text-signal">first</span>
              </h2>
              <div className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06}>
            <GlowCard className="overflow-hidden p-0" hover={false}>
              <div className="grid lg:grid-cols-12">
                <div className="space-y-4 border-b border-border/50 p-6 md:p-8 lg:col-span-7 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {featured.type}
                    </span>
                    <span className="lab-label">{featured.meta}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
                    <span className="gradient-text-signal">{featured.title}</span>
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {featured.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featured.markets.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[10px] text-foreground/80"
                      >
                        {m}
                      </span>
                    ))}
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/40 px-2.5 py-1 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/[0.02] p-6 md:p-8 lg:col-span-5">
                  <div className="lab-label mb-4">Standing rules</div>
                  <ul className="space-y-3">
                    {featured.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          </SectionReveal>
        </div>
      </section>

      {/* Evergreen news facts */}
      <section className="relative px-5 pt-14 md:px-8 md:pt-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-8 flex items-center gap-2">
              <Radio className="size-4 text-primary" />
              <div>
                <SectionLabel>Market Facts</SectionLabel>
                <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                  Truths that don’t{' '}
                  <span className="gradient-text-signal">expire</span>
                </h2>
                <div className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              </div>
            </div>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {newsFacts.map((fact, i) => (
              <SectionReveal key={fact.title} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border/60 bg-white/[0.02] px-5 py-5">
                  <div className="font-mono text-[10px] text-primary">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-primary">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fact.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research grid */}
      <section className="relative px-5 py-14 md:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-8">
              <SectionLabel>Research Library</SectionLabel>
              <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                Frameworks, playbooks &{' '}
                <span className="gradient-text-signal">filters</span>
              </h2>
              <div className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </SectionReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => {
              const Icon = typeIcon[item.type] ?? FileText;
              return (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <GlowCard className="flex h-full flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="size-4" strokeWidth={1.5} />
                      </div>
                      <span className="lab-label">{item.meta}</span>
                    </div>
                    <div className="mt-4 lab-label !text-primary">{item.type}</div>
                    <h2 className="mt-1.5 font-display text-base font-semibold uppercase tracking-wide">
                      <span className="gradient-text-signal">{item.title}</span>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {item.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1 size-1 shrink-0 rounded-full bg-primary/70" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.markets.map((m) => (
                        <span
                          key={m}
                          className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[9px] text-foreground/70"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event filter + pillars */}
      <section className="relative border-t border-border/40 px-5 py-14 md:px-8 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" />
              <SectionLabel>Event Risk Desk</SectionLabel>
            </div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
              Standing response to{' '}
              <span className="gradient-text-signal">news</span>
            </h2>
            <div className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              A fixed playbook for how this desk treats major events — the same gates used in
              discretionary trading and custom EA filters.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border/60">
              <div className="grid grid-cols-[1.2fr_0.6fr_1.2fr_0.9fr] gap-2 border-b border-border/50 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:px-4">
                <span>Event</span>
                <span>Impact</span>
                <span className="hidden sm:inline">Instruments</span>
                <span>Action</span>
              </div>
              {researchCalendar.map((row) => (
                <div
                  key={row.event}
                  className="grid grid-cols-[1.2fr_0.6fr_1.2fr_0.9fr] gap-2 border-b border-border/40 px-3 py-3 text-sm last:border-b-0 sm:px-4"
                >
                  <span className="font-medium text-foreground">{row.event}</span>
                  <span
                    className={
                      row.impact === 'High'
                        ? 'font-mono text-xs text-primary'
                        : 'font-mono text-xs text-muted-foreground'
                    }
                  >
                    {row.impact}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    {row.instruments}
                  </span>
                  <span className="font-mono text-xs text-foreground/80">{row.action}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="lg:col-span-5">
            <SectionLabel>Research Pillars</SectionLabel>
            <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight">
              How decisions stay{' '}
              <span className="gradient-text-signal">durable</span>
            </h2>
            <div className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            <div className="mt-6 space-y-3">
              {researchPillars.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border/60 bg-white/[0.02] px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative px-5 pb-16 md:px-8 md:pb-24 lg:px-10">
        <SectionReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border/80 bg-card/40 p-8 text-center shadow-elevated">
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
              Build with the same{' '}
              <span className="gradient-text-signal">rules</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Want these event filters and process rules inside a custom indicator or EA? Start a
              conversation.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/contact">Request Access</MagneticButton>
              <MagneticButton href={photographerInfo.socialLinks.discord!} variant="ghost">
                Discord
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
