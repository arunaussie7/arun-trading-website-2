/**
 * Shared TradingView widget script loader.
 * Scripts are also preloaded from index.html so downloads start with the page.
 */

const WIDGETS = {
  'tv-mini-chart': 'https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js',
  'tv-ticker-tape': 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js',
} as const;

export type TvWidgetTag = keyof typeof WIDGETS;

const promises = new Map<TvWidgetTag, Promise<void>>();

function injectScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.type = 'module';
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

export function ensureTvWidget(tag: TvWidgetTag): Promise<void> {
  if (customElements.get(tag)) return Promise.resolve();

  const existing = promises.get(tag);
  if (existing) return existing;

  const src = WIDGETS[tag];
  injectScript(src);

  const p = customElements.whenDefined(tag).then(() => undefined);
  promises.set(tag, p);
  return p;
}

/** Kick off home widgets as early as possible (parallel). */
export function preloadHomeTvWidgets() {
  void ensureTvWidget('tv-mini-chart');
  void ensureTvWidget('tv-ticker-tape');
}
