// src/App.tsx

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/Personalprojects';
import { Projects } from './components/Projects';
import { Career } from './components/Career';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <Hero />
      <Overview />
      <Technologies />
      <PersonalProjects />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
