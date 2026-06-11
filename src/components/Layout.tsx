import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  noPadding?: boolean;
  className?: string;
}

export default function Layout({ children, noPadding = false, className = '' }: LayoutProps) {
  const { pathname, hash } = useLocation();

  // Handle scrolling to hashes (for search navigation) or scroll to top on page change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <div className={`min-h-screen bg-[#0a0909] text-white/90 font-sans selection:bg-[#7cb6d3] selection:text-black ${className}`}>
      <Header />
      <main className={noPadding ? '' : 'pt-28 pb-32'}>
        {children}
      </main>
      
      {/* Global Footer */}
      <footer className="bg-[#121111] text-white/50 pt-24 pb-12 relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-4 left-6 right-6 select-none pointer-events-none text-center opacity-5 font-display font-black text-[10vw] tracking-tighter text-white leading-none">
          ux academy
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <p className="text-[10px] font-medium leading-relaxed max-w-2xl mx-auto">
            A UX Academy é uma plataforma educacional independente. O uso das ferramentas citadas (como Figma, Miro, Notion) tem caráter exclusivamente didático.
            <br />
            © 2026 UX Academy Education. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
