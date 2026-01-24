// src/components/Technologies.tsx

import { motion } from 'framer-motion';
import { technologiesData } from '../data/portfolio-data';

export const Technologies = () => {
  return (
    <section id="technologies" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            I work with various technologies including HTML, CSS, React, Node.js, JavaScript, TypeScript,
            and RESTful APIs to create dynamic and efficient web applications. I continuously explore
            emerging technologies to expand my skill set and deliver innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologiesData.map((tech, index) => (
            <motion.a
              key={tech.id}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-card/50 backdrop-blur rounded-2xl p-6 transition-all duration-300"
             >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 relative">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = `https://via.placeholder.com/48?text=${tech.name.charAt(0)}`;
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-center group-hover:text-green-400 transition-colors">
                  {tech.name}
                </span>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {tech.description}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
