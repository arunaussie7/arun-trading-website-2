import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

const links = [
  { name: 'Indicators', path: '/portfolio' },
  { name: 'Automation', path: '/automation' },
  { name: 'Research', path: '/research' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Footer() {
  const s = photographerInfo.socialLinks;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border/70 bg-black/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary">
                AC
              </span>
              <div>
                <div className="font-display font-semibold">{photographerInfo.name}</div>
                <div className="lab-label mt-1">Trade Automator · Creator · Hustler</div>
              </div>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Premium TradingView indicators, MT4/MT5 tools, and custom Expert Advisors — built for
              traders who want systems, not noise.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="lab-label mb-4">Navigate</div>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="lab-label mb-4">Connect</div>
            <div className="flex flex-wrap gap-2">
              {[
                { href: s.discord, icon: DiscordIcon, label: 'Discord' },
                { href: s.youtube, icon: Youtube, label: 'YouTube' },
                { href: s.instagram, icon: Instagram, label: 'Instagram' },
                { href: s.linkedin, icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.02] px-3 py-2 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="size-3.5" />
                  {label}
                  <ArrowUpRight className="size-3 opacity-50" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${photographerInfo.email}`}
              className="mt-4 inline-block text-sm text-primary hover:underline"
            >
              {photographerInfo.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} {photographerInfo.name}. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Educational & systems content only. Trading involves risk. Past performance is not
            indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
