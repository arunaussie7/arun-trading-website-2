export type ResearchItem = {
  id: string;
  title: string;
  type: 'Framework' | 'Playbook' | 'Filter' | 'Process' | 'Principle';
  summary: string;
  meta: string;
  markets: string[];
  tags: string[];
  highlights: string[];
  featured?: boolean;
};

/** Evergreen research — principles & frameworks, not dated market calls. */
export const researchItems: ResearchItem[] = [
  {
    id: 'why-news-matters',
    title: 'Why News & Data Matter',
    type: 'Principle',
    meta: 'Core',
    featured: true,
    markets: ['XAUUSD', 'FX', 'Indices'],
    tags: ['News', 'Volatility', 'Risk'],
    summary:
      'Price does not move in a vacuum. High-impact releases reprice interest-rate expectations, risk appetite, and liquidity — often faster than any indicator can adapt. Research starts by knowing when the tape is driven by data, not structure.',
    highlights: [
      'CPI, NFP, and central-bank decisions can invalidate a clean setup in seconds',
      'Spreads widen and slippage rises around red-folder prints — size and timing matter',
      'Automation without an event filter is incomplete risk management',
      'Sitting out is a valid trade when the calendar owns the session',
    ],
  },
  {
    id: 'event-hierarchy',
    title: 'Impact Hierarchy of Market Events',
    type: 'Filter',
    meta: 'Calendar',
    markets: ['All desks'],
    tags: ['FOMC', 'CPI', 'NFP', 'RBI'],
    summary:
      'Not every headline deserves equal respect. Rank events by how reliably they move your instruments, then define a standing response — reduce size, pause entries, or stay flat.',
    highlights: [
      'Tier 1: FOMC, US CPI, NFP — treat as session-defining for gold & FX',
      'Tier 1 (India): RBI policy & major budget/gap days for Nifty & BankNifty',
      'Tier 2: Fed speakers, PMI, retail sales — tighten risk, don’t force trades',
      'Tier 3: Low-impact data — trade normally if structure and volume agree',
    ],
  },
  {
    id: 'liquidity-facts',
    title: 'Liquidity & Session Facts',
    type: 'Framework',
    meta: 'Structure',
    markets: ['XAUUSD', 'Major FX'],
    tags: ['Sessions', 'Liquidity', 'Spread'],
    summary:
      'Markets have rhythms that rarely change: Asian range, London open, New York overlap. Understanding where liquidity concentrates is more durable than any single weekly bias.',
    highlights: [
      'London open and London–NY overlap carry the bulk of FX & gold volume',
      'Thin sessions produce more false breaks and wider effective spreads',
      'Stops cluster beyond obvious highs/lows — liquidity is often the target',
      'Best setups usually appear when session flow and structure align',
    ],
  },
  {
    id: 'structure-before-signal',
    title: 'Structure Before Signal',
    type: 'Framework',
    meta: 'Method',
    markets: ['XAUUSD', 'FX', 'Nifty', 'BankNifty'],
    tags: ['BOS', 'CHoCH', 'Order Flow'],
    summary:
      'Indicators are confirmation tools, not a substitute for market structure. BOS, CHoCH, order blocks, and volume context decide whether a signal is tradable.',
    highlights: [
      'Define bias from higher-timeframe structure first',
      'Require volumetric or order-block agreement before entry',
      'One confirmation is rarely enough — confluence reduces noise',
      'If structure breaks, the signal thesis is invalid — exit the idea',
    ],
  },
  {
    id: 'orb-principles',
    title: 'Opening Range Principles',
    type: 'Playbook',
    meta: 'Intraday',
    markets: ['Nifty', 'BankNifty'],
    tags: ['ORB', 'Breakout', 'F&O'],
    summary:
      'The opening range encodes overnight positioning and early conviction. The principle is timeless: define the range, wait for acceptance beyond it, manage risk mechanically, and avoid revenge re-entries.',
    highlights: [
      'One high-quality breakout idea beats multiple forced trades',
      'Gap days and policy mornings change ORB reliability — respect the exception',
      'Break-even and square-off rules protect against afternoon mean-reversion',
      'ORB works best when volatility expands with clear directional follow-through',
    ],
  },
  {
    id: 'volatility-sizing',
    title: 'Volatility Is the Position Size',
    type: 'Principle',
    meta: 'Risk',
    markets: ['FX', 'XAUUSD'],
    tags: ['ATR', 'Sizing', 'Scalping'],
    summary:
      'The same stop distance is not the same risk when ATR doubles. Evergreen rule: let volatility set stop width and position size — especially for scalping systems like NWA.',
    highlights: [
      'Widen stops with ATR; cut size so dollar risk stays constant',
      'Compressed ATR often means chop — fewer trades, not tighter hope-stops',
      'News spikes inflate ATR temporarily — don’t treat them as a new baseline',
      'Non-repainting rules + fixed risk make results journalable and honest',
    ],
  },
  {
    id: 'journal-protocol',
    title: 'Execution & Journal Protocol',
    type: 'Process',
    meta: 'Discipline',
    markets: ['All desks'],
    tags: ['Journal', 'Prop', 'Rules'],
    summary:
      'Edge compounds when behavior is measurable. A standing journal protocol — used across gold, FX, and index desks — keeps systems honest without depending on market forecasts.',
    highlights: [
      'Log setup tag, rule followed (Y/N), risk, and grade — not just PnL',
      'Weekly adherence score matters more than any single winning day',
      'Two consecutive rule breaks → stop trading that session',
      'Separate contexts: swing structure vs scalp windows vs ORB mornings',
    ],
  },
];

