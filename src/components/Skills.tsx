import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const skillsData = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'TypeScript', pct: 85 },
  { name: 'Laravel / PHP', pct: 88 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'PostgreSQL / MySQL', pct: 78 },
  { name: 'Node.js / Express', pct: 75 },
  { name: 'Git / GitHub', pct: 85 },
];

export const Skills = () => {
  const { ref, revealed, fadeClass } = useReveal(0.1);
  const filled = useRef(false);

  useEffect(() => {
    if (!revealed || filled.current) return;
    filled.current = true;
    const els = document.querySelectorAll('.sfill');
    els.forEach(el => {
      const w = el.getAttribute('data-w');
      if (w) (el as HTMLElement).style.width = w + '%';
    });
  }, [revealed]);

  return (
    <section className="skills" id="skills">
      <div ref={ref} className={fadeClass}>
        <div className="alabel">{'✦ EXPERTISE'}</div>
        <h2>What I<br /><span className="stroke">do best.</span></h2>
      </div>
      <div className="slist">
        {skillsData.map((s, i) => (
          <div className="srow" key={i}>
            <div className="stop">
              <span className="sname">{s.name}</span>
              <span className="spct">{s.pct}%</span>
            </div>
            <div className="sbar">
              <div className="sfill" data-w={s.pct} style={{ transitionDelay: `${i * 0.1}s` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
