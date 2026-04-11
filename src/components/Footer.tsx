// src/components/Footer.tsx

import { motion, useInView } from 'framer-motion';
import { Mail, Facebook, Github, Linkedin, FileText } from 'lucide-react';
import { footerData } from '../data/portfolio-data';
import { useRef } from 'react';

const socialIcons: Record<string, React.ComponentType<any>> = {
  Gmail: Mail,
  Facebook: Facebook,
  GitHub: Github,
  LinkedIn: Linkedin,
  Indeed: FileText,
};

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer id="contact" className="py-12 sm:py-16 border-t border-border relative overflow-hidden">
      {/* Top gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-green-500/5 rounded-full blur-3xl"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Ready to build something amazing together?</p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-2 sm:gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {footerData.map((social, index) => {
              const Icon = socialIcons[social.name] || Mail;
              return (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.08,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card flex items-center justify-center transition-all duration-300 group cursor-pointer"
                  title={social.description}
                >
                  <motion.div className="absolute inset-0 rounded-xl bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div className="absolute inset-0 rounded-xl border border-green-500/0 group-hover:border-green-500/30 transition-all duration-300" />
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-green-400 transition-colors duration-300 relative z-10" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <motion.p
            className="text-xs sm:text-sm text-muted-foreground font-mono text-center sm:text-left"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            © 2024 Justine M. Hilario. All rights reserved.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            Built with{' '}
            <motion.span className="text-green-400" whileHover={{ scale: 1.1 }} style={{ display: 'inline-block' }}>
              React
            </motion.span>
            ,{' '}
            <motion.span className="text-green-400" whileHover={{ scale: 1.1 }} style={{ display: 'inline-block' }}>
              TypeScript
            </motion.span>{' '}
            &{' '}
            <motion.span className="text-green-400" whileHover={{ scale: 1.1 }} style={{ display: 'inline-block' }}>
              shadcn/ui
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};