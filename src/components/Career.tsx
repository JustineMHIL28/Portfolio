// src/components/Career.tsx

import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { careerData } from '../data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useRef } from 'react';

function CareerCard({ job, index }: { job: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      // Mobile: pl-8 for timeline dot clearance | md: pl-20
      className="relative pl-8 md:pl-20"
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 md:left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-background shadow-lg shadow-green-500/50 z-10"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
        />
      </motion.div>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Card className="group border-none bg-card/50 backdrop-blur rounded-2xl shadow-none relative overflow-hidden">
          {/* Hover border */}
          <motion.div className="absolute inset-0 rounded-2xl border border-green-500/0 group-hover:border-green-500/20 transition-all duration-500 pointer-events-none" />
          {/* Bottom accent */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.5 }}
          />

          <CardHeader className="p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6">
              <div className="flex gap-3 sm:gap-4 items-start">
                <motion.div
                  className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-secondary/50 flex-shrink-0 border border-border"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/64?text=${job.company.charAt(0)}`;
                    }}
                  />
                </motion.div>

                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-xl mb-2 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                    {job.position}
                  </CardTitle>
                  <motion.a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-1 group/link text-sm sm:text-base"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {job.company}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400/60 shrink-0" />
                {job.location}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400/60 shrink-0" />
                {job.duration}
              </div>
              <div className="text-green-400 font-mono font-semibold">
                {job.period}
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-5 pb-5 sm:px-8 sm:pb-8">
            <ul className="space-y-2 mb-5 sm:mb-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {job.description.split('\n').map((item: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.08 + idx * 0.05 + 0.3, duration: 0.4 }}
                >
                  <span className="text-green-400 mt-1 shrink-0">•</span>
                  <span>{item.replace('• ', '')}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {job.techStack.map((tech: string, i: number) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.08 + i * 0.03 + 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="text-[10px] sm:text-xs font-mono border-border/50 hover:border-green-500/50 hover:text-green-400 transition-all duration-200 px-2 sm:px-3 py-0.5 sm:py-1 cursor-default"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export const Career = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="career" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-wide">
            Career Journey
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl">
            A look at my professional experience and the skills I've developed throughout my career.
            Each role has strengthened my technical proficiency and problem-solving abilities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent"
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={isHeaderInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          <div className="space-y-8 sm:space-y-12">
            {careerData.map((job, index) => (
              <CareerCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};