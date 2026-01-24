// src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Download } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
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
    // For live/production - force download with proper headers
    const link = document.createElement('a');
    link.href = '/resume.docx';
    link.download = 'Justine_Hilario_Resume.docx';
    link.setAttribute('download', 'Justine_Hilario_Resume.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenChat = () => {
    // Open Tawk.to chat widget
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  // Initialize Tawk.to
  useEffect(() => {
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6974c0d9b2c8d0197e141d0f/1jfo12ksu";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);
  }, []);

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
              className="border-green-500/50 hover:border-green-500 hover:bg-green-500/10 rounded-xl gap-2 text-white hover:text-white"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </Button>

            {/* Chatbot Toggle */}
            <Button
              size="sm"
              onClick={handleOpenChat}
              className="bg-green-500 hover:bg-green-600 text-black rounded-xl gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chat</span>
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};
