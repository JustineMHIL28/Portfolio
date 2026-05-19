import { useEffect, useRef } from 'react';

const words = [
  { text: 'JUSTINE', className: 'w' },
  { text: 'M.', className: 'w stroke' },
  { text: 'HILARIO', className: 'w lime' },
  { text: 'WEB DEV.', className: 'w' },
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.w');
    if (!els) return;
    els.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'transform 1.1s cubic-bezier(.16,1,.3,1)';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 500 + i * 120);
    });
    setTimeout(() => {
      const meta = document.querySelector('.hmeta') as HTMLElement;
      if (meta) { meta.style.opacity = '1'; meta.style.transform = 'translateY(0)'; }
    }, 1200);
    setTimeout(() => {
      const extras = document.querySelectorAll('.h-side, .h-num, .h-status');
      extras.forEach(el => (el as HTMLElement).style.opacity = '1');
    }, 1400);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="h-side" style={{ opacity: 0, transition: 'opacity .8s' }}>
        JUSTINE M. HILARIO — WEB DEV — PH
      </div>
      {/* <div className="h-status" style={{ opacity: 0, transition: 'opacity .8s' }}>
        <div className="sdot" />
        OPEN TO WORK
      </div> */}
      <div className="big" ref={containerRef}>
        <span className="line"><span className={words[0].className}>{words[0].text}</span></span>
        <span className="line">
          <span className={words[1].className}>{words[1].text}</span>{' '}
          <span className={words[2].className}>{words[2].text}</span>
        </span>
        <span className="line"><span className={words[3].className}>{words[3].text}</span></span>
      </div>
      <div className="hmeta" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all .8s cubic-bezier(.16,1,.3,1)' }}>
        <p className="hdesc">
          Building modern web apps with React, TypeScript & Laravel. Based in the Philippines.
        </p>
        <div className="hscroll"><div className="hline" />SCROLL DOWN</div>
      </div>
      <div className="h-num" style={{ opacity: 0, transition: 'opacity .8s' }}>01 / 04</div>
    </section>
  );
};
