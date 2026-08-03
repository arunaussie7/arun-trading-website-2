/**
 * National flag fills for map hover.
 * Prefer stripe gradients where useful; otherwise dominant national color.
 */

export type FlagStyle = {
  /** CSS fill: solid color or url(#gradient-id) */
  fill: string;
  stroke: string;
  /** Optional SVG linearGradient definition */
  gradient?: {
    id: string;
    /** vertical stripes (flag-like) */
    stops: { offset: string; color: string }[];
    vertical?: boolean;
  };
};

const flag = (
  fill: string,
  stroke: string,
  gradient?: FlagStyle['gradient']
): FlagStyle => ({ fill, stroke, gradient });

/** Dominant / stripe styles keyed by Natural Earth name (lowercase). */
export const FLAG_STYLES: Record<string, FlagStyle> = {
  india: flag('url(#flag-india)', '#138808', {
    id: 'flag-india',
    vertical: true,
    stops: [
      { offset: '0%', color: '#FF9933' },
      { offset: '33%', color: '#FF9933' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#FFFFFF' },
      { offset: '66%', color: '#138808' },
      { offset: '100%', color: '#138808' },
    ],
  }),
  'united states of america': flag('url(#flag-usa)', '#B22234', {
    id: 'flag-usa',
    vertical: true,
    stops: [
      { offset: '0%', color: '#B22234' },
      { offset: '40%', color: '#FFFFFF' },
      { offset: '70%', color: '#3C3B6E' },
      { offset: '100%', color: '#3C3B6E' },
    ],
  }),
  japan: flag('url(#flag-japan)', '#BC002D', {
    id: 'flag-japan',
    vertical: false,
    stops: [
      { offset: '0%', color: '#FFFFFF' },
      { offset: '35%', color: '#FFFFFF' },
      { offset: '35%', color: '#BC002D' },
      { offset: '65%', color: '#BC002D' },
      { offset: '65%', color: '#FFFFFF' },
      { offset: '100%', color: '#FFFFFF' },
    ],
  }),
  brazil: flag('url(#flag-brazil)', '#009C3B', {
    id: 'flag-brazil',
    vertical: true,
    stops: [
      { offset: '0%', color: '#009C3B' },
      { offset: '45%', color: '#FFDF00' },
      { offset: '70%', color: '#002776' },
      { offset: '100%', color: '#002776' },
    ],
  }),
  germany: flag('url(#flag-germany)', '#DD0000', {
    id: 'flag-germany',
    vertical: true,
    stops: [
      { offset: '0%', color: '#000000' },
      { offset: '33%', color: '#000000' },
      { offset: '33%', color: '#DD0000' },
      { offset: '66%', color: '#DD0000' },
      { offset: '66%', color: '#FFCE00' },
      { offset: '100%', color: '#FFCE00' },
    ],
  }),
  france: flag('url(#flag-france)', '#002395', {
    id: 'flag-france',
    vertical: false,
    stops: [
      { offset: '0%', color: '#002395' },
      { offset: '33%', color: '#002395' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#FFFFFF' },
      { offset: '66%', color: '#ED2939' },
      { offset: '100%', color: '#ED2939' },
    ],
  }),
  italy: flag('url(#flag-italy)', '#009246', {
    id: 'flag-italy',
    vertical: false,
    stops: [
      { offset: '0%', color: '#009246' },
      { offset: '33%', color: '#009246' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#FFFFFF' },
      { offset: '66%', color: '#CE2B37' },
      { offset: '100%', color: '#CE2B37' },
    ],
  }),
  'united kingdom': flag('url(#flag-uk)', '#C8102E', {
    id: 'flag-uk',
    vertical: true,
    stops: [
      { offset: '0%', color: '#012169' },
      { offset: '35%', color: '#FFFFFF' },
      { offset: '55%', color: '#C8102E' },
      { offset: '100%', color: '#012169' },
    ],
  }),
  australia: flag('url(#flag-australia)', '#00008B', {
    id: 'flag-australia',
    vertical: true,
    stops: [
      { offset: '0%', color: '#00008B' },
      { offset: '50%', color: '#FFFFFF' },
      { offset: '75%', color: '#E4002B' },
      { offset: '100%', color: '#00008B' },
    ],
  }),
  canada: flag('url(#flag-canada)', '#FF0000', {
    id: 'flag-canada',
    vertical: false,
    stops: [
      { offset: '0%', color: '#FF0000' },
      { offset: '25%', color: '#FF0000' },
      { offset: '25%', color: '#FFFFFF' },
      { offset: '75%', color: '#FFFFFF' },
      { offset: '75%', color: '#FF0000' },
      { offset: '100%', color: '#FF0000' },
    ],
  }),
  china: flag('#DE2910', '#FFDE00'),
  'south korea': flag('#FFFFFF', '#003478'),
  'united arab emirates': flag('url(#flag-uae)', '#00732F', {
    id: 'flag-uae',
    vertical: false,
    stops: [
      { offset: '0%', color: '#00732F' },
      { offset: '25%', color: '#FFFFFF' },
      { offset: '50%', color: '#000000' },
      { offset: '75%', color: '#FF0000' },
      { offset: '100%', color: '#FF0000' },
    ],
  }),
  singapore: flag('url(#flag-singapore)', '#ED2939', {
    id: 'flag-singapore',
    vertical: true,
    stops: [
      { offset: '0%', color: '#ED2939' },
      { offset: '50%', color: '#ED2939' },
      { offset: '50%', color: '#FFFFFF' },
      { offset: '100%', color: '#FFFFFF' },
    ],
  }),
  russia: flag('url(#flag-russia)', '#0039A6', {
    id: 'flag-russia',
    vertical: true,
    stops: [
      { offset: '0%', color: '#FFFFFF' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '33%', color: '#0039A6' },
      { offset: '66%', color: '#0039A6' },
      { offset: '66%', color: '#D52B1E' },
      { offset: '100%', color: '#D52B1E' },
    ],
  }),
  spain: flag('url(#flag-spain)', '#AA151B', {
    id: 'flag-spain',
    vertical: true,
    stops: [
      { offset: '0%', color: '#AA151B' },
      { offset: '25%', color: '#AA151B' },
      { offset: '25%', color: '#F1BF00' },
      { offset: '75%', color: '#F1BF00' },
      { offset: '75%', color: '#AA151B' },
      { offset: '100%', color: '#AA151B' },
    ],
  }),
  netherlands: flag('url(#flag-netherlands)', '#21468B', {
    id: 'flag-netherlands',
    vertical: true,
    stops: [
      { offset: '0%', color: '#AE1C28' },
      { offset: '33%', color: '#AE1C28' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#FFFFFF' },
      { offset: '66%', color: '#21468B' },
      { offset: '100%', color: '#21468B' },
    ],
  }),
  switzerland: flag('#FF0000', '#FFFFFF'),
  sweden: flag('#006AA7', '#FECC00'),
  norway: flag('#BA0C2F', '#00205B'),
  denmark: flag('#C8102E', '#FFFFFF'),
  ireland: flag('url(#flag-ireland)', '#169B62', {
    id: 'flag-ireland',
    vertical: false,
    stops: [
      { offset: '0%', color: '#169B62' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#FF883E' },
      { offset: '100%', color: '#FF883E' },
    ],
  }),
  portugal: flag('#006600', '#FF0000'),
  poland: flag('url(#flag-poland)', '#DC143C', {
    id: 'flag-poland',
    vertical: true,
    stops: [
      { offset: '0%', color: '#FFFFFF' },
      { offset: '50%', color: '#FFFFFF' },
      { offset: '50%', color: '#DC143C' },
      { offset: '100%', color: '#DC143C' },
    ],
  }),
  belgium: flag('url(#flag-belgium)', '#FDDA24', {
    id: 'flag-belgium',
    vertical: false,
    stops: [
      { offset: '0%', color: '#000000' },
      { offset: '33%', color: '#FDDA24' },
      { offset: '66%', color: '#EF3340' },
      { offset: '100%', color: '#EF3340' },
    ],
  }),
  austria: flag('url(#flag-austria)', '#ED2939', {
    id: 'flag-austria',
    vertical: true,
    stops: [
      { offset: '0%', color: '#ED2939' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#ED2939' },
      { offset: '100%', color: '#ED2939' },
    ],
  }),
  mexico: flag('url(#flag-mexico)', '#006847', {
    id: 'flag-mexico',
    vertical: false,
    stops: [
      { offset: '0%', color: '#006847' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#CE1126' },
      { offset: '100%', color: '#CE1126' },
    ],
  }),
  argentina: flag('url(#flag-argentina)', '#74ACDF', {
    id: 'flag-argentina',
    vertical: true,
    stops: [
      { offset: '0%', color: '#74ACDF' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#74ACDF' },
      { offset: '100%', color: '#74ACDF' },
    ],
  }),
  'saudi arabia': flag('#006C35', '#FFFFFF'),
  turkey: flag('#E30A17', '#FFFFFF'),
  israel: flag('#0038B8', '#FFFFFF'),
  egypt: flag('url(#flag-egypt)', '#CE1126', {
    id: 'flag-egypt',
    vertical: true,
    stops: [
      { offset: '0%', color: '#CE1126' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#000000' },
      { offset: '100%', color: '#000000' },
    ],
  }),
  'south africa': flag('#007A4D', '#FFB612'),
  nigeria: flag('url(#flag-nigeria)', '#008751', {
    id: 'flag-nigeria',
    vertical: false,
    stops: [
      { offset: '0%', color: '#008751' },
      { offset: '33%', color: '#FFFFFF' },
      { offset: '66%', color: '#008751' },
      { offset: '100%', color: '#008751' },
    ],
  }),
  kenya: flag('#006600', '#BB0000'),
  indonesia: flag('url(#flag-indonesia)', '#CE1126', {
    id: 'flag-indonesia',
    vertical: true,
    stops: [
      { offset: '0%', color: '#CE1126' },
      { offset: '50%', color: '#CE1126' },
      { offset: '50%', color: '#FFFFFF' },
      { offset: '100%', color: '#FFFFFF' },
    ],
  }),
  malaysia: flag('#010066', '#FFCC00'),
  thailand: flag('#A51931', '#2D2A4A'),
  vietnam: flag('#DA251D', '#FFFF00'),
  philippines: flag('#0038A8', '#CE1126'),
  pakistan: flag('#01411C', '#FFFFFF'),
  bangladesh: flag('#006A4E', '#F42A41'),
  'sri lanka': flag('#FFB615', '#8D153A'),
  'new zealand': flag('#00247D', '#CC142B'),
  ukraine: flag('url(#flag-ukraine)', '#0057B7', {
    id: 'flag-ukraine',
    vertical: true,
    stops: [
      { offset: '0%', color: '#0057B7' },
      { offset: '50%', color: '#0057B7' },
      { offset: '50%', color: '#FFD700' },
      { offset: '100%', color: '#FFD700' },
    ],
  }),
  antarctica: flag('#5B7C99', '#A8C5D4'),
};

/** Fallback dominant colors by region keywords / continent feel */
const FALLBACK_COLORS = [
  '#C8102E',
  '#0033A0',
  '#007A33',
  '#FFCD00',
  '#FFFFFF',
  '#6C3B2A',
  '#0A3161',
];

export function getFlagStyle(countryName: string): FlagStyle {
  const key = countryName.toLowerCase().trim();
  if (FLAG_STYLES[key]) return FLAG_STYLES[key];

  // Hash to a stable dominant color (not used for counts — only visuals)
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h + key.charCodeAt(i) * (i + 1)) % 997;
  const fill = FALLBACK_COLORS[h % FALLBACK_COLORS.length];
  const stroke = fill === '#FFFFFF' ? '#CCCCCC' : '#FFFFFF';
  return flag(fill, stroke);
}

export function getAllFlagGradients() {
  return Object.values(FLAG_STYLES)
    .map((s) => s.gradient)
    .filter((g): g is NonNullable<FlagStyle['gradient']> => Boolean(g));
}
