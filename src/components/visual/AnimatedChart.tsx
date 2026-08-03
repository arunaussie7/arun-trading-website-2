import { motion } from 'framer-motion';

/**
 * Animated SVG candlestick chart for hero / fintech sections.
 * Pure SVG, no external deps, theme-aware via currentColor + emerald token.
 */
export function AnimatedChart({ className = '' }: { className?: string }) {
  // Pseudo candles
  const candles = Array.from({ length: 24 }, (_, i) => {
    const seed = Math.sin(i * 1.7) * 0.5 + Math.cos(i * 0.6) * 0.3;
    const mid = 60 + seed * 20 + i * 0.6;
    const range = 4 + Math.abs(Math.sin(i * 1.3)) * 8;
    const body = 2 + Math.abs(Math.cos(i * 0.9)) * 6;
    const up = i % 3 !== 1;
    return { x: 20 + i * 18, mid, range, body, up };
  });

  // Smooth area path
  const points = candles.map((c, i) => `${20 + i * 18},${c.mid}`).join(' L ');
  const areaPath = `M 20,${candles[0].mid} L ${points} L ${20 + (candles.length - 1) * 18},120 L 20,120 Z`;
  const linePath = `M 20,${candles[0].mid} L ${points}`;

  return (
    <svg
      viewBox="0 0 460 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="emeraldArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--bull))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--bull))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="emeraldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--bull))" />
          <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[20, 50, 80, 110].map((y) => (
        <line
          key={y}
          x1="0"
          x2="460"
          y1={y}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.06"
          strokeDasharray="2 4"
        />
      ))}

      {/* candles */}
      {candles.map((c, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
        >
          <line
            x1={c.x}
            x2={c.x}
            y1={c.mid - c.range}
            y2={c.mid + c.range}
            stroke={c.up ? 'hsl(var(--bull-glow))' : 'hsl(var(--ruby))'}
            strokeOpacity="0.7"
            strokeWidth="1"
          />
          <rect
            x={c.x - 4}
            y={c.mid - c.body}
            width="8"
            height={c.body * 2}
            rx="1"
            fill={c.up ? 'hsl(var(--bull))' : 'hsl(var(--ruby))'}
            fillOpacity={c.up ? 0.9 : 0.7}
          />
        </motion.g>
      ))}

      {/* smooth line */}
      <motion.path
        d={areaPath}
        fill="url(#emeraldArea)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />
      <motion.path
        d={linePath}
        stroke="url(#emeraldLine)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* live dot */}
      <motion.circle
        cx={20 + (candles.length - 1) * 18}
        cy={candles[candles.length - 1].mid}
        r="4"
        fill="hsl(var(--gold-glow))"
        animate={{ opacity: [1, 0.4, 1], r: [4, 6, 4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}