export const researchMarkets = [
  { symbol: 'XAUUSD', focus: 'Structure · Order flow · Session liquidity' },
  { symbol: 'Major FX', focus: 'Volatility windows · Event filters' },
  { symbol: 'Nifty', focus: 'Opening range · Intraday momentum' },
  { symbol: 'BankNifty', focus: 'ORB principles · F&O discipline' },
];

export const researchCalendar = [
  {
    event: 'US CPI',
    impact: 'High',
    instruments: 'XAUUSD · Major FX',
    action: 'Stand down or cut size',
  },
  {
    event: 'FOMC / Rate Decision',
    impact: 'High',
    instruments: 'XAUUSD · FX',
    action: 'No new risk into print',
  },
  {
    event: 'Non-Farm Payrolls',
    impact: 'High',
    instruments: 'XAUUSD · FX',
    action: 'Flat around release',
  },
  {
    event: 'RBI Policy',
    impact: 'High',
    instruments: 'Nifty · BankNifty',
    action: 'Skip or reduce ORB',
  },
  {
    event: 'Central Bank Speakers',
    impact: 'Medium',
    instruments: 'FX · Gold',
    action: 'Tighten risk',
  },
  {
    event: 'Session Opens (London / NY / NSE)',
    impact: 'Medium',
    instruments: 'All desks',
    action: 'Primary liquidity windows',
  },
];

export const researchPillars = [
  {
    title: 'News sets the regime',
    body: 'Data and policy shift expectations. Know the calendar before you trust the chart.',
  },
  {
    title: 'Structure filters noise',
    body: 'BOS, CHoCH, and liquidity context decide if a signal deserves capital.',
  },
  {
    title: 'Volatility prices risk',
    body: 'ATR and session conditions determine size — not conviction or FOMO.',
  },
  {
    title: 'Process outlasts prediction',
    body: 'Journals, event gates, and mechanical exits work in every market year.',
  },
];

export const newsFacts = [
  {
    title: 'Rates drive gold & FX',
    body: 'Unexpected shifts in rate expectations are among the strongest persistent drivers of XAUUSD and dollar pairs.',
  },
  {
    title: 'Liquidity vanishes into prints',
    body: 'Around major releases, depth thins. The “same” stop can mean more slippage than in a quiet London hour.',
  },
  {
    title: 'Indices price policy too',
    body: 'RBI decisions and domestic macro shocks often matter more for Nifty/BankNifty than a textbook chart pattern that morning.',
  },
  {
    title: 'Automation needs the calendar',
    body: 'An EA without an event filter will trade into the exact moments human discretion usually avoids.',
  },
];
