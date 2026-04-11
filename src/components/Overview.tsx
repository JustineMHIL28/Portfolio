// src/components/Overview.tsx

import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useRef } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Building websites from start to finish using various technologies.',
    gradient: 'from-green-500/20 to-emerald-500/5',
    delay: 0,
  },
  {
    icon: Layers,
    title: 'Software Development',
    description: 'Creating software applications for various platforms.',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    delay: 0.1,
  },
  {
    icon: Plug,
    title: 'Third-Party Integration',
    description: 'Integrating third-party services and APIs into existing applications.',
    gradient: 'from-teal-500/20 to-green-500/5',
    delay: 0.2,
  },
];

export const Overview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="overview" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <motion.span
            className="text-green-400 font-mono text-sm uppercase tracking-wider inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Overview
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full Stack Developer with hands-on experience in building and maintaining scalable web
            applications using React, TypeScript, Laravel, and MySQL. Experienced in end-to-end system
            development, collaborating with teams, and delivering internal and client-facing business
            systems. Focused on clean code, performance, and continuous learning.
          </motion.p>
        </motion.div>

        {/* Mobile: 1-col | md: 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + service.delay,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Card className={`group border-none shadow-none h-full bg-card/50 backdrop-blur rounded-2xl overflow-hidden relative`}>
                  {/* Hover gradient fill */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="p-6 sm:p-8 relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5 sm:mb-6 relative">
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-green-500/30"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.8 }}
                      />
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-green-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 relative z-10">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  {/* Bottom border accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};