import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Hide custom cursor over the interactive map for clearer country hover
      if (target?.closest('.interactive-world-map')) {
        setVisible(false);
        setHovered(false);
        return;
      }
      if (!visible) setVisible(true);
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer ambient glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: hovered ? 2.4 : 1,
            opacity: hovered ? 0.35 : 0.15,
          }}
          transition={{ duration: 0.2 }}
          className="size-16 rounded-full bg-primary blur-md"
        />
      </motion.div>

      {/* Center sharp dot / ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: hovered ? 1.5 : 1,
            borderColor: hovered ? 'hsl(148 68% 28%)' : 'rgba(255,255,255,0.4)',
            backgroundColor: hovered ? 'rgba(18, 110, 58, 0.2)' : 'rgba(255,255,255,0.9)',
          }}
          transition={{ duration: 0.15 }}
          className="size-3.5 rounded-full border border-white/40 shadow-glow"
        />
      </motion.div>
    </div>
  );
}
