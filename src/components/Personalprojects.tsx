// src/components/PersonalProjects.tsx

import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalProjectsData } from '../data/portfolio-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState, useRef } from 'react';

export const PersonalProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="personal-projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Projects I've built independently to explore new technologies, solve problems, 
            and bring my ideas to life. Each project reflects my passion for learning and creating.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative -mx-4 px-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-background/80 backdrop-blur border border-green-500/30 rounded-full hover:bg-green-500/10 hover:border-green-500 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-green-400" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-background/80 backdrop-blur border border-green-500/30 rounded-full hover:bg-green-500/10 hover:border-green-500 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-green-400" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {personalProjectsData.map((project, index) => {
              const isExpanded = expandedProjects.includes(project.id);
              const shouldShowButton = project.description.length > 150;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start"
                >
                  <Card className="group border-none h-full flex flex-col bg-card/50 backdrop-blur overflow-hidden rounded-2xl">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-green-500/10 to-emerald-500/10 overflow-hidden border-b border-border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-bold text-green-500/10">
                          {project.name.split(' ')[0]}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                          {project.techimage.length} Technologies
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="p-8 space-y-3">
                      <CardTitle className="text-2xl font-bold group-hover:text-green-400 transition-colors line-clamp-2 leading-snug uppercase tracking-widest">
                        {project.name}
                      </CardTitle>
                      {project.subtitle && (
                        <p className="text-base text-green-400 font-semibold">{project.subtitle}</p>
                      )}
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col px-8 pb-8">
                      <div className="mb-6 flex-1">
                        <CardDescription className="text-base leading-relaxed">
                          {isExpanded ? project.description : truncateText(project.description)}
                        </CardDescription>
                        {shouldShowButton && (
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="text-green-400 hover:text-green-300 text-sm font-semibold mt-2 transition-colors"
                          >
                            {isExpanded ? 'See Less' : 'See More'}
                          </button>
                        )}
                      </div>

                      {/* Tech Stack Icons */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.techimage.slice(0, 5).map((tech, idx) => (
                          <div
                            key={idx}
                            className="w-12 h-12 rounded-xl bg-secondary/50 p-2.5 border border-border"
                          >
                            <img
                              src={tech}
                              alt="tech"
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/32?text=T';
                              }}
                            />
                          </div>
                        ))}
                        {project.techimage.length > 5 && (
                          <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center border border-border text-xs text-muted-foreground font-semibold">
                            +{project.techimage.length - 5}
                          </div>
                        )}
                      </div>

                      {/* Render Visit Site button only if link exists */}
                      {project.link && (
                        <Button
                          variant="ghost"
                          className="w-full justify-between group/btn hover:bg-green-500/10 hover:text-green-400 rounded-xl py-6 text-base font-semibold"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          Visit Site
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      )}

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicator (Optional) */}
          <div className="flex justify-center gap-2 mt-6">
            {personalProjectsData.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-green-500/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};