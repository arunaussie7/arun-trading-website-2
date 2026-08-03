import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { photographerInfo } from '@/data/photographer';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Lab', path: '/' },
  { name: 'Indicators', path: '/portfolio' },
  { name: 'Automation', path: '/automation' },
  { name: 'Research', path: '/research' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        isScrolled ? 'glass-strong border-b border-border/60' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary shadow-glow">
            AC
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              {photographerInfo.name}
            </span>
            <span className="mt-1 max-w-[220px] truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Indicators · EAs · Automation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/[0.04] ring-1 ring-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={photographerInfo.socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-primary/35 bg-primary/10 px-3.5 py-2 text-xs font-medium text-primary transition hover:bg-primary/15"
          >
            Discord
            <ArrowUpRight className="size-3.5" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-background/95 backdrop-blur-xl">
              <div className="mt-10 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-lg text-foreground hover:bg-white/[0.04]"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={photographerInfo.socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-glow"
                >
                  Join Discord <ArrowUpRight className="size-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
