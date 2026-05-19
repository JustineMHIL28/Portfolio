import { useEffect, useState, useCallback, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { TextScramble } from './ui/TextScramble';

const stats = [
  { id: 'st1', n: 4, s: '+', label: 'YEARS EXP' },
  { id: 'st2', n: 11, s: '+', label: 'PROJECTS' },
  { id: 'st3', n: 13, s: '+', label: 'TECH STACK' },
];

const profilePics = [
  { src: `${process.env.PUBLIC_URL}/assets/profile/IMG_0150.jpg`, alt: 'Focused & Ready' },
  { src: `${process.env.PUBLIC_URL}/assets/profile/IMG_0212.jpg`, alt: 'On the Job' },
  { src: `${process.env.PUBLIC_URL}/assets/profile/IMG_0224.jpg`, alt: 'Code Mode' },
  { src: `${process.env.PUBLIC_URL}/assets/profile/IMG_0225.jpg`, alt: 'Developer Vibe' },
];

export const About = () => {
  const { ref, revealed, fadeClass } = useReveal(0.1);
  const [picIdx, setPicIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const startSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setPicIdx(prev => (prev + 1) % profilePics.length);
    }, 3000);
  }, []);

  useEffect(() => {
    startSlide();
    return () => clearInterval(intervalRef.current);
  }, [startSlide]);

  const goTo = (i: number) => {
    clearInterval(intervalRef.current);
    setPicIdx(i);
    startSlide();
  };

  useEffect(() => {
    if (!revealed) return;
    const timers: NodeJS.Timeout[] = [];
    stats.forEach(({ id, n, s }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = '0';
      let c = 0;
      const t = setInterval(() => {
        c = Math.min(c + 1, n);
        el!.textContent = c + s;
        if (c >= n) clearInterval(t);
      }, 40);
      timers.push(t);
    });
    return () => timers.forEach(clearInterval);
  }, [revealed]);

  return (
    <section className="about" id="about">
      <div ref={ref} className={fadeClass}>
        <div className="alabel">{'✦ ABOUT ME'}</div>
        <h2 className="atitle">
          Code is my<br />
          <TextScramble text="craft." className="stroke" as="span" trigger={revealed} />
        </h2>
        <p className="abody">
          I'm Justine M. Hilario, a web developer from the Philippines passionate about building fast, scalable, and visually engaging web applications — from database to pixel-perfect frontends.
        </p>
        <p className="abody">
          I specialize in React, TypeScript, and Laravel, combining modern frontend frameworks with robust backend systems to deliver complete digital solutions.
        </p>
        <div className="astats">
          {stats.map(s => (
            <div key={s.id}>
              <div className="astat-n" id={s.id}>0</div>
              <div className="astat-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="aphoto">
        {profilePics.map((pic, i) => (
          <img
            key={pic.src}
            src={pic.src}
            alt={pic.alt}
            className="aphoto-img"
            style={{ opacity: i === picIdx ? 1 : 0, zIndex: i === picIdx ? 1 : 0 }}
          />
        ))}
        <div className="aphoto-content">
          <div className="abig">
            <span className="lime">JUSTINE</span><br />
            <span className="stroke">M.</span> <span className="lime">HILARIO</span><br />
            <span>WEB DEV.</span>
          </div>
          <div className="adesc">
            Building modern web apps with React, TypeScript &amp; Laravel. Based in the Philippines.
          </div>
        </div>
        <div className="slider-dots">
          {profilePics.map((_, i) => (
            <button
              key={i}
              className={i === picIdx ? 'active' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
