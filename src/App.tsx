import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
import { Career } from './components/Career';
import { Footer } from './components/Footer';

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-zinc-200 text-zinc-900
        dark:bg-background dark:text-foreground
        transition-colors duration-300
      "
    >
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