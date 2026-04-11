// src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useScroll } from 'framer-motion';

// ✅ Fix: declare process so TypeScript stops complaining — CRA injects this at build time
declare const process: { env: { PUBLIC_URL: string } };

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) setDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  void darkMode;
  void setDarkMode;
  void scrollY;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.docx`;
    link.download = 'Justine_Hilario_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? `blur(12px)` : 'none',
        borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid transparent',
        background: scrolled ? 'hsl(var(--background) / 0.85)' : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl font-bold relative group cursor-pointer"
        >
          <span className="text-gradient relative z-10">JMH</span>
          <motion.span
            className="absolute -inset-2 rounded-lg bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="border-green-500/50 hover:border-green-500 hover:bg-green-500/10 rounded-xl gap-2 text-black dark:text-white hover:text-black dark:hover:text-white transition-all duration-300 text-sm px-3 sm:px-4"
            >
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Download className="w-4 h-4" />
              </motion.span>
              <span className="hidden sm:inline">Resume</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.nav>
  );
};