/**
 * Core types — Arun Chitragar trading & automation brand
 */

export type ProjectCategory =
  | 'smart-money'
  | 'scalping'
  | 'breakout'
  | 'order-flow'
  | 'trend-following';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  /** Primary category (first of `categories`) — used for legacy single-category UIs */
  category: ProjectCategory;
  /** All assigned filter categories for this indicator */
  categories: ProjectCategory[];
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
  /** Short marketing tagline */
  tagline?: string;
  /** Strategy / capability tags (legacy) */
  tags?: string[];
  /** Headline metric badge */
  badge?: string;
  /** One-time price in USD (display) */
  priceUsd?: number;
  /** Struck-through compare-at price in USD */
  compareAtUsd?: number;
  /** Legacy INR price (optional) */
  price?: number;
  /** Access label under price, e.g. "Lifetime Access" */
  accessLabel?: string;
  keyFeatures: string[];
  bestMarkets: string[];
  chartType?: string;
  timeframes: string[];
  platform: string;
  tradingStyles: string[];
  /** e.g. Futures & Options */
  segment?: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
  };
  portraitImage: string;
  /** Transparent PNG cutout for the home hero (no background) */
  heroPortraitImage?: string;
  /** Looping founder video (public path or absolute URL) */
  founderVideo: string;
  founderStats?: { value: string; label: string }[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType:
    | 'indicator-purchase'
    | 'custom-mt4-ea'
    | 'custom-mt5-ea'
    | 'other';
  message: string;
  timestamp: Date;
}
