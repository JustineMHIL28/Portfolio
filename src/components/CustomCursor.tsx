import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const fxRef = useRef(0);
  const fyRef = useRef(0);

  useEffect(() => {
    const cur = document.getElementById('cur');
    const cur2 = document.getElementById('cur2');
    if (!cur || !cur2) return;

    const onMouse = (e: MouseEvent) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      cur!.style.left = e.clientX + 'px';
      cur!.style.top = e.clientY + 'px';
    };

    const loop = () => {
      fxRef.current += (mxRef.current - fxRef.current) * 0.07;
      fyRef.current += (myRef.current - fyRef.current) * 0.07;
      cur2!.style.left = fxRef.current + 'px';
      cur2!.style.top = fyRef.current + 'px';
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouse);
    requestAnimationFrame(loop);

    const grow = () => {
      cur!.style.width = '40px';
      cur!.style.height = '40px';
      cur!.style.background = '#c8ff00';
    };
    const shrink = () => {
      cur!.style.width = '10px';
      cur!.style.height = '10px';
      cur!.style.background = '#f0ece4';
    };

    const interactives = document.querySelectorAll('a, button, .wi, .nhire, .oc, .tech-item, .pc, .tc');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouse);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return null;
};
