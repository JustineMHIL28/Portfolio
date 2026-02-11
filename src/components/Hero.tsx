// src/components/Hero.tsx

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  // Para sa GitHub Pages deployment
  const basename = process.env.PUBLIC_URL || '';
  const profileImage = `${basename}/profile.jpg`;
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mobile Background - Blurred Profile Image */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src={profileImage}
          alt="background"
          className="w-full h-full object-cover blur-3xl opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Desktop Animated Background */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
      <div className="hidden md:block absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                Justine M. Hilario
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Building modern web applications with clean code and innovative solutions.
                Specializing in React, Laravel, and full-stack development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="
                    bg-green-500
                    hover:bg-green-600
                    text-black
                    font-semibold
                    group
                    rounded-[14px]
                  "
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
                  className="
                    border-green-500/50
                    hover:border-green-500
                    hover:bg-green-500/10
                    text-black
                    dark:text-white
                    hover:text-black
                    dark:hover:text-white
                    rounded-[14px]
                  "
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

            {/* Right Column - Profile Image (Hidden on Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex relative justify-center items-center"
            >
              {/* Blurred Background Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <img 
                  src={profileImage}
                  alt="background"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover blur-2xl opacity-30"
                />
              </div>

              {/* Main Profile Image */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                
                {/* Image Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500/30 shadow-2xl shadow-green-500/20">
                  <img 
                    src={profileImage}
                    alt="Justine M. Hilario"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Decorative Rings */}
                <div className="absolute -inset-4 border border-green-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-8 border border-green-500/10 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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