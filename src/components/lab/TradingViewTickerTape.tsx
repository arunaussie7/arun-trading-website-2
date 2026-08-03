import { useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ensureTvWidget } from '@/lib/tvWidgets';

const DEFAULT_SYMBOLS =
  'FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD';

type Props = {
  symbols?: string;
  itemSize?: 'compact' | 'medium' | 'large';
  symbolUrl?: string;
  className?: string;
};

/**
 * TradingView Ticker Tape — mounts as soon as the preloaded custom element is ready.
 */
export function TradingViewTickerTape({
  symbols = DEFAULT_SYMBOLS,
  itemSize = 'compact',
  symbolUrl = 'Arun',
  className,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(() => Boolean(customElements.get('tv-ticker-tape')));

  useLayoutEffect(() => {
    let cancelled = false;

    ensureTvWidget('tv-ticker-tape').then(() => {
      if (cancelled || !hostRef.current) return;

      const existing = hostRef.current.querySelector('tv-ticker-tape') as HTMLElement | null;
      if (existing && existing.getAttribute('symbols') === symbols) {
        setReady(true);
        return;
      }

      hostRef.current.innerHTML = '';
      const el = document.createElement('tv-ticker-tape');
      el.setAttribute('symbols', symbols);
      el.setAttribute('item-size', itemSize);
      el.setAttribute('symbol-url', symbolUrl);
      el.style.display = 'block';
      el.style.width = '100%';
      el.style.height = '100%';
      hostRef.current.appendChild(el);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [symbols, itemSize, symbolUrl]);

  return (
    <div
      className={cn('tradingview-ticker-tape relative h-full w-full overflow-hidden', className)}
      aria-label="Market ticker tape"
    >
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center gap-4 bg-background/90 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-4 animate-pulse rounded-full bg-muted" />
              <div className="h-2 w-16 animate-pulse rounded bg-muted" />
              <div className="h-2 w-10 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      )}
      <div ref={hostRef} className="h-full w-full" />
    </div>
  );
}
