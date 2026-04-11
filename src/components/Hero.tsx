// src/components/Hero.tsx

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

// ✅ Fix: declare process so TypeScript stops complaining — CRA injects this at build time
declare const process: { env: { PUBLIC_URL: string } };

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

export const Hero = () => {
  const basename = process.env.PUBLIC_URL || '';
  const profileImage = `${basename}/profile.jpg`;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <img
          src={profileImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 80% at 20% 40%, rgba(34,197,94,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 80% 80% at 80% 60%, rgba(16,185,129,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 80% 80% at 50% 20%, rgba(34,197,94,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 80% 80% at 20% 40%, rgba(34,197,94,0.08) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-green-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="container mx-auto px-6 relative z-10 pt-24 pb-20"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mb-6 justify-center md:justify-start"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="w-5 h-5 text-green-400" />
                </motion.div>
                <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
              >
                {'Justine M.'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.04,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Building modern web applications with clean code and innovative solutions.
                Specializing in React, Laravel, TypeScript and full-stack development.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-semibold group rounded-[14px] relative overflow-hidden"
                    onClick={() =>
                      document.getElementById('personal-projects')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-green-500/50 hover:border-green-500 hover:bg-green-500/10 text-black dark:text-white hover:text-black dark:hover:text-white rounded-[14px] transition-all duration-300"
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          className="text-xs text-muted-foreground font-mono uppercase tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          scroll
        </motion.span>
        <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};