import { useReveal } from '../hooks/useReveal';
import { careerData } from '../data/portfolio-data';

export const Career = () => {
  const { ref, fadeClass } = useReveal(0.1);

  return (
    <section className="section" id="career">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`alabel ${fadeClass}`}>
          {'✦ EXPERIENCE'}
        </div>
        <h2 className={`section-title ${fadeClass}`}>
          Career<br /><span className="stroke">journey.</span>
        </h2>
        <p className={`section-desc ${fadeClass}`}>
          My professional experience building web applications across different industries.
        </p>
        <div className={`timeline ${fadeClass}`}>
          {careerData.map((job, i) => (
            <div className="tc" key={job.id}>
              <div className="tc-role">{job.position}</div>
              <div className="tc-company">{job.company}</div>
              <div className="tc-date">{job.duration}{job.location ? ` — ${job.location}` : ''}</div>
              <div className="tc-desc">
                {job.description.split('\n').map((item, idx) => (
                  <div key={idx} style={{ marginBottom: 4 }}>{item.replace('• ', '').replace('•', '')}</div>
                ))}
              </div>
              <div className="tc-techs">
                {job.techStack.map((tech: string) => (
                  <span className="tc-tech" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
