import { useEffect, useState } from 'react';

export function useSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return null;

  return {
    x: position.x,
    y: position.y,
    style: {
      background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,197,94,0.06), transparent 40%)`,
      position: 'fixed' as const,
      inset: 0,
      pointerEvents: 'none' as const,
      zIndex: 1,
    },
  };
}
