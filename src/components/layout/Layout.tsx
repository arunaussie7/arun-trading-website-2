import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="relative flex min-h-screen flex-col noise">
      <CustomCursor />
      <Header />
      <main
        id="main-content"
        className={`relative z-10 flex-1 ${isHomepage ? '' : 'pt-20 md:pt-24'}`}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
