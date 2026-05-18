import { useEffect, useState, useCallback } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

interface TextScrambleProps {
  text: string;
  speed?: number;
  trigger?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const TextScramble = ({ text, speed = 50, trigger = true, className = '', as: Tag = 'span' }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);

  const scramble = useCallback(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }
    let iteration = 0;
    const original = text;
    const interval = setInterval(() => {
      setDisplayText(
        original
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return original[i];
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join('')
      );
      if (iteration >= original.length) {
        clearInterval(interval);
      }
      iteration += 1 / speed * 10;
    }, 30);
  }, [text, speed, trigger]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  return <Tag className={className}>{displayText}</Tag>;
};
