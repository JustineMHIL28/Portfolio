const items = [
  'REACT', 'TYPESCRIPT', 'LARAVEL', 'NEXT.JS',
  'TAILWIND CSS', 'PHP', 'POSTGRESQL', 'FULL STACK',
  'REACT', 'TYPESCRIPT', 'LARAVEL', 'NEXT.JS',
  'TAILWIND CSS', 'PHP', 'POSTGRESQL', 'FULL STACK',
];

export const Marquee = () => (
  <div className="mq">
    <div className="mq-inner">
      {items.map((item, i) => (
        <span key={i} className="mqi">{item}<span>✦</span></span>
      ))}
    </div>
  </div>
);
