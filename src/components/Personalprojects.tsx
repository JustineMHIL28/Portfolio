// src/components/PersonalProjects.tsx
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { personalProjectsData } from '../data/portfolio-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const PersonalProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAllTech, setShowAllTech] = useState<number[]>([]);

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleShowAllTech = (projectId: number) => {
    setShowAllTech(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const openImageModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeImageModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = personalProjectsData.find(p => p.id === selectedProject);

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
          <h2 className="text-xl md:text-5xl font-bold mt-4 mb-6 tracking-wide">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Projects I've built independently to explore new technologies, solve problems, 
            and bring my ideas to life. Each project reflects my passion for learning and creating.
          </p>
        </motion.div>

        {/* SHADCN CAROUSEL */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {personalProjectsData.map((project, index) => {
              const isExpanded = expandedProjects.includes(project.id);
              const shouldShowButton = project.description.length > 150;
              const isShowingAllTech = showAllTech.includes(project.id);
              // ✅ Check if project has subimages
              const hasSubimages = project.subimage.length > 0;

              return (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group border-none shadow-none h-full flex flex-col bg-card/50 backdrop-blur overflow-hidden rounded-2xl">
                      {/* Project Image - CLICKABLE */}
                      <div 
                        className={`relative h-48 bg-gradient-to-br from-green-500/10 to-emerald-500/10 overflow-hidden border-b border-border ${hasSubimages ? 'cursor-pointer' : ''}`}
                        onClick={() => hasSubimages && openImageModal(project.id)}
                      >
                        {/* ✅ SHOW SOON.PNG IF NO SUBIMAGES, OTHERWISE SHOW FIRST SUBIMAGE */}
                        {hasSubimages ? (
                          <>
                            <img 
                              src={project.subimage[0]} 
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                            {/* DARKER OVERLAY for better text visibility */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                                View Images
                              </span>
                            </div>
                          </>
                        ) : (
                          // ✅ SHOW SOON IMAGE (project.image) IF NO SUBIMAGES
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                              src={project.image} 
                              alt={`${project.name} - Coming Soon`}
                              className="w-full h-full object-contain p-8"
                            />
                          </div>
                        )}

                        <div className="absolute top-4 right-4">
                          <Badge className="
                            bg-green-500/20
                            text-zinc-800
                            dark:text-green-400
                            border-green-500/50
                          " style={{pointerEvents: 'none'}}
                          >
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
                          {(isShowingAllTech ? project.techimage : project.techimage.slice(0, 5)).map((tech, idx) => (
                            <div
                              key={idx}
                              className="w-12 h-12 rounded-xl bg-secondary/50 p-2.5 border border-none"
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
                            <button
                              onClick={() => toggleShowAllTech(project.id)}
                              className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center border border-border text-xs text-muted-foreground font-semibold hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/50 transition-all cursor-pointer"
                            >
                              {isShowingAllTech ? '−' : `+${project.techimage.length - 5}`}
                            </button>
                          )}
                        </div>

                        {/* Visit Site button */}
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

                        {/* GitHub button */}
                        {project.github && (
                          <Button
                            variant="ghost"
                            className="w-full justify-between group/btn hover:bg-green-500/10 hover:text-green-400 rounded-xl py-6 text-base font-semibold mt-2"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            View on GitHub
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          {/* LEFT & RIGHT ARROWS */}
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur border-green-500/30 hover:bg-green-500/10 hover:border-green-500 text-green-400 hover:text-green-400" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur border-green-500/30 hover:bg-green-500/10 hover:border-green-500 text-green-400 hover:text-green-400" />
        </Carousel>
      </div>

      {/* IMAGE MODAL WITH CAROUSEL */}
      {selectedProject && selectedProjectData && selectedProjectData.subimage.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="w-full max-w-6xl relative" onClick={(e) => e.stopPropagation()}>
            <Carousel className="w-full">
              <CarouselContent>
                {selectedProjectData.subimage.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="flex items-center justify-center">
                      <img
                        src={img}
                        alt={`${selectedProjectData.name} - Image ${idx + 1}`}
                        className="max-h-[80vh] w-auto object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* WHITE ICON ARROWS - NO GREEN BACKGROUND */}
              <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white hover:text-white border-white/50 rounded-full" />
              <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white hover:text-white border-white/50 rounded-full" />
            </Carousel>

            <p className="text-white text-center mt-4 font-semibold text-lg">
              {selectedProjectData.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};