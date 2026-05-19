import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { personalProjectsData } from '../data/portfolio-data';

export const PersonalProjects = () => {
  const { ref, fadeClass } = useReveal(0.1);
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number[]>([]);
  const project = personalProjectsData.find(p => p.id === selected);

  return (
    <section className="section" id="personal-projects">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`alabel ${fadeClass}`}>
          {'✦ MY WORK'}
        </div>
        <h2 className={`section-title ${fadeClass}`}>
          Personal<br /><span className="stroke">projects.</span>
        </h2>
        <p className={`section-desc ${fadeClass}`}>
          Projects I've built independently to explore new technologies and solve real-world problems.
        </p>
        <div className={`pc-grid ${fadeClass}`}>
          {personalProjectsData.map(p => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={expanded.includes(p.id)}
              onToggleExpand={() => setExpanded(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
              onViewImages={() => setSelected(p.id)}
            />
          ))}
        </div>
      </div>
      {selected && <ProjectDialog project={project} onClose={() => setSelected(null)} />}
    </section>
  );
};

function ProjectCard({ project, isExpanded, onToggleExpand, onViewImages }: any) {
  const truncate = (t: string, max = 150) => t.length <= max ? t : t.slice(0, max) + '...';
  const hasImg = project.subimage.length > 0;

  return (
    <div className="pc" onClick={hasImg ? onViewImages : undefined}>
      <div className="pc-img">
        {hasImg ? (
          <img src={project.subimage[0].src} alt={project.name} />
        ) : (
          <span style={{ color: 'var(--text-deep)', fontSize: '2rem' }}>✦</span>
        )}
      </div>
      <div className="pc-body">
        {project.subtitle && <div className="pc-sub">{project.subtitle}</div>}
        <div className="pc-title">{project.name}</div>
        <div className="pc-desc">
          {isExpanded ? project.description : truncate(project.description)}
          {project.description.length > 150 && (
            <span onClick={e => { e.stopPropagation(); onToggleExpand(); }} style={{ color: 'var(--accent)', cursor: 'pointer', marginLeft: 4 }}>
              {isExpanded ? ' less' : '...more'}
            </span>
          )}
        </div>
        <div className="pc-techs">
          {project.techimage.slice(0, 6).map((t: string, i: number) => (
            <div className="pc-tech" key={i}><img src={t} alt="" /></div>
          ))}
        </div>
        <div className="pc-links" onClick={e => e.stopPropagation()}>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="ti ti-external-link" /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-github" /></a>}
        </div>
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: any; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  if (!project) return null;
  const img = project.subimage[idx];

  return (
    <div className="pd-overlay" onClick={onClose}>
      <div className="pd-content" onClick={e => e.stopPropagation()}>
        <div className="pd-carousel">
          {project.subimage.length > 0 ? (
            <>
              <img src={img?.src || project.subimage[0].src} alt="" />
              <div className="pd-arrows">
                <button onClick={() => setIdx(i => Math.max(0, i - 1))}><i className="ti ti-chevron-left" /></button>
                <button onClick={() => setIdx(i => Math.min(project.subimage.length - 1, i + 1))}><i className="ti ti-chevron-right" /></button>
              </div>
              <div className="pd-nav">
                {project.subimage.slice(0, 12).map((_: any, i: number) => (
                  <button key={i} className={`pd-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
                ))}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-deep)' }}>
              <i className="ti ti-file-unknown" style={{ fontSize: '3rem' }} />
            </div>
          )}
          <button className="pd-close" onClick={onClose}><i className="ti ti-x" /></button>
        </div>
        <div className="pd-info">
          <div className="pc-sub">{project.subtitle}</div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div style={{ marginBottom: '1rem' }}>
            <div className="pc-sub" style={{ marginBottom: 8 }}>TECH STACK</div>
            <div className="pc-techs">
              {project.techimage.map((t: string, i: number) => (
                <div className="pc-tech" key={i}><img src={t} alt="" /></div>
              ))}
            </div>
          </div>
          <div className="pc-links">
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="ti ti-external-link" /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-github" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}
