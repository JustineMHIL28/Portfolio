import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { technologiesData } from '../data/portfolio-data';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { StaggerWords } from './ui/StaggerWords';

export const Technologies = () => {
  const { ref, revealed } = useReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="technologies" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">Tech Stack</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Technologies</h2>
          <StaggerWords
            text="Tools, frameworks, and languages I work with daily."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
          {technologiesData.map((tech, i) => (
            <TechCard key={tech.id} tech={tech} index={i} hovered={hovered} onHover={setHovered} />
          ))}
        </div>
      </div>
    </section>
  );
};

function TechCard({ tech, index, hovered, onHover }: { tech: typeof technologiesData[0]; index: number; hovered: number | null; onHover: (id: number | null) => void }) {
  const { ref, revealed } = useReveal();
  const isH = hovered === tech.id;

  return (
    <div ref={ref} className={`reveal-scale ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.04}s` }}>
      <motion.a
        href={tech.link}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => onHover(tech.id)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ y: -4, scale: 1.05 }}
        className={`hover:shadow-green-500/10 transition-all duration-300 cursor-pointer relative group ${isH ? 'hover:shadow-green-500/10' : ''}`}
      >
        <Card className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 lg:p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${isH ? 'bg-green-500/10' : ''}`}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:animate-bounce">
            <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/40?text=${tech.name[0]}`; }} />
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center leading-tight group-hover:text-green-400 transition-colors">{tech.name}</span>

          {isH && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-muted border-none text-muted-foreground text-[10px] rounded whitespace-nowrap z-50 shadow-lg">
              {tech.description}
            </motion.div>
          )}
        </Card>
      </motion.a>
    </div>
  );
}
