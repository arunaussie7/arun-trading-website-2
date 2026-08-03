import { useEffect, useId, useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  symbol?: string;
  interval?: string;
  theme?: 'dark' | 'light';
  height?: number | string;
  className?: string;
};

declare global {
  interface Window {
    TradingView?: {
      widget: new (config: Record<string, unknown>) => unknown;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTvScript() {
  if (window.TradingView) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://s3.tradingview.com/tv.js';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('TradingView script failed'));
    document.body.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Lazy TradingView Advanced Chart — preserves widget functionality.
 */
export function TradingViewWidget({
  symbol = 'OANDA:XAUUSD',
  interval = '15',
  theme = 'dark',
  height = 420,
  className,
}: Props) {
  const id = useId().replace(/:/g, '');
  const containerId = `tv_${id}`;
  const mounted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    mounted.current = true;

    loadTvScript()
      .then(() => {
        if (cancelled || !window.TradingView) return;
        // clear previous
        const el = document.getElementById(containerId);
        if (el) el.innerHTML = '';

        new window.TradingView.widget({
          autosize: true,
          symbol,
          interval,
          timezone: 'Etc/UTC',
          theme,
          style: '1',
          locale: 'en',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          container_id: containerId,
          backgroundColor: '#050505',
          gridColor: 'rgba(255,255,255,0.04)',
          allow_symbol_change: true,
          withdateranges: true,
        });
      })
      .catch(() => {
        /* fail silently — fallback UI remains */
      });

    return () => {
      cancelled = true;
      const el = document.getElementById(containerId);
      if (el) el.innerHTML = '';
    };
  }, [containerId, symbol, interval, theme]);

  return (
    <div
      className={cn(
        'tradingview-widget-container overflow-hidden rounded-2xl border border-border/80 bg-[#050505]',
        className
      )}
      style={{ height }}
    >
      <div id={containerId} className="h-full w-full" />
    </div>
  );
}
