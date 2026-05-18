interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export const Marquee = ({ text, speed = 30, className = '' }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track inline-block" style={{ animationDuration: `${speed}s` }}>
        <span className="inline-block">{text}</span>
        <span className="inline-block">&nbsp;&nbsp;&nbsp;</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">&nbsp;&nbsp;&nbsp;</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">&nbsp;&nbsp;&nbsp;</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">&nbsp;&nbsp;&nbsp;</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};
