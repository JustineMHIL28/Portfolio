import { useReveal } from '../hooks/useReveal';
import { footerData } from '../data/portfolio-data';

export const Footer = () => {
  const { ref, fadeClass } = useReveal(0.1);

  return (
    <section className="contact" id="contact" ref={ref}>
      <span className={`clabel ${fadeClass}`}>
        {'✦ GET IN TOUCH'}
      </span>
      <div className={`cbig ${fadeClass}`}>
        Let's<br />
        <a href="mailto:justinemhil28@gmail.com">work<br />together.</a>
      </div>
      <div className={`csocials ${fadeClass}`}>
        {footerData.map(s => (
          <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer">{s.name.toUpperCase()}</a>
        ))}
      </div>
    </section>
  );
};
