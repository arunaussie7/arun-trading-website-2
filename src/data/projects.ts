import type { Project, ProjectCategory } from '@/types';

const chartImg = (seed: string) =>
  `https://images.unsplash.com/${seed}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600`;

const COVERS = {
  confluence: chartImg('photo-1642543492481-44e81e3914a7'),
  volume: chartImg('photo-1559526324-4b87bed59979'),
  nwa: chartImg('photo-1611974765270-ca1258634369'),
  orb: chartImg('photo-1590283603385-17ffb3a7f29f'),
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'smart-money': 'Smart Money',
  scalping: 'Scalping',
  breakout: 'Breakout',
  'order-flow': 'Order Flow',
  'trend-following': 'Trend Following',
};

export const INDICATOR_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'smart-money', label: 'Smart Money' },
  { id: 'scalping', label: 'Scalping' },
  { id: 'breakout', label: 'Breakout' },
  { id: 'order-flow', label: 'Order Flow' },
  { id: 'trend-following', label: 'Trend Following' },
] as const;

function project(
  data: Omit<Project, 'category' | 'client' | 'location' | 'tags' | 'images'> & {
    categories: ProjectCategory[];
  }
): Project {
  return {
    ...data,
    category: data.categories[0],
    client: data.platform,
    location: data.timeframes.join(' · '),
    tags: data.categories.map((c) => CATEGORY_LABELS[c]),
    images: [],
  };
}

export const projects: Project[] = [
  project({
    id: '1',
    title: 'Confluence Strategy',
    categories: ['smart-money', 'trend-following', 'order-flow'],
    year: '2025',
    slug: 'confluence-strategy',
    coverImage: COVERS.confluence,
    badge: 'Smart Money',
    tagline: 'Multi-confirmation institutional setups with disciplined risk control.',
    description:
      'The Confluence Strategy combines trendline breakout confirmation, market structure analysis, and volumetric order flow to identify high-probability institutional trade setups. Instead of relying on a single indicator, it waits for multiple confirmations before entering a trade, reducing false signals and improving entry quality. Built with predefined risk management and configurable risk-to-reward settings, it provides a disciplined approach for traders seeking consistency in trending markets.',
    keyFeatures: [
      'Trendline Breakouts',
      'BOS & CHoCH Detection',
      'Volumetric Order Flow',
      'Smart Money Logic',
      'Automatic TP & SL',
      'Configurable Risk Management',
    ],
    bestMarkets: ['XAUUSD'],
    chartType: 'Heikin Ashi',
    timeframes: ['30 Minutes', '45 Minutes'],
    platform: 'TradingView',
    tradingStyles: ['Smart Money', 'Trend Following', 'Swing Trading'],
    price: 4999,
    accessLabel: 'Lifetime Access',
  }),
  project({
    id: '2',
    title: 'Volume Orderflow Strategy',
    categories: ['smart-money', 'order-flow'],
    year: '2025',
    slug: 'volume-orderflow-strategy',
    coverImage: COVERS.volume,
    badge: 'Order Flow',
    tagline: 'Institutional volume, structure, and liquidity mapped into clear entries.',
    description:
      'The Volume Orderflow Strategy is built around institutional market behavior by combining volumetric order flow, market structure breaks, and liquidity manipulation detection. It identifies high-conviction trade setups using BOS, CHoCH, volume profiles, and order blocks while filtering weaker market conditions. Designed for price action traders, it provides structured entries with predefined Stop Loss and Take Profit management.',
    keyFeatures: [
      'Volume Order Flow',
      'Order Blocks',
      'BOS & CHoCH',
      'Liquidity Sweeps',
      'Volume Profile',
      'Smart Money Concepts',
      'Automatic TP & SL',
    ],
    bestMarkets: ['XAUUSD'],
    chartType: 'Heikin Ashi',
    timeframes: ['30 Minutes', '45 Minutes'],
    platform: 'TradingView',
    tradingStyles: ['Order Flow', 'Smart Money', 'Swing Trading'],
    price: 4999,
    accessLabel: 'Lifetime Access',
  }),
  project({
    id: '3',
    title: 'NWA Scalping Strategy',
    categories: ['scalping'],
    year: '2025',
    slug: 'nwa-scalping-strategy',
    coverImage: COVERS.nwa,
    badge: 'Scalping',
    tagline: 'Nadaraya-Watson envelope scalping with ATR-based risk control.',
    description:
      'The NWA Scalping Strategy is designed for fast-paced intraday trading using the Nadaraya-Watson Envelope to identify high-probability reversal opportunities. Combined with ATR-based dynamic risk management, it adapts to changing market volatility while providing disciplined entries and exits. It is ideal for traders looking to capture short-term momentum in the Forex market.',
    keyFeatures: [
      'Nadaraya-Watson Envelope',
      'ATR Stop Loss',
      'Dynamic Risk Management',
      'Scalping Entries',
      'Buy & Sell Signals',
      'Non-Repainting Mode',
    ],
    bestMarkets: ['Major Forex Pairs', 'Minor Forex Pairs'],
    chartType: 'Candlestick',
    timeframes: ['1 Minute'],
    platform: 'TradingView',
    tradingStyles: ['Scalping', 'Intraday'],
    price: 4999,
    accessLabel: 'Lifetime Access',
  }),
  project({
    id: '4',
    title: 'ORB Strategy',
    categories: ['breakout'],
    year: '2025',
    slug: 'orb-strategy',
    coverImage: COVERS.orb,
    badge: 'Breakout',
    tagline: 'Opening range breakouts for Nifty & BankNifty with intraday controls.',
    description:
      'The ORB Strategy is built specifically for Nifty and BankNifty Futures & Options traders using the 5-minute timeframe. It captures opening range breakouts with predefined risk management, automatic break-even protection, and intraday square-off logic. The strategy focuses on high-momentum opportunities during the opening session while maintaining disciplined execution through rule-based entries and exits.',
    keyFeatures: [
      'Opening Range Detection',
      'Breakout Confirmation',
      'Automatic Break-even',
      'Risk-to-Reward Management',
      'One Trade Per Day',
      'Auto Square-off',
    ],
    bestMarkets: ['Nifty', 'BankNifty'],
    chartType: 'Candlestick',
    timeframes: ['5 Minutes'],
    platform: 'TradingView',
    tradingStyles: ['Breakout', 'Intraday', 'Momentum Trading'],
    segment: 'Futures & Options',
    price: 4999,
    accessLabel: 'Lifetime Access',
  }),
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string) =>
  category === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(category as ProjectCategory));

export const getFeaturedProjects = () => projects;

export const getAdjacentProjects = (currentSlug: string) => {
  const i = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i >= 0 && i < projects.length - 1 ? projects[i + 1] : null,
  };
};
