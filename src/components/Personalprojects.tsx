// src/components/PersonalProjects.tsx

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalProjectsData } from '../data/portfolio-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

export const PersonalProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAllTech, setShowAllTech] = useState<number[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    setCurrentImageIndex(0);
    if (emblaApi) emblaApi.scrollTo(0);
  }, [selectedProject, emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const toggleExpand = (id: number) =>
    setExpandedProjects((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  const toggleShowAllTech = (id: number) =>
    setShowAllTech((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  const truncateText = (text: string, max = 150) =>
    text.length <= max ? text : text.substring(0, max) + '...';

  const selectedProjectData = personalProjectsData.find((p) => p.id === selectedProject);
  const currentSubImage = selectedProjectData?.subimage[currentImageIndex];

  return (
    <section id="personal-projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-wide">
            Personal Projects
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl">
            Projects I've built independently to explore new technologies, solve problems, and bring my
            ideas to life. Each project reflects my passion for learning and creating.
          </p>
        </motion.div>

        {/* Mobile: full-width single card | md: 1/2 | lg: 1/3 */}
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {personalProjectsData.map((project, index) => {
              const isExpanded = expandedProjects.includes(project.id);
              const shouldShowButton = project.description.length > 150;
              const isShowingAllTech = showAllTech.includes(project.id);
              const hasSubimages = project.subimage.length > 0;

              return (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="h-full"
                    >
                      <Card className="group border-none shadow-none h-full flex flex-col bg-card/50 backdrop-blur overflow-hidden rounded-2xl relative">
                        {/* Hover border glow */}
                        <motion.div className="absolute inset-0 rounded-2xl border border-green-500/0 group-hover:border-green-500/20 transition-all duration-500 pointer-events-none z-10" />

                        {/* Image */}
                        <div
                          className={`relative h-44 sm:h-48 bg-gradient-to-br from-green-500/10 to-emerald-500/10 overflow-hidden border-b border-border ${hasSubimages ? 'cursor-pointer' : ''}`}
                          onClick={() => hasSubimages && setSelectedProject(project.id)}
                        >
                          {hasSubimages ? (
                            <>
                              <motion.img
                                src={project.subimage[0].src}
                                alt={project.name}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-black/0 flex items-center justify-center"
                                whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.span
                                  className="text-white font-bold text-base sm:text-lg drop-shadow-lg"
                                  initial={{ opacity: 0, y: 10 }}
                                  whileHover={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  View Images
                                </motion.span>
                              </motion.div>
                            </>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-contain p-8"
                              />
                            </div>
                          )}
                        </div>

                        <CardHeader className="p-5 sm:p-8 space-y-2 sm:space-y-3">
                          <CardTitle className="text-sm sm:text-base font-bold group-hover:text-green-400 transition-colors duration-300 line-clamp-2 leading-snug uppercase tracking-widest">
                            {project.name}
                          </CardTitle>
                          {project.subtitle && (
                            <p className="text-xs sm:text-sm text-green-400 font-semibold">{project.subtitle}</p>
                          )}
                        </CardHeader>

                        <CardContent className="flex-1 flex flex-col px-5 pb-5 sm:px-8 sm:pb-8">
                          <div className="mb-4 sm:mb-6 flex-1">
                            <CardDescription className="text-sm sm:text-base leading-relaxed">
                              {isExpanded ? project.description : truncateText(project.description)}
                            </CardDescription>
                            {shouldShowButton && (
                              <button
                                onClick={() => toggleExpand(project.id)}
                                className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-semibold mt-2 transition-colors"
                              >
                                {isExpanded ? 'See Less' : 'See More'}
                              </button>
                            )}
                          </div>

                          {/* Tech icons */}
                          <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-7">
                            {(isShowingAllTech ? project.techimage : project.techimage.slice(0, 5)).map(
                              (tech: string, idx: number) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.15, y: -3 }}
                                  transition={{ duration: 0.2 }}
                                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-secondary/50 p-2 sm:p-2.5 border border-none"
                                >
                                  <img
                                    src={tech}
                                    alt="tech"
                                    className="w-full h-full object-contain"
                                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32?text=T'; }}
                                  />
                                </motion.div>
                              )
                            )}
                            {project.techimage.length > 5 && (
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                onClick={() => toggleShowAllTech(project.id)}
                                className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-secondary/50 flex items-center justify-center border border-border text-[10px] sm:text-xs text-muted-foreground font-semibold hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/50 transition-all cursor-pointer"
                              >
                                {isShowingAllTech ? '−' : `+${project.techimage.length - 5}`}
                              </motion.button>
                            )}
                          </div>

                          {project.link && (
                            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                              <Button
                                variant="ghost"
                                className="w-full justify-between group/btn hover:bg-green-500/10 hover:text-green-400 rounded-xl py-4 sm:py-6 text-sm sm:text-base font-semibold"
                                onClick={() => window.open(project.link, '_blank')}
                              >
                                Visit Site
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          )}
                          {project.github && (
                            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                              <Button
                                variant="ghost"
                                className="w-full justify-between group/btn hover:bg-green-500/10 hover:text-green-400 rounded-xl py-4 sm:py-6 text-sm sm:text-base font-semibold"
                                onClick={() => window.open(project.github, '_blank')}
                              >
                                View on GitHub
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur border-green-500/30 hover:bg-green-500/10 hover:border-green-500 text-green-400 hover:text-green-400" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur border-green-500/30 hover:bg-green-500/10 hover:border-green-500 text-green-400 hover:text-green-400" />
        </Carousel>
      </div>

      {/* Dialog — full screen on mobile, floating on desktop */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open: boolean) => !open && setSelectedProject(null)}
      >
        <DialogContent className="w-screen h-[100dvh] max-w-none lg:w-[92vw] lg:max-w-[92vw] lg:h-[88vh] p-0 gap-0 rounded-none lg:rounded-2xl border-0 lg:border border-border bg-background overflow-hidden">
          {selectedProjectData && (
            <motion.div
              className="flex flex-col lg:flex-row w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Panel */}
              <div className="w-full lg:w-[60%] flex flex-col shrink-0 h-[42dvh] sm:h-[45dvh] lg:h-full bg-black/20">
                <div className="flex-1 min-h-0 overflow-hidden" ref={emblaRef}>
                  <div className="flex h-full">
                    {selectedProjectData.subimage.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Carousel controls */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollPrev}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </motion.button>
                  <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px] sm:max-w-[220px]">
                    {selectedProjectData.subimage.slice(0, 12).map((_, i) => (
                      <motion.button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        animate={{
                          width: i === currentImageIndex ? 16 : 8,
                          backgroundColor:
                            i === currentImageIndex ? 'rgb(74,222,128)' : 'rgba(255,255,255,0.25)',
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-1.5 sm:h-2 rounded-full"
                      />
                    ))}
                    {selectedProjectData.subimage.length > 12 && (
                      <span className="text-white/40 text-xs self-center ml-1">
                        +{selectedProjectData.subimage.length - 12}
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollNext}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Info Panel */}
              <div className="w-full lg:w-[40%] flex-1 lg:flex-none lg:h-full flex flex-col overflow-y-auto lg:border-l lg:border-border">
                <motion.div
                  className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 bg-green-500/5 shrink-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <span className="text-[10px] text-green-400/50 font-mono uppercase tracking-widest">
                    Screen {currentImageIndex + 1} of {selectedProjectData.subimage.length}
                  </span>
                  <DialogTitle className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-widest leading-tight mt-1 text-green-400">
                    {currentSubImage?.title || selectedProjectData.name}
                  </DialogTitle>
                  <p className="text-[10px] sm:text-xs text-green-400/70 font-semibold mt-1 uppercase tracking-wider">
                    {currentSubImage?.subtitle || selectedProjectData.subtitle}
                  </p>
                  <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                    {currentSubImage?.description || ''}
                  </DialogDescription>
                </motion.div>

                <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-3 sm:gap-4 flex-1">
                  <div>
                    <Badge className="mb-2 bg-green-500/10 text-green-400 border-green-500/30 text-[10px] sm:text-xs uppercase tracking-widest">
                      {selectedProjectData.subtitle || 'Project'}
                    </Badge>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest leading-snug">
                      {selectedProjectData.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProjectData.description}
                  </p>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProjectData.techimage.map((tech: string, idx: number) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.15, y: -3 }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-secondary/50 p-1 sm:p-1.5 border border-border"
                        >
                          <img
                            src={tech}
                            alt="tech"
                            className="w-full h-full object-contain"
                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32?text=T'; }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {(selectedProjectData.link || selectedProjectData.github) && (
                  <div className="flex flex-col gap-2 px-4 sm:px-6 py-4 sm:py-5 shrink-0 border-t border-border">
                    {selectedProjectData.link && (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold rounded-xl py-3 sm:py-4 text-sm"
                          onClick={() => window.open(selectedProjectData.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" /> Visit Site
                        </Button>
                      </motion.div>
                    )}
                    {selectedProjectData.github && (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          className="w-full border-green-500/30 hover:bg-green-500/10 hover:text-green-400 rounded-xl py-3 sm:py-4 text-sm"
                          onClick={() => window.open(selectedProjectData.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" /> View on GitHub
                        </Button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};