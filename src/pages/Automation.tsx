import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Code2,
  LineChart,
  ShieldCheck,
  Activity,
  Workflow,
  Zap,
  CandlestickChart,
} from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { LabBackground } from '@/components/lab/LabBackground';
import { GlowCard } from '@/components/lab/GlowCard';
import { MagneticButton } from '@/components/lab/MagneticButton';
import { SectionReveal, SectionLabel } from '@/components/lab/SectionReveal';
import { AnimatedChart } from '@/components/visual/AnimatedChart';
import { SEOHead } from '@/components/seo/SEOHead';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

const stages = [
  {
    title: 'Strategy Definition',
    desc: 'We map your entry rules, exits, filters, and risk parameters into a clear algorithmic specification.',
    icon: LineChart,
  },
  {
    title: 'Custom Development',
    desc: 'Indicators, strategies, and Expert Advisors are built for TradingView, MT4, or MT5 around your exact logic.',
    icon: Code2,
  },
  {
    title: 'Risk Controls',
    desc: 'Stop loss, take profit, position sizing, and session rules are embedded so automation stays disciplined.',
    icon: ShieldCheck,
  },
  {
    title: 'Live Deployment',
    desc: 'Your tool is delivered ready for TradingView or MetaTrader — tested, documented, and trade-ready.',
    icon: Bot,
  },
];

const features = [
  {
    icon: CandlestickChart,
    title: 'TradingView Tools',
    desc: 'Custom indicators and strategies built in Pine Script for clean chart-based decision support.',
  },
  {
    icon: Activity,
    title: 'MT4 / MT5 Indicators',
    desc: 'Platform-native indicators for MetaTrader traders who need precise on-chart logic.',
  },
  {
    icon: Bot,
    title: 'Expert Advisors',
    desc: 'Fully automated MT4 and MT5 EAs that execute your strategy with rule-based discipline.',
  },
  {
    icon: Workflow,
    title: 'Strategy Conversion',
    desc: 'Turn a manual trading method into an automated system without losing the original edge.',
  },
];

const offerings = [
  'TradingView Indicators',
  'TradingView Strategies',
  'MT4 Indicators',
  'MT5 Indicators',
  'MT4 Expert Advisors',
  'MT5 Expert Advisors',
  'Strategy Automation',
  'Custom Algorithm Development',
];

export default function Automation() {
  return (
    <>
      <SEOHead
        title="Trade Automation"
        description="Custom TradingView indicators, MT4/MT5 tools, and Expert Advisor development by Arun Chitragar — algorithmic trading systems built around your rules."
      />

      <section className="relative overflow-hidden gradient-lab">
        <LabBackground variant="dense" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-10 text-center md:px-8 lg:px-10">
          <SectionReveal>
            <SectionLabel className="justify-center">ALGORITHMIC DEVELOPMENT</SectionLabel>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold uppercase tracking-tight md:text-6xl lg:text-7xl">
              AUTOMATION OVER <span className="gradient-text-signal">EMOTION.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              I build TradingView indicators, MT4/MT5 tools, and custom Expert Advisors that turn your
              trading rules into disciplined, automated systems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/contact">
                Scope A Build <ArrowRight className="size-4" />
              </MagneticButton>
              <MagneticButton href={photographerInfo.socialLinks.discord!} variant="ghost">
                <DiscordIcon className="size-4" /> Community
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="text-center">
              <SectionLabel className="justify-center">DEVELOPMENT PROCESS</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
                FOUR-STAGE BUILD
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                A clear path from your trading idea to a production-ready indicator, strategy, or Expert Advisor.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((s, i) => (
              <SectionReveal key={s.title} delay={i * 0.06}>
                <GlowCard className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </GlowCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 md:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(148_45%_8%/0.35),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <SectionLabel>WHAT I BUILD</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              ALGORITHMIC TRADING TOOLS
            </h2>
            <p className="mt-4 text-muted-foreground">
              From chart indicators to fully automated Expert Advisors — every build is tailored to your
              markets, timeframe, and risk rules.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border/70 bg-white/[0.02] p-4"
                >
                  <f.icon className="size-5 text-primary" />
                  <div className="mt-2 font-display text-sm font-semibold uppercase tracking-wide">
                    {f.title}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</div>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <GlowCard className="p-6 md:p-8" hover={false}>
              <div className="lab-label mb-3">Service Stack</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {offerings.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border/70 bg-secondary/30 px-3 py-2.5 text-sm text-foreground/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-3">
                <Zap className="size-4 shrink-0 text-primary" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  Manual strategy → automated system conversion available for clients with proven rules.
                </div>
              </div>
              <AnimatedChart className="mt-6 h-28 w-full text-foreground" />
            </GlowCard>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8 lg:px-10">
        <SectionReveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/80 bg-card/40 p-10 text-center shadow-elevated">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
              READY TO AUTOMATE YOUR EDGE?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share your strategy rules and platform preference — I will scope a custom indicator, strategy,
              or Expert Advisor build.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/contact">
                Start A Conversation <ArrowRight className="size-4" />
              </MagneticButton>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Browse Indicators
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
