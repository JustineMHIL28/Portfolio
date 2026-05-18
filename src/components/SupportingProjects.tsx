import { useState, useCallback, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { suppotingprojectsData } from '../data/portfolio-data';
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle, CardDescription } from './ui/card';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { StaggerWords } from './ui/StaggerWords';

export const SupportingProjects = () => {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number[]>([]);
  const [showAllTech, setShowAllTech] = useState<number[]>([]);

  const project = suppotingprojectsData.find(p => p.id === selected);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">Collaborative Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Supporting Projects</h2>
          <StaggerWords
            text="Projects I've contributed to as part of collaborative teams."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {suppotingprojectsData.map((p, i) => (
              <CarouselItem key={p.id} className="pl-2 md:pl-4 basis-[90%] sm:basis-1/2 lg:basis-[34%]">
                <ProjectCard
                  project={p}
                  index={i}
                  isExpanded={expanded.includes(p.id)}
                  onToggleExpand={() => setExpanded(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  showAllTech={showAllTech.includes(p.id)}
                  onToggleTech={() => setShowAllTech(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  onViewImages={() => setSelected(p.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>
      </div>

      <ProjectDialog project={project} onClose={() => setSelected(null)} />
    </section>
  );
};

function ProjectCard({ project, index, isExpanded, onToggleExpand, showAllTech, onToggleTech, onViewImages }: any) {
  const { ref, revealed } = useReveal();
  const hasImg = project.subimage.length > 0;
  const truncate = (t: string, max = 150) => t.length <= max ? t : t.slice(0, max) + '...';
  const techs = showAllTech ? project.techimage : project.techimage.slice(0, 5);

  return (
    <div ref={ref} className={`reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <motion.div whileHover={{ y: -4 }} className="pb-4">
        <Card
          className="flex flex-col h-full rounded-xl"
        >
          <div className={`relative h-40 sm:h-44 lg:h-48 rounded-t-xl overflow-hidden bg-gradient-to-br from-green-500/5 to-emerald-500/5 ${hasImg ? 'cursor-pointer' : ''}`} onClick={hasImg ? onViewImages : undefined}>
            {hasImg ? (
              <>
                <motion.img src={project.subimage[0].src} alt={project.name} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={project.image} alt={project.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-50" />
              </div>
            )}
          </div>

          <CardContent className="flex-1 p-4 sm:p-5 pt-4">
            <CardTitle className="text-foreground mb-1">{project.name}</CardTitle>
            {project.subtitle && <p className="text-[10px] sm:text-xs text-green-400/60 mb-3">{project.subtitle}</p>}

            <CardDescription className="mb-3 sm:mb-4">
              {isExpanded ? project.description : truncate(project.description)}
            </CardDescription>
            {project.description.length > 150 && (
              <button onClick={onToggleExpand} className="text-green-400 text-xs font-semibold mb-3 self-start transition-all duration-300 hover:opacity-80">{isExpanded ? 'See Less' : 'See More'}</button>
            )}

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
              {techs.map((t: string, i: number) => (
                <motion.div key={i} whileHover={{ scale: 1.15 }} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted/50 p-0.5 sm:p-1">
                  <img src={t} alt="" className="w-full h-full object-contain" onError={e => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=T'; }} />
                </motion.div>
              ))}
              {project.techimage.length > 5 && (
                <button onClick={onToggleTech} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted/50 flex items-center justify-center text-xs text-muted-foreground hover:text-green-400 hover:bg-green-500/10 transition-all duration-300">
                  {showAllTech ? '−' : `+${project.techimage.length - 5}`}
                </button>
              )}
              {project.link && (
                <div className="ml-auto">
                  <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.link, '_blank')}>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: any; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => { setIdx(0); if (emblaApi) emblaApi.scrollTo(0); }, [project, emblaApi]);
  const onSelect = useCallback(() => { if (emblaApi) setIdx(emblaApi.selectedScrollSnap()); }, [emblaApi]);
  useEffect(() => { if (emblaApi) { emblaApi.on('select', onSelect); onSelect(); } }, [emblaApi, onSelect]);

  if (!project) return null;
  const img = project.subimage[idx];

  return (
    <Dialog open={!!project} onOpenChange={o => !o && onClose()}>
      <DialogContent className="w-screen h-[100dvh] max-w-none lg:w-[90vw] lg:h-[85vh] p-0 rounded-none lg:rounded-2xl border-none bg-background overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-[60%] flex flex-col h-[40dvh] lg:h-full bg-background">
            <div ref={emblaRef} className="flex-1 overflow-hidden">
              <div className="flex h-full">
                {project.subimage.map((s: any, i: number) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-3">
                    <img src={s.src} alt={s.title} className="max-w-full max-h-full object-contain rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between px-3 sm:px-4 py-2">
              <button onClick={() => emblaApi?.scrollPrev()} className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
              <div className="flex gap-1">
                {project.subimage.slice(0, 12).map((_: any, i: number) => (
                  <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-green-400' : 'w-2 bg-muted'}`} />
                ))}
              </div>
              <button onClick={() => emblaApi?.scrollNext()} className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300"><ChevronRight className="w-4 h-4 text-foreground" /></button>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col overflow-y-auto">
            <div className="p-4 sm:p-6 bg-green-500/5">
              <span className="text-[10px] text-green-400/50 font-mono">{idx + 1} / {project.subimage.length}</span>
              <DialogTitle className="text-base sm:text-lg font-bold text-green-400 mt-1">{img?.title || project.name}</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-2">{img?.description}</DialogDescription>
            </div>
            <div className="p-4 sm:p-6 flex-1">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-[10px] transition-all duration-300">{project.subtitle}</Badge>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mt-2 mb-2 sm:mb-3">{project.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{project.description}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techimage.map((t: string, i: number) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-muted/50 p-0.5 sm:p-1">
                    <img src={t} alt="" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
            {project.link && (
              <div className="p-4 sm:p-6">
                <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.link, '_blank')}><ExternalLink className="w-4 h-4" /></Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
