import { useEffect, useRef } from 'react';

type Variant = 'hero' | 'subtle' | 'dense';

/**
 * Doomsday command-atmosphere — no grid.
 * Constellation nodes, electric violet flares, market waveforms.
 * Inspired by cinematic war-room tech — no Marvel assets.
 */
export function LabBackground({
  variant = 'subtle',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const count = variant === 'dense' ? 58 : variant === 'hero' ? 48 : 22;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Dot = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      isNode?: boolean;
      violet?: boolean;
    };

    let dots: Dot[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth || window.innerWidth;
      h = parent?.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.32 + 0.08,
        isNode: i % 7 === 0,
        violet: i % 11 === 0,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      // Market waveforms only — no grid
      if (variant !== 'subtle') {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(18, 110, 58, 0.08)';
        ctx.lineWidth = 1.4;
        for (let x = 0; x < w; x += 8) {
          const y1 =
            h * 0.38 +
            Math.sin(x * 0.008 + time) * 22 +
            Math.cos(x * 0.015 - time * 0.5) * 10;
          if (x === 0) ctx.moveTo(x, y1);
          else ctx.lineTo(x, y1);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(160, 32, 240, 0.05)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 10) {
          const y2 =
            h * 0.68 +
            Math.cos(x * 0.006 - time * 0.8) * 28 +
            Math.sin(x * 0.012 + time) * 12;
          if (x === 0) ctx.moveTo(x, y2);
          else ctx.lineTo(x, y2);
        }
        ctx.stroke();
      }

      // Constellation / command network
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.beginPath();
        if (d.isNode) {
          const color = d.violet
            ? `rgba(160, 32, 240, ${d.a * 1.45})`
            : `rgba(18, 110, 58, ${d.a * 1.5})`;
          ctx.fillStyle = color;
          ctx.arc(d.x, d.y, d.r * 1.7, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = d.violet
            ? `rgba(191, 0, 255, ${d.a * 0.4})`
            : `rgba(30, 130, 70, ${d.a * 0.4})`;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r * 3.5, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${d.a})`;
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        }

        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dx = d.x - o.x;
          const dy = d.y - o.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 115) {
            ctx.strokeStyle = `rgba(18, 110, 58, ${0.09 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [count, variant]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Deep void vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_1%/0.92)_78%)]" />

      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Doomsday violet horizon flare */}
      {variant !== 'subtle' && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,hsl(277_70%_18%/0.22),transparent)]" />
          <div className="absolute -right-24 -top-16 size-[520px] opacity-[0.08] md:right-0 md:size-[600px]">
            <div className="absolute inset-0 rounded-full border border-primary/50 animate-spin-slow" />
            <div className="absolute inset-14 rounded-full border border-violet/35" />
            <div className="absolute inset-28 rounded-full border border-primary/20" />
          </div>
        </>
      )}

      <div
        className="absolute left-0 right-0 h-24 opacity-[0.05]"
        style={{
          background:
            'linear-gradient(180deg, transparent, hsl(148 68% 28% / 0.4), transparent)',
          animation: 'scan 12s linear infinite',
        }}
      />

      <div className="absolute -top-40 left-1/4 size-[480px] rounded-full bg-primary/[0.08] blur-[130px] animate-pulse-soft" />
      <div className="absolute bottom-[-10%] left-[8%] size-[380px] rounded-full bg-violet/[0.12] blur-[110px]" />
      <div className="absolute bottom-[-10%] right-[10%] size-[360px] rounded-full bg-violet-glow/[0.08] blur-[100px]" />
    </div>
  );
}
