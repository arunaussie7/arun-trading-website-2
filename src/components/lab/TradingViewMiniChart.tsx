import { useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ensureTvWidget } from '@/lib/tvWidgets';

type Props = {
  symbol?: string;
  timeFrame?: string;
  symbolUrl?: string;
  showTimeScale?: boolean;
  className?: string;
};

/**
 * TradingView Mini Chart — mounts as soon as the preloaded custom element is ready.
 */
export function TradingViewMiniChart({
  symbol = 'OANDA:XAUUSD',
  timeFrame = 'LASTSESSION',
  symbolUrl = 'Arun',
  showTimeScale = true,
  className,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(() => Boolean(customElements.get('tv-mini-chart')));

  useLayoutEffect(() => {
    let cancelled = false;

    ensureTvWidget('tv-mini-chart').then(() => {
      if (cancelled || !hostRef.current) return;

      const existing = hostRef.current.querySelector('tv-mini-chart') as HTMLElement | null;
      if (
        existing &&
        existing.getAttribute('symbol') === symbol &&
        existing.getAttribute('time-frame') === timeFrame
      ) {
        setReady(true);
        return;
      }

      hostRef.current.innerHTML = '';
      const el = document.createElement('tv-mini-chart');
      el.setAttribute('symbol', symbol);
      el.setAttribute('time-frame', timeFrame);
      el.setAttribute('symbol-url', symbolUrl);
      if (showTimeScale) el.setAttribute('show-time-scale', '');
      el.style.display = 'block';
      el.style.width = '100%';
      el.style.height = '100%';
      hostRef.current.appendChild(el);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [symbol, timeFrame, symbolUrl, showTimeScale]);

  return (
    <div
      className={cn(
        'tradingview-mini-chart relative h-full w-full min-h-[220px] overflow-hidden',
        className
      )}
      aria-label={`${symbol} live chart`}
    >
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050505]">
          <div className="size-8 animate-pulse rounded-full border border-primary/30 bg-primary/10" />
        </div>
      )}
      <div ref={hostRef} className="h-full w-full" />
    </div>
  );
}
