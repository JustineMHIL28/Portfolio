import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Overview } from './components/Overview';
import { Technologies } from './components/Technologies';
import { Skills } from './components/Skills';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
import { Career } from './components/Career';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <ThreeBackground />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <About />
      <Overview />
      <Technologies />
      <Skills />
      <section id="work">
        <PersonalProjects />
        <SupportingProjects />
      </section>
      <Career />
      <Footer />
    </>
  );
}

export default App;
