import { useReveal } from '../hooks/useReveal';

const services = [
  { icon: 'ti ti-code', title: 'Website Development', desc: 'Building websites from start to finish using modern frameworks, responsive design, and optimized performance for every device.' },
  { icon: 'ti ti-layers-difference', title: 'Software Development', desc: 'Creating full-stack software applications with clean architecture, robust APIs, and intuitive user interfaces.' },
  { icon: 'ti ti-plug-connected', title: 'Third-Party Integration', desc: 'Integrating third-party services and APIs including payment gateways, authentication, cloud storage, and analytics.' },
];

export const Overview = () => {
  const { ref, fadeClass } = useReveal(0.1);

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`alabel ${fadeClass}`}>
          {'✦ WHAT I DO'}
        </div>
        <h2 className={`section-title ${fadeClass}`}>
          Services &<br /><span className="stroke">expertise.</span>
        </h2>
        <p className={`section-desc ${fadeClass}`}>
          Full Stack Developer with hands-on experience in building scalable web applications using React, TypeScript, Laravel, and MySQL.
        </p>
        <div className={`oc-grid ${fadeClass}`}>
          {services.map((s, i) => (
            <div className="oc" key={i}>
              <div className="oc-icon"><i className={s.icon} /></div>
              <div className="oc-title">{s.title}</div>
              <div className="oc-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
