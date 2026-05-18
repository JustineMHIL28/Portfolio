import { useReveal } from '../hooks/useReveal';
import { careerData } from '../data/portfolio-data';
import { Calendar, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { StaggerWords } from './ui/StaggerWords';

export const Career = () => {
  const { ref, revealed } = useReveal();

  return (
    <section id="career" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">Experience</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Career Journey</h2>
          <StaggerWords
            text="My professional experience and the skills I've developed."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-green-500/20 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {careerData.map((job, i) => (
              <CareerCard key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function CareerCard({ job, index }: { job: typeof careerData[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div ref={ref} className={`reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="relative pl-5 sm:pl-6 md:pl-16 group">
        <div className="absolute left-0 md:left-6 top-6 sm:top-7 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 border-[3px] border-background z-10 group-hover:scale-150 transition-transform duration-300" />

        <motion.div whileHover={{ y: -2 }} className="hover:shadow-green-500/10 transition-all duration-300">
          <Card className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-muted/50 shrink-0 group-hover:ring-2 ring-green-500/30 transition-all duration-300">
                  <img src={job.image} alt={job.company} className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/48?text=${job.company[0]}`; }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-green-400 transition-colors">{job.position}</h3>
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-green-400 text-xs sm:text-sm flex items-center gap-1 hover:underline transition-all duration-300">
                      {job.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <p className="text-green-400/70 text-xs sm:text-sm">{job.company}</p>
                  )}
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-muted-foreground mt-1 sm:mt-1.5">
                    {job.duration && <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-green-400/40" /> {job.duration}</span>}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {job.description.split('\n').map((item: string, idx: number) => (
                  <li key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-green-400 mt-0.5 shrink-0 text-[6px]">●</span>
                    <span>{item.replace('• ', '').replace('•', '')}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {job.techStack.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-[9px] sm:text-[10px] font-mono border-green-500/20 text-muted-foreground hover:border-green-500/30 hover:text-green-400 transition-colors px-1.5 sm:px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
