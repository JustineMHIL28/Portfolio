// src/components/Career.tsx

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { careerData } from '../data/portfolio-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export const Career = () => {
  return (
    <section id="career" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A look at my professional experience and the skills I've developed throughout my career.
            Each role has strengthened my technical proficiency and problem-solving abilities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent" />

          <div className="space-y-12">
            {careerData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-background shadow-lg shadow-green-500/50" />

                <Card className="group border-none bg-card/50 backdrop-blur rounded-2xl shadow-none">
                  <CardHeader className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-secondary/50 flex-shrink-0 border border-border">
                          <img
                            src={job.image}
                            alt={job.company}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/64?text=${job.company.charAt(0)}`;
                            }}
                          />
                        </div>

                        <div>
                          <CardTitle className="text-2xl mb-3 group-hover:text-green-400 transition-colors leading-tight">
                            {job.position}
                          </CardTitle>
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-1 group/link text-base"
                          >
                            {job.company}
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>

                      {/* <Badge className="
                        bg-green-500/20
                        text-zinc-800
                        dark:text-green-400
                        border-green-500/50
                        w-fit
                        px-4
                        py-1
                      " style={{pointerEvents: 'none'}}
                      >
                        {job.systemUsage}
                      </Badge> */}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {job.duration}
                      </div>
                      <div className="text-green-400 font-mono font-semibold">
                        {job.period}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    {/* Description with Bullet Points */}
                    <ul className="space-y-2 mb-6 text-muted-foreground leading-relaxed">
                      {job.description.split('\n').map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>{item.replace('• ', '')}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-mono border-border/50 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};