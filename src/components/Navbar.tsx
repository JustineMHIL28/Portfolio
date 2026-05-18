import { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useMagneticButton } from '../hooks/useMagneticButton';

declare const process: { env: { PUBLIC_URL: string } };

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useMagneticButton(0.2);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const isDark = saved !== null ? saved === 'true' : true;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.classList.toggle('light', !next);
    localStorage.setItem('darkMode', String(next));
  };

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = `${process.env.PUBLIC_URL}/resume.docx`;
    a.download = 'Justine_Hilario_Resume.docx';
    a.click();
  };

  const links = [
    { label: 'Overview', href: '#overview' },
    { label: 'Projects', href: '#personal-projects' },
    { label: 'Experience', href: '#career' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-background/80 shadow-lg shadow-black/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div ref={logoRef} className="magnetic-btn">
          <a href="#overview" className="text-lg sm:text-xl font-bold font-[Space_Grotesk] tracking-tighter inline-block">
            <span className="text-shimmer">JMH</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-xs sm:text-sm text-muted-foreground hover:text-green-400 transition-all duration-300 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button size="sm" onClick={downloadResume} className="hidden sm:flex rounded-lg text-xs px-3 h-8 gap-1.5 group">
            <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" /> Resume
          </Button>

          <button onClick={toggleTheme} className="hidden w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110">
            {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all">
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm py-3 px-3 text-muted-foreground hover:text-green-400 hover:bg-muted/50 rounded-lg transition-all">
                  {l.label}
                </a>
              ))}
              <Button onClick={() => { downloadResume(); setMenuOpen(false); }} className="w-full rounded-lg mt-2 text-sm">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </Button>
            </div>
          </motion.div>
        )}
    </motion.header>
  );
};
