import { useRef, useState, type ReactNode, type MouseEvent, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type CommonProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

type HoneycombButtonProps =
  | (CommonProps & { to: string; href?: never; onClick?: never; type?: never })
  | (CommonProps & { href: string; to?: never; onClick?: never; type?: never })
  | (CommonProps & {
      to?: never;
      href?: never;
      onClick?: () => void;
      type?: 'button' | 'submit';
    });

/**
 * Desk CTA — clean institutional button with cursor shine.
 */
export function HoneycombButton(props: HoneycombButtonProps) {
  const { children, className, glow = true } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / Math.max(r.width, 1)) * 100,
      y: ((e.clientY - r.top) / Math.max(r.height, 1)) * 100,
    });
  };

  const shineStyle: CSSProperties = {
    background: `radial-gradient(circle 100px at ${pos.x}% ${pos.y}%, hsl(208 100% 80% / 0.28), transparent 65%)`,
    opacity: active ? 1 : 0,
    transition: 'opacity 140ms ease',
  };

  const shellClass = cn(
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-3 text-sm font-medium',
    'isolate select-none transition-transform duration-200 hover:-translate-y-0.5',
    glow && 'shadow-glow-emerald',
    className
  );

  const layers = (
    <>
      <span className="pointer-events-none absolute inset-0 z-0" style={shineStyle} aria-hidden />
      <span
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const track = {
    onMouseMove: onMove,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
  };

  if ('to' in props && props.to) {
    return (
      <div ref={ref} className="inline-flex" {...track}>
        <Link to={props.to} className={shellClass}>
          {layers}
        </Link>
      </div>
    );
  }

  if ('href' in props && props.href) {
    return (
      <div ref={ref} className="inline-flex" {...track}>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={shellClass}
        >
          {layers}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="inline-flex" {...track}>
      <button type={props.type ?? 'button'} onClick={props.onClick} className={shellClass}>
        {layers}
      </button>
    </div>
  );
}
