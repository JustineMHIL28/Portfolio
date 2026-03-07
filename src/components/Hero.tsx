// src/components/Hero.tsx

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const basename = process.env.PUBLIC_URL || '';
  const profileImage = `${basename}/profile.jpg`;

  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
      {/* Blurred Background Image - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={profileImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-6"
              >
                <Sparkles className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
              >
                Justine M.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Building modern web applications with clean code and innovative solutions.
                Specializing in React, Laravel, TypeScript and full-stack development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold group rounded-[14px]"
                  onClick={() =>
                    document
                      .getElementById('personal-projects')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/50 hover:border-green-500 hover:bg-green-500/10 text-black dark:text-white hover:text-black dark:hover:text-white rounded-[14px]"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};