import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
import { Career } from './components/Career';
import { Footer } from './components/Footer';
import { useSpotlight } from './hooks/useSpotlight';

function App() {
  const spotlight = useSpotlight();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {spotlight && <div style={spotlight.style} />}
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Overview />
      <Technologies />
      <PersonalProjects />
      <SupportingProjects />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
