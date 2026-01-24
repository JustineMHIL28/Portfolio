// src/components/Projects.tsx

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolio-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';

export const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Supporting Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Here are some projects I've contributed to as part of collaborative teams.
            Each project showcases my ability to work effectively with others in building functional, efficient, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isExpanded = expandedProjects.includes(project.id);
            const shouldShowButton = project.description.length > 150;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
      </div>
    </section>
  );
};