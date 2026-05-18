import { motion } from 'framer-motion';

interface StaggerWordsProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const StaggerWords = ({ text, className = '', staggerDelay = 0.04, as: Tag = 'span' }: StaggerWordsProps) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <Tag className={className}>
      <motion.div
        style={{ display: 'inline', overflow: 'hidden' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={child} style={{ display: 'inline-block', marginRight: '0.25em' }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Tag>
  );
};
