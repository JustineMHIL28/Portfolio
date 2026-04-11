// src/components/Technologies.tsx

import { motion, useInView } from 'framer-motion';
import { technologiesData } from '../data/portfolio-data';
import { useRef, useState } from 'react';

export const Technologies = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="technologies" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-emerald-500/8 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
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
            Tech Stack
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Technologies
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I work with various technologies including HTML, CSS, React, Node.js, JavaScript,
            TypeScript, and RESTful APIs to create dynamic and efficient web applications.
          </motion.p>
        </motion.div>

        {/* Mobile: 3-col | sm: 4-col | lg: 6-col */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5 md:gap-6">
          {technologiesData.map((tech, index) => (
            <motion.a
              key={tech.id}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredId(tech.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-card/50 backdrop-blur rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow:
                  hoveredId === tech.id
                    ? '0 0 30px 0 rgba(34,197,94,0.15), 0 8px 32px rgba(0,0,0,0.2)'
                    : '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Hover glow */}
              <motion.div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Border glow */}
              <motion.div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-green-500/0 group-hover:border-green-500/30 transition-all duration-300" />

              <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative"
                  animate={hoveredId === tech.id ? { rotate: [0, -5, 5, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/48?text=${tech.name.charAt(0)}`;
                    }}
                  />
                </motion.div>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-center group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  {tech.name}
                </span>
              </div>

              {/* Tooltip — hidden on mobile to avoid layout issues */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={hoveredId === tech.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none border border-green-500/20 z-50"
              >
                {tech.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};