import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { IndicatorCard } from './IndicatorCard';

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <motion.div
      layout
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((p, i) => (
          <IndicatorCard key={p.id} project={p} index={i} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
