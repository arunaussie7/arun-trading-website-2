import { type ReactNode, useRef, type MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

export function GlowCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, hsl(148 68% 28% / 0.16), transparent 45%)`;

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={hover ? onMove : undefined}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-elevated backdrop-blur-xl',
        className
      )}
    >
      {hover && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
