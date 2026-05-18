import { useReveal } from '../hooks/useReveal';
import { Code2, Layers, Plug } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { StaggerWords } from './ui/StaggerWords';

const services = [
  { icon: Code2, title: 'Website Development', desc: 'Building websites from start to finish using various technologies.', num: '01' },
  { icon: Layers, title: 'Software Development', desc: 'Creating software applications for various platforms.', num: '02' },
  { icon: Plug, title: 'Third-Party Integration', desc: 'Integrating third-party services and APIs into existing applications.', num: '03' },
];

export const Overview = () => {
  const { ref: hRef, revealed: hVis } = useReveal();

  return (
    <section id="overview" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={hRef} className={`reveal-blur ${hVis ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">What I Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Overview</h2>
          <StaggerWords
            text="Full Stack Developer with hands-on experience in building scalable web applications using React, TypeScript, Laravel, and MySQL."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div ref={ref} className={`reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <motion.div whileHover={{ y: -4 }} className="hover:shadow-green-500/10 transition-all duration-300 h-full">
        <Card className="h-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
          <CardContent className="p-5 sm:p-6 lg:p-8">
            <span className="text-3xl sm:text-4xl font-bold text-foreground/5 float-right group-hover:text-green-500/10 transition-colors duration-500">{service.num}</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
              <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-green-400 transition-colors duration-300">{service.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
