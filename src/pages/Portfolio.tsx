import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { INDICATOR_FILTERS, getProjectsByCategory } from '@/data/projects';
import { IndicatorCard } from '@/components/portfolio/IndicatorCard';
import { LabBackground } from '@/components/lab/LabBackground';
import { SectionReveal, SectionLabel } from '@/components/lab/SectionReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const list = useMemo(() => getProjectsByCategory(active), [active]);

  return (
    <>
      <SEOHead
        title="Indicators & Tools"
        description="Premium TradingView strategies — Confluence, Volume Orderflow, NWA Scalping, and ORB — engineered by Arun Chitragar."
      />

      <section className="relative overflow-hidden gradient-lab">
        <LabBackground variant="dense" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-10 text-center md:px-8 lg:px-10">
          <SectionReveal>
            <SectionLabel className="justify-center">ALGORITHMIC TOOLKIT</SectionLabel>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold uppercase tracking-tight md:text-6xl lg:text-7xl">
              STRUCTURED EDGE. <span className="gradient-text-signal">ZERO NOISE.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Four premium TradingView strategies — confluence, volume orderflow, NWA scalping, and ORB.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {INDICATOR_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  'rounded-xl border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition',
                  active === f.id
                    ? 'border-primary/50 bg-primary/15 text-primary shadow-glow'
                    : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <IndicatorCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
