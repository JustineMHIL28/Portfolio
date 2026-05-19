import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: string;
  onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nlogo">JMH — 2025</div>
      <div className="nlinks">
        <a href="#work">work</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <i className="ti ti-sun" /> : <i className="ti ti-moon" />}
        </button>
      </div>
      <div className="nhire">available ✦</div>
    </nav>
  );
};
