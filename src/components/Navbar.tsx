// src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Moon, Sun, Download } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dark mode
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    // Use process.env.PUBLIC_URL - automatic to sa React based sa package.json homepage
    link.href = `${process.env.PUBLIC_URL}/resume.docx`;
    link.download = 'Justine_Hilario_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-gradient">JMH</span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            {/* Dark Mode Toggle */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-10 h-10 rounded-xl hover:bg-green-500/10"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-green-400" />
              ) : (
                <Moon className="w-5 h-5 text-green-400" />
              )}
            </Button> */}

            {/* Resume Download */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="
                border-green-500/50
                hover:border-green-500
                hover:bg-green-500/10
                rounded-xl
                gap-2
                text-black
                dark:text-white
                hover:text-black
                dark:hover:text-white
              "
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};