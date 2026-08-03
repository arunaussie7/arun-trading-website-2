import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';
import { SectionReveal } from '@/components/lab/SectionReveal';

/**
 * Capital Club layout — size & alignment matched.
 * Drop a transparent PNG (no background) into photographerInfo.portraitImage.
 */
export function FounderSection() {
  return (
    <section className="relative px-5 py-16 md:px-8 md:py-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div
            className="relative overflow-hidden rounded-lg"
            style={{
              background:
                'linear-gradient(90deg, #050505 0%, #0a0a0a 36%, #1c1d14 62%, #5c5528 100%)',
            }}
          >
            {/* Fixed horizontal banner proportions */}
            <div className="relative flex min-h-[360px] flex-col lg:min-h-[400px] lg:flex-row lg:items-stretch">
              {/* Left: badge → headline → copy → CTA */}
              <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-12 md:px-14 md:py-14 lg:max-w-[58%] lg:px-16 lg:py-16">
                <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5">
                  <div className="flex -space-x-2">
                    <span className="size-[22px] rounded-full border-2 border-[#0a0a0a] bg-[#444]" />
                    <span className="size-[22px] rounded-full border-2 border-[#0a0a0a] bg-[#666]" />
                    <span className="size-[22px] rounded-full border-2 border-[#0a0a0a] bg-[#333]" />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white">
                    Join 5K+ Operators
                  </span>
                </div>

                <h2 className="font-display text-[2.5rem] font-bold uppercase leading-[1.02] tracking-tight text-white md:text-[3.5rem] lg:text-[3.75rem]">
                  Join the network
                </h2>

                <p className="mt-5 max-w-[360px] text-[15px] leading-[1.55] text-white/70">
                  Access premium indicators, custom EA builds, and a private circle of traders who
                  build systems — not chase noise.
                </p>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-[#F2D024] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-black transition hover:brightness-105"
                  >
                    Become a member
                    <ArrowRight className="size-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Right: cutout portrait — transparent PNG, bottom-anchored */}
              <div className="relative h-[300px] shrink-0 lg:h-auto lg:w-[42%]">
                <img
                  src={photographerInfo.portraitImage}
                  alt={photographerInfo.name}
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[110%] w-auto max-w-[none] -translate-x-1/2 object-contain object-bottom lg:left-auto lg:right-0 lg:translate-x-0 lg:h-[108%]"
                />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
