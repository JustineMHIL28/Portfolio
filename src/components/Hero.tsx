import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useReveal } from '../hooks/useReveal';
import { useMagneticButton } from '../hooks/useMagneticButton';
import { TextScramble } from './ui/TextScramble';
import { StaggerWords } from './ui/StaggerWords';

declare const process: { env: { PUBLIC_URL: string } };

export const Hero = () => {
  const { ref: r1, revealed: v1 } = useReveal(0.1);
  const { ref: r2, revealed: v2 } = useReveal(0.1);
  const { ref: r3, revealed: v3 } = useReveal(0.1);
  const magneticRef = useMagneticButton(0.3);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/background.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Green accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div ref={r1} className={`reveal-up ${v1 ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <TextScramble
              text="Available for work"
              speed={80}
              className="text-green-400 font-mono text-xs tracking-wider"
            />
          </div>
        </div>

        {/* Name */}
        <div ref={r2} className={`reveal-blur ${v2 ? 'revealed' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-6">
            <span className="block text-white">Justine</span>
            <span className="block text-shimmer">M. Hilario</span>
          </h1>
        </div>

        {/* Role + Desc */}
        <div ref={r3} className={`reveal-up ${v3 ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-lg sm:text-xl text-white/50 mb-3 font-light">Full Stack Developer</p>
          <StaggerWords
            text="Building modern web applications with clean code and innovative solutions."
            className="text-sm sm:text-base text-white/35 max-w-lg mx-auto mb-10"
            as="p"
          />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <div ref={magneticRef} className="magnetic-btn inline-block">
            <Button
              size="lg"
              onClick={() => document.getElementById('personal-projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { v: '4+', l: 'Years' },
            { v: '10+', l: 'Projects' },
            { v: '13+', l: 'Tech' },
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center cursor-default">
              <div className="text-2xl font-bold text-shimmer">{s.v}</div>
              <div className="text-xs text-white/30 mt-1">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/20 font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center p-1.5"
        >
          <ChevronDown className="w-3 h-3 text-green-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
