import { useReveal } from '../hooks/useReveal';
import { technologiesData } from '../data/portfolio-data';

export const Technologies = () => {
  const { ref, fadeClass } = useReveal(0.1);

  return (
    <section className="section" id="technologies">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`alabel ${fadeClass}`}>
          {'✦ TECH STACK'}
        </div>
        <h2 className={`section-title ${fadeClass}`}>
          Tools I<br /><span className="stroke">use daily.</span>
        </h2>
        <p className={`section-desc ${fadeClass}`}>
          Frameworks, languages, and tools I work with to build modern web applications.
        </p>
        <div className={`tech-grid ${fadeClass}`}>
          {technologiesData.map((tech) => (
            <a href={tech.link} target="_blank" rel="noopener noreferrer" className="tech-item" key={tech.id}>
              <img src={tech.image} alt={tech.name} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span>{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
